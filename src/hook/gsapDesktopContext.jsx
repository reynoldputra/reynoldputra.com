import useGsapContext from "./gsapContext";
import useWindowResize from "./useWindowResize";

const useGsapDesktopContext = (cb) => {
  const [windowWidth] = useWindowResize(() => {
  })
  useGsapContext(() => {
    if(windowWidth > 768)  {
      cb()
    }
  }, windowWidth)
}

export default useGsapDesktopContext
