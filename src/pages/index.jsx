import Layout from "../components/general/layout";
import Loading from "../components/general/loading";
import About from "../components/home/about/about";
import Hero from "../components/home/hero/hero";
import MyPorject from "../components/home/myproject/myProject";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FavoriteTools from "../components/home/favoriteTools/favoriteTools";
import ContactMe from "../components/home/contactMe/ContactMe";

export default function Index() {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Layout isLoading={isLoading} >
      {isLoading && <Loading setLoading={setLoading} /> }
      {!isLoading && 
        <>
          <Hero />  
          <About /> 
          <MyPorject />
          <FavoriteTools />
          <ContactMe />
        </>
      }
    </Layout>
  )
}
