import { ReactNode } from "react";

export default function MdxLayout({ children }: { children: ReactNode }) {
  return <article className="prose text-white">{children}</article>;
}
