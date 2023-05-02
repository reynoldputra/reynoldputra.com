import Cell from "../general/cell";
import Grid from "../general/grid";
import projects from "../../data/my-project.js"
import ProjectImage from "./projectImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProjectDetail from "./projectDetail";
import Typed from "react-typed"
import {BsFillArrowDownCircleFill} from "react-icons/bs"

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(0)
  const [isTyping, setTyping] = useState(true)
  gsap.registerPlugin(ScrollTrigger)
  const containerRef = useRef(null)
  const component = useRef(null)
  useEffect(() =>{
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.detail-panel')
      const images = gsap.utils.toArray('.image-panel')
      const menu = gsap.utils.toArray('.menu')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sections",
          start: "top top",
          end: () => "+=" + 100 * panels.length + "%",
          pin: true,
          scrub: 0.5,
          // markers: true,
          snap: {
            snapTo: 1 / (images.length),
            duration: 0.6,
            delay: 0.2,
            ease: "power1.inOut"
          },
          onSnapComplete: ({progress}) => {
            setSelectedProject(progress * images.length - 1)
          }
        }
      });
      panels.forEach((panel, index) => {
        tl.from(
          panel,
          {
            yPercent: 100,
          },
          "+=0.25"
        );
        tl.from(
          images[index],
          {
            xPercent: -100
          },
          "<"
        );
      });

    }, component)
    return () => ctx.revert()
  }, [setSelectedProject])

  return (
    <div ref={component}>
      <Grid>
        <Cell cols="1_full" className="text-center font-mono text-5xl h-screen flex items-center justify-center">
            {
              !isTyping &&
              <div className="absolute animate-bounce bottom-10 left-0 right-0 mx-auto flex flex-col justify-center gap-2" data-aos="fade-up">
                <p className="text-md font-normal font-sans">Keep scrolling</p>
                <BsFillArrowDownCircleFill className="h-6 w-auto" /> 
              </div>
            }
            <Typed
              showCursor={false}
              onComplete={() => setTyping(false)}
              typeSpeed={30}
              strings={[`My <span style="font-family: IBM Plex Mono; color: #2FD2BD;">projects</span>`]}
            />
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
              <Cell rows="2_1" rowsMd="1_1" cols="1_full" colsMd="7_6" colsLg="8_4" className="pt-12 h-96 md:pt-0 md:flex flex-col justify-center relative overflow-hidden">
                {
                  projects.map((project, idx) => {
                    return (
                      <ProjectDetail key={idx} project={project} /> 
                    )
                  }) 
                }
              </Cell>
              <div className="absolute bottom-12 right-10 md:right-28 lg:right-52 overflow-hidden hidden md:block">
                <div className="menu w-full">
                  {
                    projects.map((project, idx) => {
                      return (
                        <p className={"text-right transition-all " + (idx == selectedProject ? "font-bold text-lg text-rockblue-50" : "text-sm text-rockblue-400")} key={idx}>{project.name}</p>
                      )
                    })
                  }
                </div>
              </div>
            </Grid>
          </div>
    </div>
  )
}
