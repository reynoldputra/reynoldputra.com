import Cell from "../../general/cell";
import Grid from "../../general/grid";
import Image from "next/image"
import projects from "@/data/my-project.js"
import NextIcon from "../../../asset/icon/next";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function MyPorject(){
  const [project, setProject] = useState(0)
  const containerRef = useRef()

  const projects = [
    {
      img : "medselaras.png",
      url : "medselaras.com",
      year : 2022
    },
    {
      img : "inilhoits.png",
      url : "inlho.its.ac.id",
      year : 2023
    },
    {
      img : "irpro.png",
      url : "irproconsulting.com",
      year : 2023
    }
  ]

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=900",
          pin: true,
          markers: true,
          scrub: 1
        }
      });

      tl.fromTo(".project-1", {
          top : "350px" 
        },
        {
          top : "0px",
          onComplete: () => setProject(1)
      })

      tl.fromTo(".project-1", {
          opacity : 0 
        },
        {
          duration : 0.1,
          opacity : 1
      }, "<0.2")

      tl.fromTo(".project-2", {
          top : "350px" 
        },
        {
          top : "24px",
          onComplete: () => setProject(2)
      }, ">0.5")


      tl.fromTo(".project-2", {
          opacity : 0 
        },
        {
          duration : 0.1,
          opacity : 1
      }, "<0.2")

      tl.fromTo(".project-1", {
          scale : 1,
          filter : "brightness(100%)"
        },
        {
          scale : "0.94",
          filter : "brightness(50%)",
          duration : "0.2"
      }, "<0.1")


      tl.fromTo(".project-3", {
          top : "350px" 
        },
        {
          top : "48px",
          onComplete: () => setProject(3)
      }, ">0.5")

      tl.fromTo(".project-3", {
          opacity : 0 
        },
        {
          duration : 0.1,
          opacity : 1
      }, "<0.2")

      tl.fromTo(".project-2", {
          scale : 1,
          filter : "brightness(100%)"
        },
        {
          scale : "0.96",
          filter : "brightness(50%)",
          duration : "0.2"
      }, "<0.1")

      tl.fromTo(".project-3", {
        },
        {
          delay : 0.5
      })

    }, containerRef)
    return () => ctx.revert()
  }, [])
  
  return (
    <div ref={containerRef} >
      <Grid className="pt-8">
        <Cell cols="1_full" className="h-[30vh] font-mono flex flex-col justify-center items-center" >
          <p className="pb-4 text-2xl md:text-3xl text-spray-400 text-right" data-aos="flip-up">Selected Project</p> 
          <Link href="/projects">
            <button className="border border-rockblue-50 w-fit px-3 rounded-md flex items-center py-1 gap-3 text-sm" data-aos="zoom-in">
              <p>see more</p>
              <NextIcon className="mt-1 w-3" />
            </button>
          </Link>
        </Cell>
        <Cell cols="2_5" className="relative pt-12">
          {
            projects.map((project, idx) => (
              <div key={idx} className={"w-full aspect-[16/8] absolute overflow-hidden rounded-lg " + "project-" + (idx+1) }>
                <Image src={"/asset/my-project/" + project.img} fill className="object-cover" alt="cover" />
              </div>
            ))
          }
        </Cell>
        <Cell cols="8_4" className="flex flex-col items-end justify-center h-72">
          <p className="text-md font-mono">2022</p> 
          <p className="text-xl font-bold">medselaras.com</p> 
          <div className="border-b-[3px] mt-2 border-spray-400 w-32"></div>
          <div className="flex gap-2 mt-4 text-sm">
            <p className="border border-rockblue-50 rounded-full h-5 w-5 pt-[2px] text-center">1</p>
            <p className="border border-rockblue-50 rounded-full h-5 w-5 pt-[2px] text-center">2</p>
            <p className="border border-rockblue-50 rounded-full h-5 w-5 pt-[2px] text-center">3</p>
          </div>
        </Cell>
      </Grid>
    </div>
  )
}
