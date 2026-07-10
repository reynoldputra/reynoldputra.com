import { visit } from "unist-util-visit";
import { toString } from "hast-util-to-string";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import type { Root, Element } from "hast";

// isomorphic-mermaid needs CSSStyleSheet on globalThis for its internal style
// injection, but doesn't polyfill it itself. Provide a minimal stand-in before
// importing so mermaid's render path doesn't throw.
class MermaidCSSStyleSheet {
  cssRules: string[] = [];
  insertRule(rule: string, index?: number) {
    this.cssRules.splice(index ?? this.cssRules.length, 0, rule);
    return index ?? this.cssRules.length - 1;
  }
  replaceSync() {}
}

type MermaidModule = typeof import("isomorphic-mermaid")["default"];

interface MermaidState {
  mermaid: MermaidModule;
  savedWindow: typeof globalThis.window;
  savedDocument: typeof globalThis.document;
  savedCSSStyleSheet: typeof globalThis.CSSStyleSheet;
  mermaidWindow: typeof globalThis.window;
  mermaidDocument: typeof globalThis.document;
  mermaidCSSStyleSheet: typeof globalThis.CSSStyleSheet;
}

let mermaidStatePromise: Promise<MermaidState> | undefined;

// Lazily initialize mermaid on first use instead of at module load, so this
// module has no top-level await (that requires an es2017+ TS target, but the
// site targets es5). The result is memoized so initialization only runs once.
function getMermaidState(): Promise<MermaidState> {
  if (!mermaidStatePromise) {
    mermaidStatePromise = (async () => {
      const savedWindow = globalThis.window;
      const savedDocument = globalThis.document;
      const savedCSSStyleSheet = globalThis.CSSStyleSheet;

      // @ts-expect-error minimal polyfill, only the members mermaid.js touches
      globalThis.CSSStyleSheet = MermaidCSSStyleSheet;

      const { default: mermaid } = await import("isomorphic-mermaid");

      // isomorphic-mermaid assigns its fake window/document onto globalThis as a
      // side effect of import. Capture those, then restore the real (SSR) globals
      // so unrelated server code doesn't mistake this Node process for a browser.
      const mermaidWindow = globalThis.window;
      const mermaidDocument = globalThis.document;
      const mermaidCSSStyleSheet = globalThis.CSSStyleSheet;

      globalThis.window = savedWindow;
      globalThis.document = savedDocument;
      globalThis.CSSStyleSheet = savedCSSStyleSheet;

      // Match the site's dark palette (see tailwind.config.ts: primary/rockblue/spray/terminal).
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        htmlLabels: false,
        theme: "base",
        themeVariables: {
          darkMode: true,
          background: "#10203A", // primary-900
          primaryColor: "#10203A", // primary-900 — node fill
          primaryBorderColor: "#4A4E65", // rockblue-900
          primaryTextColor: "#F4F6F9", // rockblue-50
          secondaryColor: "#0B192F", // primary-950
          tertiaryColor: "#0B192F",
          lineColor: "#7C83AF", // rockblue-600
          textColor: "#F4F6F9", // rockblue-50
          mainBkg: "#10203A",
          nodeBorder: "#5FE9D2", // spray-300
          clusterBkg: "#0B192F",
          clusterBorder: "#4A4E65",
          edgeLabelBackground: "#10203A",
          titleColor: "#F4F6F9",
          actorBkg: "#10203A",
          actorBorder: "#5FE9D2",
          actorTextColor: "#F4F6F9",
          actorLineColor: "#7C83AF",
          signalColor: "#F4F6F9",
          signalTextColor: "#F4F6F9",
          labelBoxBkgColor: "#10203A",
          labelBoxBorderColor: "#5FE9D2",
          labelTextColor: "#F4F6F9",
          loopTextColor: "#F4F6F9",
          noteBkgColor: "#0B192F",
          noteBorderColor: "#4A4E65",
          noteTextColor: "#F4F6F9",
          activationBkgColor: "#1E59B5", // primary-800
          activationBorderColor: "#5FE9D2",
        },
      });

      return {
        mermaid,
        savedWindow,
        savedDocument,
        savedCSSStyleSheet,
        mermaidWindow,
        mermaidDocument,
        mermaidCSSStyleSheet,
      };
    })();
  }
  return mermaidStatePromise;
}

function restoreRealGlobals(state: MermaidState) {
  globalThis.window = state.savedWindow;
  globalThis.document = state.savedDocument;
  globalThis.CSSStyleSheet = state.savedCSSStyleSheet;
}

function useMermaidGlobals(state: MermaidState) {
  globalThis.window = state.mermaidWindow;
  globalThis.document = state.mermaidDocument;
  globalThis.CSSStyleSheet = state.mermaidCSSStyleSheet;
}

// Mermaid's render relies on the sandboxed window/document living on
// globalThis, and MDX files can compile concurrently (e.g. getAllBlogs'
// Promise.all), so renders are serialized to avoid two calls racing over the
// same global state.
let renderQueue: Promise<unknown> = Promise.resolve();

const renderMermaid = (id: string, code: string): Promise<{ svg: string }> => {
  const run = renderQueue.then(async () => {
    const state = await getMermaidState();
    useMermaidGlobals(state);
    try {
      return await state.mermaid.render(id, code);
    } finally {
      restoreRealGlobals(state);
    }
  });
  renderQueue = run.catch(() => {});
  return run;
};

let diagramId = 0;

const rehypeMermaid = () => {
  return async (tree: Root) => {
    const nodes: { node: Element; index: number; parent: Root | Element }[] = [];

    visit(tree, "element", (node: Element, index, parent) => {
      if (
        node.tagName === "pre" &&
        node.children.length === 1 &&
        node.children[0].type === "element" &&
        node.children[0].tagName === "code"
      ) {
        const codeNode = node.children[0] as Element;
        const classNames = (codeNode.properties?.className as string[]) || [];
        if (classNames.includes("language-mermaid") && typeof index === "number" && parent) {
          nodes.push({ node, index, parent: parent as Root | Element });
        }
      }
    });

    for (const { node, index, parent } of nodes) {
      const codeNode = node.children[0] as Element;
      const code = toString(codeNode);

      try {
        const { svg } = await renderMermaid(`mermaid-diagram-${diagramId++}`, code);
        const svgTree = fromHtmlIsomorphic(svg, { fragment: true });
        const wrapper: Element = {
          type: "element",
          tagName: "div",
          properties: {
            className: [
              "mermaid-diagram",
              "not-prose",
              "bg-primary-900",
              "border",
              "border-rockblue-900/40",
              "rounded-md",
              "p-4",
              "overflow-x-auto",
              "hide-scrollbar",
              "flex",
              "justify-center",
              "my-6",
            ],
          },
          children: [svgTree.children[0] as Element],
        };
        parent.children[index] = wrapper;
      } catch (error) {
        console.error("Failed to render mermaid diagram:", error);
      }
    }
  };
};

export default rehypeMermaid;
