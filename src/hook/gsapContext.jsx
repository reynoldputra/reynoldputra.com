import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const useGsapContext = (cb, state) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      cb()
    })

    return () => ctx.revert();
  }, null);
};

export default useGsapContext;
