"use client";

import About from "@/containers/home-page/about-section";
import FavoriteTools from "@/containers/home-page/favorite-tools-section";
import HeroSection from "@/containers/home-page/hero-section";
import MyPorject from "@/containers/home-page/myproject-section";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import CursorLayout from "@/components/cursor/CursorLayout";

export default function Page() {
  const [isLoading, setLoading] = useState(true);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LenisScrollLayout isLoading={isLoading} background={false}>
      {isLoading && <Loading setLoading={setLoading} />}
      <CursorLayout>
        <div className="relative">
          <div className="bg-primary-950 relative z-10">
            <HeroSection isLoading={isLoading} />
            <About />
            <MyPorject />
            <FavoriteTools />
          </div>
          <Footer />
        </div>
      </CursorLayout>
    </LenisScrollLayout>
  );
}
