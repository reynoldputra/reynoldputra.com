"use client";

import ContactMe from "@/containers/contact-page/contact-me-section";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LenisScrollLayout navbarTransparent={false}>
      <ContactMe />
    </LenisScrollLayout>
  );
}
