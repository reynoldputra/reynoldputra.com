import { useRef } from "react"
import useGsapContext from "../../../hook/gsapContext"
import { gsap } from "gsap"
import useWindowResize from "../../../hook/useWindowResize"

export default function ScrollSpeed ({children, speed = 0, containerRef}) {
  const [windowWidth] = useWindowResize(() => {})

  const targetRef = useRef(null)
  
  const speedData = [
    {
      from : 0,
      to : 0
    },
    {
      from : "600px",
      to : "-100px"  
    },
    {
      from : "900px",
      to : "-150px"  
    }
  ]
  
  useGsapContext(() => {
    if(windowWidth > 768) {
      gsap.fromTo(targetRef.current, {
        translateY : speedData[speed].from
      }, {
        translateY : speedData[speed].to,
        scrollTrigger : {
          trigger : containerRef.current,
          scrub : 1,
          start : "top 60%",
          end : "+=300px top"
        },
        ease : "Linear.easeNone"
      })
    }
  }, containerRef, windowWidth)

  return (
    <div ref={targetRef}>
      {children}
    </div>
  )
}
