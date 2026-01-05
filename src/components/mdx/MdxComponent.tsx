import { MergeComponents } from "@mdx-js/react/lib";
import { MDXComponents } from "mdx/types";
import { MdxAnchor, MdxCode, MdxCodeBlock, MdxHeadingTwo } from "./mdxTypography";

const MdxComponent:
  | MergeComponents
  | Readonly<MDXComponents>
  | null
  | undefined = {
  h2: ({ children, ...props }) => (
    <MdxHeadingTwo {...props}>{children}</MdxHeadingTwo>
  ),
  a: ({ children, ...props }) => <MdxAnchor {...props}>{children}</MdxAnchor>,
  code: ({ children, className, ...props }) => {
    // Check if it's a code block (has className from syntax highlighting) or inline code
    if (className) {
      return <MdxCodeBlock className={className} {...props}>{children}</MdxCodeBlock>;
    }
    return <MdxCode {...props}>{children}</MdxCode>;
  },
  pre: ({ children, ...props }) => {
    // Pre tag is typically used for code blocks, but MDX handles code blocks differently
    // Return children as-is to let code component handle styling
    return <>{children}</>;
  },
};

export default MdxComponent;
