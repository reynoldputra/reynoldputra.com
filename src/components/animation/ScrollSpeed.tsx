import { ReactNode, RefObject, useRef } from "react";
import { gsap } from "gsap";
import useWindowResize from "@/hooks/useWindowResize";
import { useGSAP } from "@gsap/react";

export default function ScrollSpeed({
  children,
  speed = 0,
  containerRef,
}: {
  children: ReactNode;
  speed?: number;
  containerRef: RefObject<HTMLDivElement>;
}) {
  const [windowWidth] = useWindowResize(() => {});

  const targetRef = useRef(null);

  const speedData = [
    {
      from: 0,
      to: 0,
    },
    {
      from: "600px",
      to: "-100px",
    },
    {
      from: "900px",
      to: "-150px",
    },
  ];

  useGSAP(
    () => {
      if (windowWidth && windowWidth > 768) {
        gsap.fromTo(
          targetRef.current,
          {
            translateY: speedData[speed].from,
          },
          {
            translateY: speedData[speed].to,
            scrollTrigger: {
              trigger: containerRef.current,
              scrub: 1,
              start: "top 60%",
              end: "+=300px top",
            },
            ease: "Linear.easeNone",
          },
        );
      }
    },
    { scope: containerRef, dependencies: [windowWidth] },
  );

  return <div ref={targetRef}>{children}</div>;
}
