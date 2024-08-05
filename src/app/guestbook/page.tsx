"use client";

import LenisScrollLayout from "@/components/LenisScrollLayout";
import Loading from "@/components/Loading";
import GuestBookSection from "@/containers/guest-book-page/guestbook-section";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LenisScrollLayout cursor={false}>
      {isLoading && <Loading setLoading={setLoading} />}
      {!isLoading && <GuestBookSection />}
    </LenisScrollLayout>
  );
}
