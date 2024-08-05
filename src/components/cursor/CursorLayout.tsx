"use client";
import { MouseEvent, ReactNode, useRef } from "react";
import Cursor from "./Cursor";
import { gsap } from "gsap";

const CursorLayout = ({ children }: { children: ReactNode }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const main = gsap.utils.toArray(".cursor-main") as gsap.TweenTarget[];
    const cursorTail = gsap.utils.toArray(".cursor-tail") as gsap.TweenTarget[];
    const isCursorExist = main.length && cursorTail.length;
    if (isCursorExist) {
      const mouseX = e.pageX;
      let mouseY = e.pageY;

      if (cursorRef.current) {
        const currentY = cursorRef.current.getBoundingClientRect().y;
        mouseY += currentY;

        gsap.to(cursorTail[0], {
          duration: 0.4,
          left: mouseX + "px",
          top: mouseY + "px",
        });

        gsap.set(main[0], {
          left: mouseX + "px",
          top: mouseY + "px",
        });
      }
    }
  };

  const handleMouseDown = () => {
    // const cursorTail = gsap.utils.toArray(".cursor-tail")
    // gsap.to(cursorTail, {
    //   duration: 0.2,
    //   width: "18px",
    //   height: "18px"
    // })
  };

  const handleMouseUp = () => {
    // const cursorTail = gsap.utils.toArray(".cursor-tail")
    // gsap.to(cursorTail, {
    //   width: "24px",
    //   height: "24px"
    // })
  };

  return (
    <div
      className="relative min-h-screen w-full"
      ref={cursorRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Cursor />
      {children}
    </div>
  );
};

export default CursorLayout;
