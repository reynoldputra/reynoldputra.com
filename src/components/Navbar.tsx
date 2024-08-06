"use client";

import Grid from "@/components/Grid";
import Cell from "@/components/Cell";
import OutlineLogo from "@/assets/outlineLogo";
import { HTMLAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";
import { navigationItems } from "@/data/navigationItems";
import { usePathname } from "next/navigation";
import Section from "./Section";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  bgTransparent?: boolean;
}

export default function Navbar({
  bgTransparent = true,
  className,
  ...rest
}: NavbarProps) {
  const pathname = usePathname();

  return (
    <div className={clsx("h-14 z-50 navbar", className)} {...rest}>
      <Section>
        <Grid screenHeight={false}>
          <Cell
            cols="1_full"
            colsMd="3_8"
            colsLg="4_6"
            className="flex justify-center md:justify-between w-full"
          >
            <div className="hidden md:block w-10 h-10 relative p-1 cursor-pointer">
              <Link href="/">
                <OutlineLogo />
              </Link>
            </div>
            <div className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 h-full items-center">
              {navigationItems.map((item) => (
                <Link href={item.href}>
                  <p
                    className={clsx(
                      "text-md font-mono text-rockblue-500 font-bold",
                      item.href == pathname ? "underline text-white" : "",
                    )}
                  >
                    {item.tag}
                  </p>
                </Link>
              ))}
            </div>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
}
