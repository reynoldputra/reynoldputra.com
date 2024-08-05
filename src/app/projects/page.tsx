"use client";

import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import CursorLayout from "@/components/cursor/CursorLayout";
import ProjectSection from "@/containers/projects-page/project-section";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";

export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {isLoading && <Loading setLoading={setLoading} />}
      <CursorLayout>
        {!isLoading && <Navbar />}
        <ProjectSection />
      </CursorLayout>
    </>
  );
}
