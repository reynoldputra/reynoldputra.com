import { useLayoutEffect, useRef } from "react";
import Cell from "../../general/cell";
import Grid from "../../general/grid";
import OpeningLoad from "./openingLoad";
import { gsap } from "gsap";
import Typed from "react-typed"

export default function Hero() {
  const component = useRef(null)
  const onloadingComplete = () => {
    gsap.to(component.current, {
      y: "-100%",
      ease: "power1.inOut",
      duration: 1
    })
  }

  return (
    <Grid className="relative">      
      <div className="absolute w-[60vw] min-h-[400px] -top-4 left-0 right-0 mx-auto rounded-b-md z-50" ref={component}>
        <OpeningLoad onCompleteHandle={onloadingComplete} />
      </div>
      {/* <div className="absolute w-screen h-screen bg-primary-950 z-30"></div> */}
      <Cell cols="2_2" colsMd="4_6" className="h-screen flex z-20 relative">
        <p className="m-auto text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {/* Bring your <span className="text-spray-400 font-mono">website</span> to life. */}
          <Typed strings={['Bring your <span className="text-spray-400 font-mono">website</span> to life.']}>
          </Typed>
        </p>
      </Cell>
    </Grid>
  )
}
