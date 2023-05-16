import { useEffect, useState } from "react";

const useWindowResize = (cb) => {
  const [windowWidth, setWindowWidth] = useState(null);

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
    cb(windowWidth)
  }, [windowWidth])

  return [windowWidth] 
}

export default useWindowResize
