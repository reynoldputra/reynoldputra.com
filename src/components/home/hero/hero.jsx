import { gsap } from "gsap";
import Cell from "../../general/cell";
import Grid from "../../general/grid";
import Typed from "react-typed"
import { useEffect } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Hero() {

  const mouseEnterHandle = () => {
    const cursor = gsap.utils.toArray('.custome-cursor')
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
    })
    const fill = gsap.utils.toArray('.fill-cursor-tail')
    gsap.to(fill, {
      opacity: 1,
      duration: 0.5
    })
  }

  const mouseLeaveHandle = () => {
    const cursor = gsap.utils.toArray('.custome-cursor')
    gsap.to(cursor, {
      height: "24px",
      width: "24px",
    })
    const fill = gsap.utils.toArray('.fill-cursor-tail')
    gsap.to(fill, {
      opacity: 0,
      duration: 0.5
    })
  }

  const typeComplete = () => {
    const bookIcon = <p>&#128220;</p>
    toast.info((
      <Link href="/guestbook">
        <div className="font-mono ml-4">Click to sign my <span className="font-bold underline">guest book </span></div>
      </Link>
    ), {
      progressStyle: {
        backgroundColor: "#2FD2BD",
      },
      bodyStyle: {
        backgroundColor: "#F4F6F9"
      },
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: bookIcon
    });
  }

  return (
    <Grid className="relative" >
      <Cell cols="2_2" colsMd="4_6" className="h-screen flex z-20 relative" >
        <div className="m-auto text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <div className="flex flex-wrap z-50" onMouseOver={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}>
            <Typed
              showCursor={false}
              typeSpeed={50}
              strings={[`Bring your <span style="font-family: IBM Plex Mono; color: #2FD2BD;">website</span> to me.`, `Bring your <span style="font-family: IBM Plex Mono; color: #2FD2BD;">website</span> to life.`]}
              onComplete={() => typeComplete()}
            />
          </div>
        </div>
      </Cell>
    </Grid>
  )
}
