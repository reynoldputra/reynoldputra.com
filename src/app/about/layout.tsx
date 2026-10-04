"use client";

import Footer from "@/components/Footer";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactNode, useEffect } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LenisScrollLayout>
      <Navbar />
      {children}
      <Footer />
    </LenisScrollLayout>
  );
}

