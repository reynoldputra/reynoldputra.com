import { gsap } from "gsap";
import { ReactNode } from "react";

export default function ButtonCursor({
  children,
  circle = 40,
  opacityMain = 1,
  opacityTail = 0.2,
}: {
  children: ReactNode;
  circle?: number;
  opacityMain?: number;
  opacityTail?: number;
}) {
  const handleMouseEnter = () => {
    const cursor = gsap.utils.toArray(".custome-cursor");
    const cursorMain = gsap.utils.toArray(".cursor-main");

    const isCursorExist = cursorMain.length && cursor.length;
    if (isCursorExist) {
      gsap.to(cursor, {
        duration: 0.2,
        height: circle + "px",
        width: circle + "px",
        opacity: opacityTail,
      });
    }

    if (cursorMain.length) {
      gsap.to(cursorMain, {
        opacity: opacityMain,
      });
    }
  };

  const handleMouseLeave = () => {
    const cursor = gsap.utils.toArray(".custome-cursor");
    const cursorMain = gsap.utils.toArray(".cursor-main");
    const isCursorExist = cursorMain.length && cursor.length;

    if (isCursorExist) {
      gsap.to(cursor, {
        height: "24px",
        width: "24px",
        opacity: 1,
      });
    }

    if (isCursorExist) {
      gsap.to(cursorMain, {
        opacity: 1,
      });
    }
  };

  return (
    <div
      className="button-cursor"
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
