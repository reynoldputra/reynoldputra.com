import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const useGsapContext = (cb, ref, state = null) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() =>{
      cb()
    }
    , ref)
    return () => ctx.revert();
  }, [state]);

};
export default useGsapContext;
