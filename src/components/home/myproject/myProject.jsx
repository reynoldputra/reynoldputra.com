import Cell from "../../general/cell";
import Grid from "../../general/grid";
import Image from "next/image"
import projects from "@/data/my-project.js"
import NextIcon from "../../../asset/icon/next";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function MyPorject(){
  const containerRef = useRef()

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
          top : "4px",
          scale : "0.96"
      })

      tl.fromTo(".project-2", {
          top : "350px" 
        },
        {
          top : "24px",
          scale : "0.98"
      })

      tl.fromTo(".project-3", {
          top : "350px" 
        },
        {
          top : "44px",
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
          <div className="w-full project-1 aspect-[16/8] absolute overflow-hidden rounded-lg ">
            <Image src="/asset/my-project/medselaras.png" fill className="object-cover" alt="cover" />
          </div>
          <div className="w-full project-2 aspect-[16/8] absolute overflow-hidden rounded-lg">
            <Image src="/asset/my-project/medselaras.png" fill className="object-cover" alt="cover" />
          </div>
          <div className="w-full project-3 aspect-[16/8] absolute overflow-hidden rounded-lg">
            <Image src="/asset/my-project/medselaras.png" fill className="object-cover" alt="cover" />
          </div>
        </Cell>
      </Grid>
    </div>
  )
}
