import { gsap } from 'gsap/dist/gsap'
import { useRef } from "react";
import Navbar from "./navbar/navbar";
import NavbarItems from "../../data/navbar-items.json"
import Head from "next/head";
import { useRouter } from 'next/router';
import Cursor from './cursor/cursor';
import LenisScroll from './lenisScroll';

export default function Layout({ children, background = true, isLoading = false, navbarTransparent = true, cursor = true, ...rest }) {
  const scrollRef = useRef()

  const router = useRouter()
  const { pathname } = router
  const items = NavbarItems.data

  const handleMouseMove = (e) => {
    const mouseX = e.pageX;
    let mouseY = e.pageY;

    const currentY = scrollRef.current.getBoundingClientRect().y
    mouseY += currentY

    const main = gsap.utils.toArray(".cursor-main")
    const cursorTail = gsap.utils.toArray(".cursor-tail")

    gsap.to(cursorTail[0], {
      duration: 0.4,
      left: mouseX + 'px',
      top: mouseY + 'px',
    });

    gsap.set(main[0], {
      left: mouseX + 'px',
      top: mouseY + 'px'
    });
  }

  const handleMouseDown = () => {
    // const cursorTail = gsap.utils.toArray(".cursor-tail")
    // gsap.to(cursorTail, {
    //   duration: 0.2,
    //   width: "18px",
    //   height: "18px"
    // })
  }

  const handleMouseUp = () => {
    // const cursorTail = gsap.utils.toArray(".cursor-tail")
    // gsap.to(cursorTail, {
    //   width: "24px",
    //   height: "24px"
    // })
  }

  return (
    <LenisScroll>
      <div className={"relative min-h-screen w-full text-rockblue-50 overflow-hidden cursor-default " + (background && "bg-primary-950")} {...rest} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} id="smooth-wrapper" data-scroll-container ref={scrollRef}>
        <Head>
          {items.map((item) => {
            if (item.href === pathname) {
              const title = item.tag === "Home" ? "Reynold Putra" : `${item.tag} | Reynold Putra`;
              return <title key={title}>{title}</title>;
            }
          })}
        </Head>
        {
          cursor && <Cursor />
        }
        {!isLoading && <Navbar bgTransparent={navbarTransparent} />}
        {children}
      </div>
    </LenisScroll>
  )
}
