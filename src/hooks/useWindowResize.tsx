import { useEffect, useState } from "react";

const useWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return { windowWidth };
};

export default useWindowResize;
