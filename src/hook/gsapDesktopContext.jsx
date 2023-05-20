import useWindowResize from "./useWindowResize";
import useGsapContext from "./gsapContext";

const useGsapDesktopContext = (cb, ref) => {
  const [windowWidth] = useWindowResize(() => {
  })
  
  useGsapContext(cb, ref, windowWidth)
}

export default useGsapDesktopContext
