"use client";
import { gsap } from "gsap";
import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Typed from "react-typed";

export default function Hero() {
  const mouseEnterHandle = () => {
    gsap.to(".custome-cursor", {
      height: "100px",
      width: "100px",
    });
    gsap.to(".fill-cursor-tail", {
      opacity: 1,
      duration: 0.5,
    });
  };

  const mouseLeaveHandle = () => {
    gsap.to(".custome-cursor", {
      height: "24px",
      width: "24px",
    });
    gsap.to(".fill-cursor-tail", {
      opacity: 0,
      duration: 0.5,
    });
  };

  return (
    <Grid className="relative">
      <Cell cols="2_2" colsMd="4_6" className="h-screen flex z-20 relative">
        <div className="m-auto text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <div
            className="flex flex-wrap z-50"
            onMouseOver={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
          >
            <Typed
              showCursor={false}
              typeSpeed={50}
              strings={[
                `Bring your <span style="font-family: IBM Plex Mono; color: #2FD2BD;">website</span> to me.`,
                `Bring your <span style="font-family: IBM Plex Mono; color: #2FD2BD;">website</span> to life.`,
              ]}
            />
          </div>
        </div>
      </Cell>
    </Grid>
  );
}
