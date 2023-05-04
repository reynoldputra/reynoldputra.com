import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import FullOverlay from "./fullOverlay";
import Announcement from "./announcement";

export default function Loading ({setLoading}) {
  const [iconLoading, setIconLoading] = useState("-")
  const [countLoading, setCountLoading] = useState(0)

  const component = useRef()
    
  let i = 1 
  const icons = ["-", "\\", "|", "/"]

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIconLoading(prevIcon => icons[(icons.indexOf(prevIcon) + 1) % icons.length])
    }, 300)

    let count = 0
    const countIntervalId = setInterval(() => {
      setCountLoading(count)
      count++
      if (count > 100) {
        onloadingComplete()
        clearInterval(countIntervalId)
      }
    }, 3000/100)
    
    return () => {
      clearInterval(intervalId)
      clearInterval(countIntervalId)
    }
  }, [])

  const onloadingComplete = () => {
    console.log(component.current)
    gsap.to(component.current, {
      opacity : 0,
      ease: "power1.inOut",
      duration: 1,
      onComplete: () => {setLoading(false)}
    })
  }

  return (
    <FullOverlay >
      <div className="h-full w-full relative flex flex-col justify-center" ref={component}>
        <div className="text-center">
          <p>{iconLoading} loading ...</p>
          <p className="font-sans pt-2">{countLoading}%</p>
        </div>
        <div className="w-full h-auto bottom-12 absolute text-sm">
          <p className="w-full text-center">Open in desktop or pc for better experience.</p>
          {/* <Announcement /> */}
        </div>
      </div>
    </FullOverlay>
  ) 
}
