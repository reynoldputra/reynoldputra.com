import { gsap } from 'gsap/dist/gsap'
import { useEffect, useRef } from "react";
import Navbar from "./navbar/navbar";
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import NavbarItems from "../../data/navbar-items.json"
import Head from "next/head";
import { useRouter } from 'next/router';
import { ScrollTrigger } from 'gsap/dist/all';

export default function Layout({children, isLoading = false, ...rest}) {
  const cursorRef = useRef()
  const smallCursorRef = useRef()
  const scrollRef = useRef()

  const router = useRouter()
  const {pathname} = router
  const items = NavbarItems.data

  const handleMouseMove = (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    gsap.to(cursorRef.current, {
      duration: 0.5,
      x: mouseX + 'px',
      y: mouseY + 'px',
    });

    gsap.set(smallCursorRef.current, {
      x: mouseX  + 'px',
      y: mouseY  + 'px'
    });
  }

  useEffect(() => {
    console.log("Hello devs !")
  }, [])

  return (
    <ReactLenis root
      options={{
        smoothWheel : (pathname == "/projects" ? false : true)
      }}
    >
      <div className="bg-primary-950 min-h-screen w-full text-rockblue-50 overflow-hidden md:cursor-none" {...rest} onMouseMove={handleMouseMove} id="smooth-wrapper" data-scroll-container ref={scrollRef}>
        <Head>
         {items.map((item) => {
            if (item.href === pathname) {
              const title = item.tag === "Home" ? "Reynold Putra" : `${item.tag} | Reynold Putra`;
              return <title key={title}>{title}</title>;
            }
          })}
        </Head>
        <div id="smooth-content">
          {!isLoading && <Navbar />}
          <div className="h-6 w-6 -translate-x-1/2 -translate-y-1/2 bg-spray-400 absolute hidden md:block rounded-full mix-blend-difference z-50 custome-cursor" style={{pointerEvents : "none"}} ref={cursorRef}></div>
          <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-rockblue-50 absolute hidden md:block rounded-full z-50" style={{pointerEvents : "none"}} ref={smallCursorRef}></div>
          {children}
        </div>
      </div>
    </ReactLenis>
  ) 
}
