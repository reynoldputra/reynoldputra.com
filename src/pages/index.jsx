import Cell from "../components/general/cell";
import Layout from "../components/general/layout";
import Grid from "../components/general/grid";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Index() {
  const router = useRouter()
  const gsapComponent = useRef(null)

  useLayoutEffect(() =>{
    let ctx = gsap.context(() => {
      //gsap animation here
      const tl = gsap.timeline({ repeat: -1 });
      // const tl = gsap.timeline({
        // onComplete: () => {
        //   router.push('/home')          
        // }
      // });
      const paragraphs = gsap.utils.toArray('.message')
      console.log(paragraphs)

      tl.from(paragraphs[0], { opacity: 0, y: "100%", duration: 1 })
        .to(paragraphs[0], { opacity: 0, y: "-100%", duration: 1, delay: 2 })
        .from(paragraphs[1], { opacity: 0, y: "100%", duration: 1 })
        .to(paragraphs[1], { opacity: 0, y: "-100%", duration: 1, delay: 2 })
        .from(paragraphs[0], { opacity: 0, y: "-100%", duration: 1 })
      }, gsapComponent)
    return () => ctx.revert()
  })
  return (
    <Layout>
      <Grid>
        <Cell cols="1_full" className="h-screen flex flex-col justify-center items-center">
          <div className="text-sm text-center h-8 md:h-4 overflow-hidden relative w-full" ref={gsapComponent}>
            <p className="message absolute top-0 left-0 right-0 mx-auto">This website is still under development, some parts may not work properly.</p>  
            <p className="message absolute top-0 left-0 right-0 mx-auto">Open in desktop or pc mode for better experience.</p>  
          </div>
          <Link href='/home'>
            <p className="cursor-pointer border-b border-spray-400 py-1 text-md font-mono text-spray-400 mt-6">Home page </p>
          </Link>
        </Cell>
      </Grid>
    </Layout>
  )
}
