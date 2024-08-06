"use client";

import Footer from "@/components/Footer";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Navbar from "@/components/Navbar";
import CursorLayout from "@/components/cursor/CursorLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LenisScrollLayout>
      <CursorLayout>
        <Navbar />
        <div className="min-h-screen"></div>
        <Footer />
      </CursorLayout>
    </LenisScrollLayout>
  );
}
