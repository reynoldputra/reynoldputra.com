"use client";

import ContactMe from "@/components/general/contactMe/ContactMe";
import Layout from "@/components/general/layout";
import Loading from "@/components/general/loading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout navbarTransparent={false}>
      {isLoading && <Loading setLoading={setLoading} />}
      {!isLoading && <ContactMe />}
    </Layout>
  );
}
