import Grid from "../grid";
import Cell from "../cell"
import {HiMenuAlt1} from "react-icons/hi"
import {IoCloseSharp} from "react-icons/io5"
import OutlineLogo from "../../../../public/asset/outlineLogo";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Terminal from "../terminal/terminal.jsx"
import TermHeading from "../terminal/termHeading";
import Link from "next/link";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)

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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useEffect(() => {
    let currentScrollPos = window.pageYOffset;
    setPrevScrollPos(currentScrollPos);

    const handleScroll = () => {
      currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        gsap.to(".navbar", { top: "0px", duration: 0.2 });
      } else {
        gsap.to(".navbar", { top: "-100px", duration: 0.2 });
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="bg-primary-950/80 backdrop-blur-sm w-full fixed top-0 h-14 z-50 pt-2 border-b border-rockblue-50 navbar">
      <Grid screenHeight={false}>
        <Cell cols="2_10" className="flex justify-between w-full">
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
        <div className="absolute h-screen w-screen top-6 z-[100] flex justify-center items-center" data-aos="fade-down">
          <Terminal className="h-[500px] w-[400px]">
            <div className="w-full flex justify-end">
              <IoCloseSharp className="h-6 w-6 cursor-pointer" onClick={() => setNavbar(false)}/>
            </div>
            <TermHeading className="text-sm w-full flex justify-center pt-6" />
              <div className="h-full flex flex-col justify-center px-6">
                {
                  items.map((item, idx) => {
                    return (
                      <div className="text-2xl pt-8" onClick={() => setNavbar(false)}>
                        <Link key={idx} href={item.href}>
                          <button >{item.tag}</button>
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
