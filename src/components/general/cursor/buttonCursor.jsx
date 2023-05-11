import { gsap } from "gsap"

export default function ButtonCursor ({children, circle = 40, opacityMain = 1, opacityTail = 0.2}) {
  const handleMouseEnter = () => {
    const cursor = gsap.utils.toArray('.custome-cursor')
    const cursorMain = gsap.utils.toArray('.cursor-main')
    gsap.to(cursor, {
      duration: 0.2,
      height: circle + "px",
      width: circle + "px",
      opacity: opacityTail,
    })
    gsap.to(cursorMain, {
      opacity: opacityMain,
    })
  }
  
  const handleMouseLeave = () => {
    const cursor = gsap.utils.toArray('.custome-cursor')
    const cursorMain = gsap.utils.toArray('.cursor-main')
    gsap.to(cursor, {
      height: "24px",
      width: "24px",
      opacity: 1
    })
    gsap.to(cursorMain, {
      opacity: 1
    })
  }

  return (
    <div className="button-cursor" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  )
}
