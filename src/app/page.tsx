import Footer from "@/components/Footer";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Navbar from "@/components/Navbar";
import AOSWrapper from "@/components/animation/AOSWrapper";
import Hero from "@/app/_components/hero-section";
import ProjectSnippet from "@/app/_components/project-snippet-section";
import { Metadata } from "next";
import RecentBlog from "@/app/_components/recent-blog-section";

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
          <main className="bg-background relative z-50 min-h-screen pb-64">
            <Hero className="mt-24" />
            <ProjectSnippet className="mt-32" />
            <RecentBlog className="mt-32" />
          </main>
          <Footer />
        </div>
      </LenisScrollLayout>
    </AOSWrapper>
  );
}
