"use client";

import LenisScrollLayout from "@/components/LenisScrollLayout";
import Loading from "@/components/Loading";
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
    <LenisScrollLayout>
      {isLoading && <Loading setLoading={setLoading} />}
      {!isLoading && <ProjectSection />}
    </LenisScrollLayout>
  );
}
