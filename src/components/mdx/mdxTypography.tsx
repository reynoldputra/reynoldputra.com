import clsx from "clsx";
import { AnchorHTMLAttributes, HTMLAttributes } from "react";

export const MdxArticle = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <article
      className={clsx(
        "w-full max-w-none prose dark:prose-invert prose-headings:text-foreground prose-strong:text-foreground prose-blockquote:text-foreground prose-blockquote:border-line prose-hr:border-line prose-th:text-foreground prose-thead:border-line prose-tr:border-line prose-pre:bg-primary-900 prose-pre:text-rockblue-50 prose-code:before:hidden prose-code:after:hidden",
        className,
      )}
      {...props}
    />
  );
};

export const MdxHeadingTwo = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  function getAnchor(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/[ ]/g, "-");
  }
  return (
    <a
      href={"#" + getAnchor(children?.toString() ?? "")}
      className={clsx("no-underline", className)}
    >
      <h2
        className="w-fit relative group cursor-pointer"
        id={getAnchor(children?.toString() ?? "")}
        {...props}
      >
        {children}
        <div className="absolute w-12 h-1 bg-accent mx-w-full group-hover:w-full transition-all" />
      </h2>
    </a>
  );
};

export const MdxAnchor = ({
  children,
  href,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={clsx("cursor-pointer text-accent", className)}
      href={href}
      target="_blank"
      rel="noreferer noopener"
      {...props}
    >
      {children}
    </a>
  );
};

export const MdxCode = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <code
      className={clsx(
        "bg-surface text-foreground border border-line rounded-md px-1.5",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
};

export const MdxCodeBlock = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLPreElement>) => {
  return (
    <pre
      className={clsx(
        "bg-primary-900 border border-rockblue-900/40 rounded-md p-4 overflow-x-auto hide-scrollbar",
        "font-mono text-sm text-rockblue-50",
        className,
      )}
      {...props}
    >
      <code className="text-inherit">{children}</code>
    </pre>
  );
};
