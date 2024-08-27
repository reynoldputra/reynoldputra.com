import AOSWrapper from "@/components/animation/AOSWrapper";
import Footer from "@/components/Footer";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Navbar from "@/components/Navbar";
import GuestBookSection from "@/containers/guest-book-page/guestbook-section";
import "aos/dist/aos.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook",
  description:
    "Welcome to my guestbook! I'd love to hear your thoughts, feedback, or just a friendly hello. Feel free to leave a message and connect with me on this personal journey.",
};

export default function Projects() {
  return (
    <AOSWrapper>
      <LenisScrollLayout>
        <Navbar />
        <GuestBookSection />
        <Footer />
      </LenisScrollLayout>
    </AOSWrapper>
  );
}
