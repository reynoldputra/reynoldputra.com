import Footer from "@/components/Footer";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Navbar from "@/components/Navbar";
import AOSWrapper from "@/components/animation/AOSWrapper";
import About from "@/app/_components/about-section";
import ProjectSnippet from "@/app/_components/project-snippet-section";
import { Metadata } from "next";
import ExperienceSection from "./_components/experience-section";

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
            <ExperienceSection className="mt-32" />
            <ProjectSnippet className="mt-32" />
          </div>
          <Footer />
        </div>
      </LenisScrollLayout>
    </AOSWrapper>
  );
}
