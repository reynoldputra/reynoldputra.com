import { gsap } from "gsap";
import { useRef } from "react";

export default function Layout({children, ...rest}) {
  const cursorRef = useRef()
  const smallCursorRef = useRef()

  const handleMouseMove = (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    gsap.to(cursorRef.current, {
      duration: 0.5,
      x: mouseX + 'px',
      y: mouseY + 'px',
    });

    gsap.set(smallCursorRef.current, {
      x: mouseX  + 'px',
      y: mouseY  + 'px'
    });
  }
  return (
    <div className="bg-primary-950 min-h-screen w-full text-rockblue-50 overflow-hidden cursor-none" {...rest} onMouseMove={handleMouseMove}>
      <div className="h-6 w-6 -translate-x-1/2 -translate-y-1/2 bg-spray-400 absolute rounded-full mix-blend-difference z-50 custome-cursor" style={{pointerEvents : "none"}} ref={cursorRef}></div>
      <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-rockblue-50 absolute rounded-full z-50" style={{pointerEvents : "none"}} ref={smallCursorRef}></div>
      {children}
    </div>
  ) 
}
