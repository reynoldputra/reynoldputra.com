import Footer from "@/components/Footer";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Navbar from "@/components/Navbar";
import AOSWrapper from "@/components/animation/AOSWrapper";
import About from "@/containers/home-page/about-section";
import ProjectSnippet from "@/containers/home-page/project-snippet-section";

export default async function Page() {
  return (
    <AOSWrapper>
      <LenisScrollLayout background={false}>
        <Navbar />
        <div className="bg-primary-950 relative z-10 min-h-screen mb-64">
          <About className="mt-24" />
          <ProjectSnippet className="mt-32" />
        </div>
        <Footer />
      </LenisScrollLayout>
    </AOSWrapper>
  );
}
