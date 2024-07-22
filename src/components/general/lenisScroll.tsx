import { ReactLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import useWindowResize from "../../hooks/useWindowResize";

export default function LenisScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isSmooth, setSmooth] = useState(true);

  useWindowResize((windowWidth) => {
    if (windowWidth < 768 && windowWidth) {
      setSmooth(false);
    } else {
      setSmooth(true);
    }
    if (pathname == "/projects") setSmooth(false);
  });

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
