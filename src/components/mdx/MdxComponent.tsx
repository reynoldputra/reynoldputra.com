import { MergeComponents } from "@mdx-js/react/lib";
import { MDXComponents } from "mdx/types";
import { MdxAnchor, MdxCode, MdxHeadingTwo } from "./mdxTypography";

const MdxComponent:
  | MergeComponents
  | Readonly<MDXComponents>
  | null
  | undefined = {
  h2: ({ children, ...props }) => (
    <MdxHeadingTwo {...props}>{children}</MdxHeadingTwo>
  ),
  a: ({ children, ...props }) => <MdxAnchor {...props}>{children}</MdxAnchor>,
  code: ({ children, ...props }) => <MdxCode {...props}>{children}</MdxCode>,
};

export default MdxComponent;
