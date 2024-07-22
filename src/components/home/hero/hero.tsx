import { gsap } from "gsap";
import Cell from "@/components/general/cell";
import Grid from "@/components/general/grid";
import Typed from "react-typed";

export default function Hero() {
  const mouseEnterHandle = () => {
    const cursor = gsap.utils.toArray(".custome-cursor");
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
    });
    const fill = gsap.utils.toArray(".fill-cursor-tail");
    gsap.to(fill, {
      opacity: 1,
      duration: 0.5,
    });
  };

  const mouseLeaveHandle = () => {
    const cursor = gsap.utils.toArray(".custome-cursor");
    gsap.to(cursor, {
      height: "24px",
      width: "24px",
    });
    const fill = gsap.utils.toArray(".fill-cursor-tail");
    gsap.to(fill, {
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
