"use client";

import LenisScrollLayout from "@/components/LenisScrollLayout";
import Loading from "@/components/Loading";
import ProjectSection from "@/containers/projects-page/project-section";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isLoading, setLoading] = useState(false);

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
