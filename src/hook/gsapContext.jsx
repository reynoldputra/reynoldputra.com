import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const useGsapContext = (cb) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      cb()
    })

    return () => ctx.revert();
  }, []);
};

export default useGsapContext;
