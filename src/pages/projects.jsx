import { useState } from "react";
import Layout from "../components/general/layout";
import ProjectSection from "../components/projects/projectSection";

export default function Projects() {
  const [isLoading, setLoading] = useState(false)
  return (
    <Layout>
      {isLoading && <Loading setLoading={setLoading} />}
      {!isLoading && <ProjectSection />}
    </Layout>
  )
}
