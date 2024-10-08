import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import FullOverlay from "./FullOverlay";

type LoadingProps = {
  setLoading: (t: boolean) => void;
};

export default function Loading({
  setLoading,
}: LoadingProps) {
  const [iconLoading, setIconLoading] = useState("-");
  const [countLoading, setCountLoading] = useState(0);

  const component = useRef<HTMLDivElement>(null);
  const icons = ["-", "\\", "|", "/"];

  const onloadingComplete = () => {
    if (component.current) {
      gsap.to(component.current, {
        opacity: 0,
        ease: "power1.inOut",
        duration: 1,
        onComplete: () => {
          setLoading(false);
        },
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIconLoading(
        (prevIcon) => icons[(icons.indexOf(prevIcon) + 1) % icons.length],
      );
    }, 300);

    let count = 0;
    const countIntervalId = setInterval(() => {
      setCountLoading(count);
      count++;
      if (count > 100) {
        clearInterval(countIntervalId);
        document.fonts.ready.then(() => {
          onloadingComplete();
        });
      }
    }, 2000 / 100);

    return () => {
      clearInterval(intervalId);
      clearInterval(countIntervalId);
    };
  });

  return (
    <FullOverlay>
      <div
        className="h-full w-full relative flex flex-col justify-center"
        ref={component}
      >
        <div className="text-center">
          <p>{iconLoading} loading ...</p>
          <p className="font-sans pt-2">{countLoading}%</p>
        </div>
        <div className="w-full h-auto bottom-20 md:bottom-12 absolute text-sm">
          <p className="w-full text-center text-rockblue-50/50">
            Open on desktop or PC for better experience.
          </p>
          {/* <Announcement /> */}
        </div>
      </div>
    </FullOverlay>
  );
}
