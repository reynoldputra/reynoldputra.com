import { useEffect, useState } from "react";
import Layout from "../components/general/layout";
import ProjectSection from "../components/projects/projectSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from "../components/general/loading";

export default function Projects() {
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Layout>
      {isLoading && <Loading setLoading={setLoading} />}
      {!isLoading && <ProjectSection />}
    </Layout>
  )
}
