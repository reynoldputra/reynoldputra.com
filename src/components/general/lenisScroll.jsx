import { ReactLenis } from "@studio-freight/react-lenis";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

export default function LenisScroll({children}) {
  const router = useRouter()
  const { pathname } = router
  const [isSmooth, setSmooth] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  useEffect(() => {
    if(pathname == "/projects") setSmooth(false)
    if(windowWidth < 768) setSmooth(false)
  }, [windowWidth])


  return (
    <ReactLenis root
      options={{
        smoothWheel : isSmooth,
        easing: (t) => (t == 1 ? 1 : 1 - Math.pow(2, -10 * t)) 
      }}
    >
      {children}
    </ReactLenis>
  )
}
