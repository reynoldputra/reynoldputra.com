import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Announcement() {
  const gsapComponent = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      const paragraphs = gsap.utils.toArray(".message") as gsap.TweenTarget[];

      tl.from(paragraphs[0], { opacity: 0, y: "100%", duration: 1 })
        .to(paragraphs[0], { opacity: 0, y: "-100%", duration: 1, delay: 2 })
        .from(paragraphs[1], { opacity: 0, y: "100%", duration: 1 })
        .to(paragraphs[1], { opacity: 0, y: "-100%", duration: 1, delay: 2 })
        .from(paragraphs[0], { opacity: 0, y: "-100%", duration: 1 });
    }, gsapComponent);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="text-sm text-center h-8 md:h-4 overflow-hidden relative w-full"
      ref={gsapComponent}
    >
      <p className="message absolute top-0 left-0 right-0 mx-auto">
        This website is still under development, some parts may not work
        properly.
      </p>
      <p className="message absolute top-0 left-0 right-0 mx-auto">
        Open in desktop or pc mode for better experience.
      </p>
    </div>
  );
}
