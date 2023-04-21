import Cell from "../general/cell";
import Grid from "../general/grid";
import projects from "../../data/my-project.js"
import ProjectImage from "./projectImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
export default function ProjectSection() {
  const containerRef = useRef(null)
  const component = useRef(null)
  useLayoutEffect(() =>{
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.container .section')
      console.log(sections)
      gsap.to(sections, {
        xPercent: -100 * (projects.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          markers: true,
          scrub: 1,
          snap: 1 / (projects.length - 1),
          end: "+=3000"
        }
    })
    }, component)
    return () => ctx.revert()
  })
  useEffect(()=> {
  }, [])

  return (
    <div ref={component}>
      <Grid>
        <Cell cols="1_full" className="text-center font-mono text-5xl h-screen flex items-center justify-center">
          <p>
            My <span className="text-spray-400">Projects</span>
          </p>
        </Cell>
      </Grid>
      <div className="container flex relative h-screen w-fit overflow-x-hidden" ref={containerRef}>
          <div className="absolute border-b border-rockblue-50 bottom-12 w-32 md:w-72 lg:w-96 left-4 md:left-28 lg:left-52"></div>
          {
            projects.map((project, idx) => {
              return (
                <ProjectImage key={idx} project={project} /> 
              )
            }) 
          }
      </div>
    </div>
  )
}
