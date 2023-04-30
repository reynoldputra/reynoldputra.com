import Terminal from "./terminal/terminal";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import Typed from "react-typed"

export default function Loading () {
  const [iconLoading, setIconLoading] = useState("-")
  const [countLoading, setCountLoading] = useState(0)
    
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
        clearInterval(countIntervalId)
      }
    }, 3000/100)
    
    return () => {
      clearInterval(intervalId)
      clearInterval(countIntervalId)
    }
  }, [])

  const onloadingComplete = () => {
    gsap.to(component.current, {
      y: "-100%",
      ease: "power1.inOut",
      duration: 1
    })
  }

  return (
    <div className="fixed bg-primary-950 w-screen h-screen z-50 flex justify-center items-center font-mono text-md text-rockblue-50">
      <div className="text-center">
        <p>{iconLoading} loading ...</p>
        <p>{countLoading}%</p>
      </div>
      {/* <Terminal> */}
      {/* </Terminal> */}
    </div>
  ) 
}
