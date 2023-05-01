import { useEffect, useRef } from "react";
import Cell from "../../general/cell";
import Grid from "../../general/grid";
import Typed from "react-typed"
import { gsap } from "gsap";

export default function Hero() {
  const cursorRef = useRef()

  const handleMouseMove = (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    gsap.to(cursorRef.current, {
      duration: 0.5,
      x: mouseX - 8 + 'px',
      y: mouseY - 8 + 'px',
      ease: "power2.out",
    });
  }

  return (
    <Grid className="relative" onMouseMove={handleMouseMove}>      
      <div className="h-6 w-6 bg-spray-400 absolute rounded-full" ref={cursorRef}></div>
      {/* <div className="absolute w-screen h-screen bg-primary-950 z-30"></div> */}
      <Cell cols="2_2" colsMd="4_6" className="h-screen flex z-20 relative" >
        <div className="m-auto text-3xl md:text-4xl lg:text-5xl xl:text-6xl" >
          {/* Bring your <span className="text-spray-400 font-mono">website</span> to life. */}
          <div className="flex flex-wrap" >
            <Typed 
              showCursor={false}
              strings={[`Bring your <span style="font-family: IBM Plex Mono; color: #2FD2BD;">website</span> to life.`]}
            />
          </div>
        </div>
      </Cell>
    </Grid>
  )
}
