import Grid from "../grid";
import Cell from "../cell"
import {HiMenuAlt1} from "react-icons/hi"
import {IoCloseSharp} from "react-icons/io5"
import OutlineLogo from "../../../../public/asset/outlineLogo";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import Terminal from "../terminal/terminal.jsx"
import TermHeading from "../terminal/termHeading";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri"
import { useRouter } from "next/router";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)

  const router = useRouter()
  const {pathname} = router

  const navbarRef = useRef()

  const items = [
    {
      tag : "Home",
      href : "/"
    },
    {
      tag : "Projects",
      href : "/projects"
    }
  ]

  const mouseEnterHandle = () => {
    const cursor = gsap.utils.toArray('.custome-cursor')
    gsap.to(cursor, {
      height: "60px",
      width: "60px"
    })
  }

  const mouseLeaveHandle = () => {
    const cursor = gsap.utils.toArray('.custome-cursor')
    gsap.to(cursor, {
      height: "24px",
      width: "24px",
    })
  }

  const closeNavbar = () => {
    gsap.to(".navbar-modal", {
      opacity: 0,
      y: "-200px",
      onComplete: () =>  setNavbar(false)
    }) 
  }

  return (
    <div className="bg-primary-950/80 backdrop-blur-sm w-full fixed top-0 h-14 z-50 pt-2 border-b border-rockblue-50 navbar" data-aos="fade-down" ref={navbarRef}>
      <Grid screenHeight={false}>
        <Cell cols="1_full" colsMd="2_10" className="flex justify-between w-full">
          <div className="w-10 h-10 relative p-1 cursor-pointer">
            <Link href="/">
              <OutlineLogo  />
            </Link>
          </div>
          <div className="flex items-center gap-2" onClick={() => setNavbar(true)}>
            <p className="text-md font-mono">Menu</p>
            <HiMenuAlt1 className="w-6 h-6" />
          </div>
        </Cell>
      </Grid>
      {
        navbar &&  
        <div className="navbar-modal absolute h-screen w-screen bg-primary-950/90 top-0 z-50 flex justify-center items-center" data-aos="fade-down" onClick={closeNavbar}>
          <Terminal className="h-[500px] w-[320px] md:w-[400px]">
            <div className="w-full flex justify-between">
              <TermHeading className="text-sm w-full " />
              <IoCloseSharp className="h-6 w-6 cursor-pointer" onClick={closeNavbar}/>
            </div>
              <div className="h-full flex flex-col justify-center px-6">
                {
                  items.map((item, idx) => {
                    return (
                      <div key={idx} className="text-2xl pt-8 flex items-center" onClick={closeNavbar} onMouseOver={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}>
                        <div className="w-8">
                          {
                            (pathname == item.href) &&
                            <RiArrowRightSLine className="text-terminal-green h-8 w-8 mt-[1px] i-translate-x-1" /> 
                          }
                        </div>
                        <Link href={item.href}>
                          <button>{item.tag}</button>
                        </Link>
                      </div>
                    )
                  })
                }
                <div className="h-20"></div>
              </div>
          </Terminal>
        </div>
      }
    </div>
  )
}
