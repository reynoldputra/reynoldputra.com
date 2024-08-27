import Footer from "@/components/Footer";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Navbar from "@/components/Navbar";
import AOSWrapper from "@/components/animation/AOSWrapper";
import CursorLayout from "@/components/cursor/CursorLayout";
import Typography from "@/components/typography/Typography";
import "aos/dist/aos.css";
import { Metadata } from "next";
import Image from "next/image";
import ProgrammingGif from "~/assets/programming.gif"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dive into insights, best practices, and in-depth articles on software engineering. Explore topics like design patterns, coding tips, and the latest trends to enhance your skills and stay ahead in the tech world.",
};

export default function Projects() {
  return (
    <LenisScrollLayout>
      <AOSWrapper>
      <CursorLayout>
        <Navbar />
        <div className="min-h-screen flex flex-col w-full justify-center items-center relative z-30">
          <Image src={ProgrammingGif} alt="programming gif" width={600} height={400} className="px-8" />
          <Typography font="mono" className="mt-4">Under Construction</Typography>
        </div>
        <Footer />
      </CursorLayout>
      </AOSWrapper>
    </LenisScrollLayout>
  );
}
