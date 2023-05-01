import Layout from "../components/general/layout";
import Loading from "../components/general/loading";
import About from "../components/home/about/about";
import Hero from "../components/home/hero/hero";
import MyPorject from "../components/home/myproject/myProject";
import TechStack from "../components/home/techStack/techStack";
import { useState } from "react";

export default function Index() {
  const [isLoading, setLoading] = useState(false)

  return (
    <Layout>
      {isLoading && <Loading setLoading={setLoading} /> }
      {!isLoading && 
        <>
          <Hero />  
          <About /> 
          <TechStack />
          <MyPorject />
        </>
      }
    </Layout>
  )
}
