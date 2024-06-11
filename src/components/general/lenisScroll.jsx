import { ReactLenis } from "@studio-freight/react-lenis";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import useWindowResize from "../../hook/useWindowResize";

export default function LenisScroll({ children }) {
  const router = useRouter()
  const { pathname } = router
  const [isSmooth, setSmooth] = useState(true)

  useWindowResize((windowWidth) => {
    if (windowWidth < 768 && windowWidth) {
      setSmooth(false)
    } else {
      setSmooth(true)
    }
    if (pathname == "/projects") setSmooth(false)
  })

  return (
    <ReactLenis root
      options={{
        smoothWheel: isSmooth,
        smoothTouch : isSmooth,
        easing: (t) => (t == 1 ? 1 : 1 - Math.pow(2, -10 * t))
      }}
    >
      {children}
    </ReactLenis>
  )
}
