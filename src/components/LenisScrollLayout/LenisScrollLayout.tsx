import { HTMLAttributes, ReactNode, useRef } from "react";
import LenisScroll from "./LenisScroll";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  background?: boolean;
  navbarTransparent?: boolean;
}

export default function LenisScrollLayout({
  children,
  background = true,
  navbarTransparent = true,
  ...rest
}: LayoutProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <LenisScroll>
      <div
        className={
          "relative min-h-screen w-full overflow-hidden"
        }
        id="smooth-wrapper"
        data-scroll-container
        ref={scrollRef}
        {...rest}
      >
        {children}
      </div>
    </LenisScroll>
  );
}
