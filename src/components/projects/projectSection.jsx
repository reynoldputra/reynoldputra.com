import Cell from "../general/cell";
import Grid from "../general/grid";
import projects from "../../data/my-project.js"
import ProjectImage from "./projectImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import { useLayoutEffect, useRef } from "react";
import ProjectDetail from "./projectDetail";

export default function ProjectSection() {
  gsap.registerPlugin(ScrollTrigger)
  const containerRef = useRef(null)
  const component = useRef(null)
  useLayoutEffect(() =>{
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.detail-panel')
      const images = gsap.utils.toArray('.image-panel')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sections",
          start: "top top",
          end: () => "+=" + 100 * panels.length + "%",
          pin: true,
          scrub: true,
          // markers: true,
          snap: {
            snapTo: 1 / (images.length),
            duration: 1,
            delay: 0.2,
            ease: "power1.inOut"
          },
        }
      });
      panels.forEach((panel, index) => {
        tl.from(
          panel,
          {
            yPercent: 100,
            ease: "none",
          },
          "+=0.25"
        );
        tl.from(
          images[index],
          {
            xPercent: -100,
            ease: "none",
          },
          "<"
        );
      });
    }, component)
    return () => ctx.revert()
  })

  return (
    <div ref={component}>
      <Grid>
        <Cell cols="1_full" className="text-center font-mono text-5xl h-screen flex items-center justify-center">
          <p>
            My <span className="text-spray-400">Projects</span>
          </p>
        </Cell>
      </Grid>
      <div className="relative pt-8" ref={containerRef}>
            <Grid className="sections h-screen w-screen pt-16 md:pt-24">
              <div className="absolute border-b border-rockblue-50 bottom-12 w-32 md:w-72 lg:w-96 left-4 md:left-28 lg:left-52"></div>
              <Cell cols="1_full" colsMd='1_6' colsLg="2_5" rows="1_1" className="font-mono w-full relative h-[30vh] md:h-96 overflow-hidden">
                {
                  projects.map((project, idx) => {
                    return (
                      <ProjectImage key={idx} project={project} /> 
                    )
                  }) 
                }
              </Cell>
              <Cell rows="2_1" rowsMd="1_1" cols="1_full" colsMd="7_6" colsLg="8_4" className="pt-12 md:pt-0 md:flex flex-col justify-center relative h-64 overflow-hidden">
                {
                  projects.map((project, idx) => {
                    return (
                      <ProjectDetail key={idx} project={project} /> 
                    )
                  }) 
                }
              </Cell>
            </Grid>
          </div>
    </div>
  )
}
