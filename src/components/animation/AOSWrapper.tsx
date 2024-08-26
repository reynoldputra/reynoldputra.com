"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { ReactNode, useEffect } from "react";

export default function AOSWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
}
