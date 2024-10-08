import clsx from "@/libs/clsx";
import React, { HTMLAttributes, ReactNode } from "react";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  contentStart?: boolean;
  children?: ReactNode;
  screenHeight?: boolean;
}

const Grid = ({
  contentStart = true,
  children,
  className = "",
  screenHeight = true,
  ...rest
}: GridProps) => {
  const baseCN = `
    grid

    grid-cols-4
    gap-x-[16px]
    px-[16px]

    sm:px-[24px]
    sm:grid-cols-4
    sm:gap-x-[20px]

    md:grid-cols-12
    md:px-[40px]
    md:gap-[16px]

    xl:grid-cols-12
    xl:px-0
    xl:gap-[20px]

    relative
    ${contentStart ? "place-content-start" : "place-content-center"}

    ${screenHeight ? "min-h-screen" : ""}
  `;

  return (
    <div className={clsx(baseCN, className)} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
