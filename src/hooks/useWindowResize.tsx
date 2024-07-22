import { useEffect, useState } from "react";

const useWindowResize = (cb : (n: number) => void) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if(windowWidth) cb(windowWidth)
  }, [windowWidth])

  return [windowWidth] 
}

export default useWindowResize
