import clsx from "@/lib/clsx";
import React from "react";

const Grid = ({contentStart = true, children, className, screenHeight = true, ...rest }) => {
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
    xl:px-[100px]
    xl:gap-[20px]

    relative
    ${contentStart ? 'place-content-start' : 'place-content-center'}

    ${screenHeight ? "min-h-screen" : ""}
  `;

  return (
    <>
      <div className={clsx(baseCN, className)} {...rest}>
        {children}
      </div>
    </>
  );
};

export default Grid;
