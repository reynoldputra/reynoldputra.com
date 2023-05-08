import { gsap } from 'gsap/dist/gsap'
import { useEffect, useRef } from "react";
import Navbar from "./navbar/navbar";
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import NavbarItems from "../../data/navbar-items.json"
import Head from "next/head";
import { useRouter } from 'next/router';
import Cursor from './cursor/cursor';

export default function Layout({children, isLoading = false, ...rest}) {
  const scrollRef = useRef()

  const router = useRouter()
  const {pathname} = router
  const items = NavbarItems.data

  const handleMouseMove = (e) => {
    const mouseX = e.pageX;
    let mouseY = e.pageY;
    
    const currentY = scrollRef.current.getBoundingClientRect().y
    mouseY += currentY

    const main = gsap.utils.toArray(".cursor-main")
    const cursorTail = gsap.utils.toArray(".cursor-tail")

    console.log(currentY, mouseY)

    gsap.to(cursorTail[0], {
      duration: 0.5,
      left: mouseX + 'px',
      top: mouseY + 'px',
    });

    gsap.set(main[0], {
      left: mouseX  + 'px',
      top: mouseY  + 'px'
    });
  }

  useEffect(() => {
  }, [])

  return (
    <ReactLenis root
      options={{
        smoothWheel : (pathname == "/projects" ? false : true)
      }}
    >
      <div className="bg-primary-950 min-h-screen w-full text-rockblue-50 overflow-hidden " {...rest} onMouseMove={handleMouseMove} id="smooth-wrapper" data-scroll-container ref={scrollRef}>
        <Head>
         {items.map((item) => {
            if (item.href === pathname) {
              const title = item.tag === "Home" ? "Reynold Putra" : `${item.tag} | Reynold Putra`;
              return <title key={title}>{title}</title>;
            }
          })}
        </Head>
        <div id="smooth-content">
          <Cursor />
          {!isLoading && <Navbar />}
          {children}
        </div>
      </div>
    </ReactLenis>
  ) 
}
