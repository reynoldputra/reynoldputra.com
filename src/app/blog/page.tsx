import { Metadata } from "next";
import BlogListSection from "./_components/BlogListSection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dive into insights, best practices, and in-depth articles on software engineering. Explore topics like design patterns, coding tips, and the latest trends to enhance your skills and stay ahead in the tech world.",
};

export default function Blog() {
  return (
    <div className="min-h-screen relative z-20 mt-24 mb-64">
      <BlogListSection />
    </div>
  );
}
