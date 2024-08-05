import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode, useEffect, useState } from "react";
import useWindowResize from "@/hooks/useWindowResize";

export default function LenisScroll({ children }: { children: ReactNode }) {
  const [isSmooth, setSmooth] = useState(true);

  const { windowWidth } = useWindowResize();

  useEffect(() => {
    if (windowWidth && windowWidth < 768) {
      setSmooth(false);
    } else {
      setSmooth(true);
    }
  }, [windowWidth]);

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: isSmooth,
        smoothTouch: isSmooth,
        easing: (t: number) => (t == 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}
