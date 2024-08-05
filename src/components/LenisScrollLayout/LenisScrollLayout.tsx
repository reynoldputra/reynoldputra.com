import { HTMLAttributes, ReactNode, useRef } from "react";
import Navbar from "@/components/Navbar";
import NavbarItems from "@/data/navbar-items.json";
import Head from "next/head";
import { usePathname } from "next/navigation";
import LenisScroll from "./LenisScroll";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  background?: boolean;
  isLoading?: boolean;
  navbarTransparent?: boolean;
}

export default function LenisScrollLayout({
  children,
  background = true,
  isLoading = false,
  navbarTransparent = true,
  ...rest
}: LayoutProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const items = NavbarItems.data;
  return (
    <LenisScroll>
      <div
        className={
          "relative min-h-screen w-full text-rockblue-50 overflow-hidden " +
          (background && "bg-primary-950")
        }
        id="smooth-wrapper"
        data-scroll-container
        ref={scrollRef}
        {...rest}
      >
        <Head>
          {items.map((item) => {
            if (item.href === pathname) {
              const title =
                item.tag === "Home"
                  ? "Reynold Putra"
                  : `${item.tag} | Reynold Putra`;
              return <title key={title}>{title}</title>;
            }
          })}
        </Head>
        {!isLoading && <Navbar bgTransparent={navbarTransparent} />}
        {children}
      </div>
    </LenisScroll>
  );
}
