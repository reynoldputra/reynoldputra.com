"use client";

import Footer from "@/components/Footer";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Navbar from "@/components/Navbar";
import CursorLayout from "@/components/cursor/CursorLayout";
import About from "@/containers/home-page/about-section";
import RecentProject from "@/containers/home-page/recent-project-section";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LenisScrollLayout background={false}>
      <CursorLayout className="relative">
        <Navbar />
        <div className="bg-primary-950 relative z-10 min-h-screen mb-64">
          <About className="mt-24" />
          <RecentProject className="mt-32" />
        </div>
        <Footer />
      </CursorLayout>
    </LenisScrollLayout>
  );
}