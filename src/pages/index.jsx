import Layout from "../components/general/layout";
import About from "../components/home/about/about";
import Hero from "../components/home/hero/hero";
import MyPorject from "../components/home/myproject/myProject";
import TechStack from "../components/home/techStack/techStack";

export default function Index() {
  return (
    <Layout>
      <Hero />  
      <About /> 
      <TechStack />
      <MyPorject />
    </Layout>
  )
}
