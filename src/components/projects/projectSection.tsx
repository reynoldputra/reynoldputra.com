import Cell from "../general/cell";
import Grid from "../general/grid";
import { projectData } from "../../data/myProject";
import ProjectImage from "./projectImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import ProjectDetail from "./projectDetail";
import Typed from "react-typed";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isTyping, setTyping] = useState(true);

  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const component = useRef(null);
  const lineProgress = useRef(null);

  const progressHandle = (progress: number) => {
    gsap.to(lineProgress.current, {
      width: progress * 100 + "%",
    });
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".detail-panel") as gsap.TweenTarget[];
      const images = gsap.utils.toArray(".image-panel") as gsap.TweenTarget[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sections",
          start: "top top",
          end: () => "+=" + 100 * panels.length + "%",
          pin: true,
          scrub: 1,
          // markers: true,
          snap: {
            snapTo: 1 / images.length,
            duration: 0.6,
            delay: 0.2,
          },
          onSnapComplete: ({ progress }) => {
            setSelectedProject(progress * images.length - 1);
          },
          onUpdate: ({ progress }) => {
            progressHandle(progress);
          },
        },
      });

      panels.forEach((panel, index) => {
        tl.from(
          panel,
          {
            yPercent: 100,
          },
          "+=0.25",
        );
        tl.from(
          images[index],
          {
            xPercent: -100,
          },
          "<",
        );
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={component}>
      <Grid>
        <Cell
          cols="1_full"
          className="text-center font-mono text-3xl md:text-4xl lg:text-5xl xl:text-6xl h-screen flex items-center justify-center"
        >
          {!isTyping && (
            <div
              className="absolute animate-bounce bottom-10 left-0 right-0 mx-auto flex flex-col justify-center gap-2"
              data-aos="fade-up"
            >
              <p className="text-md font-normal font-sans">Keep scrolling</p>
              <BsFillArrowDownCircleFill className="h-6 w-auto" />
            </div>
          )}
          <Typed
            showCursor={false}
            onComplete={() => setTyping(false)}
            typeSpeed={30}
            strings={[
              `My <span style="font-family: IBM Plex Mono; color: #2FD2BD;">projects</span>`,
            ]}
          />
        </Cell>
      </Grid>
      <div className="relative pt-8" ref={containerRef}>
        <Grid className="sections h-screen pt-24 md:pt-32">
          <div className="absolute bottom-12 left-0 right-0 mx-auto md:mx-0 w-72 lg:w-96 md:left-28 lg:left-52">
            <div className="border-b-4 border-rockblue-50 w-full aboslute top-0 bottom-0 my-auto z-20 translate-y-[2px]"></div>
            <div className="w-full md:w-72 lg:w-96 relative z-50">
              <div
                ref={lineProgress}
                className="border-b-4 border-spray-400 absolute top-0 bottom-0 my-auto w-0 "
              ></div>
            </div>
          </div>
          <Cell
            cols="1_full"
            colsMd="1_6"
            colsLg="2_5"
            rows="1_1"
            className="font-mono w-full relative h-[30vh] md:h-96 overflow-hidden"
          >
            {projectData.map((project, idx) => {
              return <ProjectImage key={idx} project={project} />;
            })}
          </Cell>
          <Cell
            rows="2_1"
            rowsMd="1_1"
            cols="1_full"
            colsMd="7_6"
            colsLg="8_4"
            className="pt-12 h-72 md:h-96 md:pt-0 md:flex flex-col justify-center relative overflow-hidden"
          >
            {projectData.map((project, idx) => {
              return <ProjectDetail key={idx} project={project} />;
            })}
          </Cell>
          <div className="absolute bottom-12 right-10 md:right-28 lg:right-52 overflow-hidden hidden md:block">
            <div className="menu w-full">
              {projectData.map((project, idx) => {
                return (
                  <p
                    className={
                      "text-right transition-all " +
                      (idx == selectedProject
                        ? "font-bold text-lg text-rockblue-50"
                        : "text-sm text-rockblue-400")
                    }
                    key={idx}
                  >
                    {project.name}
                  </p>
                );
              })}
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
}
