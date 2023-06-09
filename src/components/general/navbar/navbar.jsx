import Grid from "../grid";
import Cell from "../cell"
import { HiMenuAlt1 } from "react-icons/hi"
import { IoCloseSharp } from "react-icons/io5"
import OutlineLogo from "../../../../public/asset/outlineLogo";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import Terminal from "../terminal/terminal.jsx"
import TermHeading from "../terminal/termHeading";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri"
import { useRouter } from "next/router";
import NavbarItems from "../../../data/navbar-items.json"
import ButtonCursor from "../cursor/buttonCursor";
import useGsapContext from "../../../hook/gsapContext";

export default function Navbar({ bgTransparent = true }) {
  const [navbar, setNavbar] = useState(false)

  const router = useRouter()
  const { pathname } = router

  const navbarRef = useRef()

  const items = NavbarItems.data

  const closeNavbar = () => {
    gsap.to(".navbar-modal", {
      opacity: 0,
      onComplete: () => setNavbar(false)
    })
  }

  const openNavbar = () => {
    setNavbar(true)
  }

  useGsapContext(() => {
    if (navbar) {
      gsap.fromTo(".navbar-modal", {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.3
      })
    }
  }, null, navbar)

  useGsapContext(() => {
    gsap.to(navbarRef.current, {
      y: 0,
      duration: 1.5
    })
  }, [])

  return (
    <div className={"w-full fixed top-0 h-14 z-50 pt-2 border-b border-rockblue-50 navbar -translate-y-28 " + (bgTransparent ? "backdrop-blur-sm bg-primary-950/80" : "bg-primary-950")} ref={navbarRef}>
      <Grid screenHeight={false}>
        <Cell cols="1_full" colsMd="2_10" className="flex justify-between w-full">
          <div className="w-10 h-10 relative p-1 cursor-pointer">
            <Link href="/">
              <OutlineLogo />
            </Link>
          </div>
          <ButtonCursor>
            <div className="flex items-center h-full gap-2 hover:text-spray-400 duration-300" onClick={openNavbar}>
              <p className="text-md font-mono">Menu</p>
              <HiMenuAlt1 className="w-6 h-6" />
            </div>
          </ButtonCursor>
        </Cell>
      </Grid>
      {
        navbar &&
        <div className="navbar-modal absolute h-screen w-screen bg-primary-950/90 top-0 z-50 flex justify-center items-center" onClick={closeNavbar}>
          <Terminal className="h-[500px] w-[320px] md:w-[400px] relative">
            <div className="w-full flex justify-between">
              <TermHeading className="text-sm w-full " />
              <IoCloseSharp className="h-6 w-6 cursor-pointer" onClick={closeNavbar} />
            </div>
            <div className="h-full flex flex-col justify-center px-6">
              {
                items.map((item, idx) => {
                  return (
                    <div key={idx} className="text-xl pt-4 flex items-center" onClick={closeNavbar}>
                      <div className="w-8">
                        {
                          (pathname == item.href) &&
                          <ButtonCursor>
                            <RiArrowRightSLine className="text-terminal-green h-8 w-8 mt-[1px] i-translate-x-1" />
                          </ButtonCursor>
                        }
                      </div>
                      <Link href={item.href}>
                        <ButtonCursor>
                          <button>{item.tag}</button>
                        </ButtonCursor>
                      </Link>
                    </div>
                  )
                })
              }
              <div className="h-20"></div>
            </div>
            <div className="text-sm text-rockblue-600 absolute bottom-4">This website is still under development, some parts may not work properly.</div>
          </Terminal>
        </div>
      }
    </div>
  )
}
