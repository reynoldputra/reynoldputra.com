"use client";

import ContactMe from "@/containers/contact-page/contact-me-section";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Loading from "@/components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LenisScrollLayout navbarTransparent={false}>
      {isLoading && <Loading setLoading={setLoading} />}
      {!isLoading && <ContactMe />}
    </LenisScrollLayout>
  );
}
