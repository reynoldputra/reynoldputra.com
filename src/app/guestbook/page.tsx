"use client";

import LenisScrollLayout from "@/components/LenisScrollLayout";
import GuestBookSection from "@/containers/guest-book-page/guestbook-section";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LenisScrollLayout>
      <GuestBookSection />
    </LenisScrollLayout>
  );
}
