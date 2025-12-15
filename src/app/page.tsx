import Footer from "@/components/Footer";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Navbar from "@/components/Navbar";
import AOSWrapper from "@/components/animation/AOSWrapper";
import About from "@/containers/home-page/about-section";
import ProjectSnippet from "@/containers/home-page/project-snippet-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Reynold Putra"
  }
}

export default function Page() {
  return (
    <AOSWrapper>
      <LenisScrollLayout background={false}>
        <div className="relative">
          <Navbar />
          <div className="bg-primary-950 relative z-50 min-h-screen pb-64">
            <About className="mt-24" />
            <ProjectSnippet className="mt-32" />
          </div>
          <Footer />
        </div>
      </LenisScrollLayout>
    </AOSWrapper>
  );
}
