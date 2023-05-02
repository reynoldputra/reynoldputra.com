import Cell from "../../general/cell";
import Grid from "../../general/grid";
import Image from "next/image"
import projects from "@/data/my-project.js"
import NextIcon from "../../../asset/icon/next";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
export default function MyPorject(){
  const scrollContainer = useRef()
  const triggeredContainer = useRef()

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const tlHor = gsap.timeline({
  //       scrollTrigger : {
  //         trigger: scrollContainer.current,
  //         markers: true,
  //         scrub: 1,
  //         start: "top 200px",
  //         end: "200px 200px"
  //       }
  //     })
  //     tlHor.from(triggeredContainer.current, 
  //       {
  //         x: "50%"
  //       }
  //     )

  //   }, scrollContainer)
  //   return () => ctx.revert()
  // })
  
  return (
    <div ref={scrollContainer}>
      <Grid className="pt-8" >
        <Cell cols="1_full" className="h-[30vh] font-mono flex flex-col justify-center items-center" >
          <p className="pb-4 text-2xl md:text-3xl text-spray-400 text-right" data-aos="flip-up">Project showcase</p> 
          <Link href="/projects">
            <button className="border border-rockblue-50 w-fit px-3 rounded-md flex items-center py-1 gap-3 text-sm" data-aos="zoom-in">
              <p>see more</p>
              <NextIcon className="mt-1 w-3" />
            </button>
          </Link>
        </Cell>
        <Cell cols="1_full" className="relative flex flex-col justify-center gap-12 overflow-x-scroll hide-scrollbar pb-12">
          <div className="absoulte min-w-fit w-full flex justify-center gap-12" ref={triggeredContainer}>
            {
              projects.map((project, idx) => {
                if(idx < projects.length/2) {
                  return (
                    <div className="aspect-video w-52 lg:w-80 relative" key={idx} data-aos="flip-up">
                      <Image src={"/asset/my-project/" + project.image} fill className="object-cover" key={idx} alt="project image"/>
                    </div>
                  )
                } 
              }) 
            }
          </div> 
          <div className="absoulte min-w-fit w-full flex justify-center gap-12" ref={triggeredContainer}>
            <div className="w-28 md:hidden"></div>
            {
              projects.map((project, idx) => {
                if(idx >= projects.length/2) {
                  return (
                    <div className="aspect-video w-52 md:w-48 lg:w-80 relative" key={idx} data-aos="flip-up">
                      <Image src={"/asset/my-project/" + project.image} fill className="object-cover" key={idx} alt="project image"/>
                    </div>
                  )
                } 
              }) 
            }
          </div> 
        </Cell>
      </Grid>
    </div>
  )
}
