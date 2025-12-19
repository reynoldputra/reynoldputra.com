import ProjectListSection from "@/app/projects/(index)/_components/section/project-list-section";

export const metadata = {
  title: "Projects",
  description: "Here, you'll find a collection of my work that reflects my journey in the world of software development. Each project represents my commitment to writing high-quality code, solving complex problems, and delivering impactful results.",
};

export default function Projects() {
  return (
    <div className="min-h-screen relative z-20 mt-24 mb-64">
      <ProjectListSection />
    </div>
  );
}
