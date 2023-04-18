import Layout from "../components/general/layout";
import About from "../components/home/about/about";
import Hero from "../components/home/hero/hero";
import TechStack from "../components/home/techStack/techStack";

export default function Home() {
  return (
    <Layout>
      <Hero />  
      <About /> 
      <TechStack />
    </Layout>
  )
}
