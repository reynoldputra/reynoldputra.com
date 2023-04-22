import { useLayoutEffect, useRef } from "react";
import EmailLogo from "../../../asset/logo/email";
import GithubLogo from "../../../asset/logo/github";
import InstagramLogo from "../../../asset/logo/instagram";
import LinkedinLogo from "../../../asset/logo/linkedin";
import Cell from "../../general/cell";
import Grid from "../../general/grid";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
 
gsap.registerPlugin(ScrollTrigger)
export default function About() {
  const containerRef = useRef()
  const name = ["R", "e", "y", "n", "o", "l", "d"]
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.containerName .char')
      const tl = gsap.timeline({
        scrollTrigger : {
          trigger: containerRef.current,
          markers: true,
          scrub: 1
        }
      })
      tl.fromTo(sections, 
        {
          width : "100%"
        },
        {
          width : 0
        },
      )
    }, containerRef)
    return () => ctx.revert()
  })

  return (
    <div className="relative" ref={containerRef}>
      <Grid className="z-20">
        <div className="absolute bottom-0 right-0 py-8 px-4 flex w-full md:block md:left-0 md:right-auto md:w-16">
          <div className="w-full border border-rockblue-50 h-0 m-auto mr-6 md:w-0 md:h-64 md:mr-auto md:mb-6"></div>
          <div className="flex gap-2 md:flex-col items-center">
            <GithubLogo />
            <LinkedinLogo />
            <EmailLogo />
            <InstagramLogo />
          </div>
        </div>
        <Cell cols="1_3" colsMd="3_full">
          <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-mono pt-36 lg:pt-48">
            <p>Hello,</p>
            <p className="text-spray-400">I'm Reynold</p>
          </div>
        </Cell>
        <Cell cols="1_4" colsSm="2_3" colsMd="4_5">
          <p className="pt-16 text-md">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
          </p>
        </Cell>
      </Grid>
      <div className="absolute hidden w-full h-full md:flex justify-center items-center top-0 left-0 z-10">
        <div className="w-full flex containerName">
          {
            name.map(c => (
              <div className="w-fit relative">
                <p className="text-[26vw] font-bold text-center -translate-x-[1.5vw] text-stroke opacity-10 w-fit">
                  {c}
                </p>
                <div className="absolute char border border-red-200 h-full w-full bg-primary-950 top-0 right-0"></div> 
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
