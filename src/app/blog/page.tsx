"use client";

import Footer from "@/components/Footer";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Navbar from "@/components/Navbar";
import CursorLayout from "@/components/cursor/CursorLayout";
import Typography from "@/components/typography/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import ProgrammingGif from "~/assets/programming.gif"

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LenisScrollLayout>
      <CursorLayout>
        <Navbar />
        <div className="min-h-screen flex flex-col w-full justify-center items-center relative z-30">
          <Image src={ProgrammingGif} alt="programming gif" width={600} height={400} className="px-8" />
          <Typography font="mono" className="mt-4">Under Construction</Typography>
        </div>
        <Footer />
      </CursorLayout>
    </LenisScrollLayout>
  );
}
