'use client'
import { useEffect, useState } from "react";
import Layout from "@/components/general/layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from "@/components/general/loading";
import ContactMe from "@/components/general/contactMe/ContactMe";

export default function Projects() {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Layout navbarTransparent={false}>
      {isLoading && <Loading setLoading={setLoading} />}
      {!isLoading && <ContactMe/>}
    </Layout>
  )
}
