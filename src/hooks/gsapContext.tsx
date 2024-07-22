import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RefObject, useEffect } from "react";

const useGsapContext = (
  cb: () => void,
  ref?: RefObject<HTMLDivElement> | null,
  state?: string | boolean | number | null,
) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (ref) {
      let ctx = gsap.context(() => {
        cb();
      }, ref);
      return () => ctx.revert();
    }
  }, [state]);
};
export default useGsapContext;
