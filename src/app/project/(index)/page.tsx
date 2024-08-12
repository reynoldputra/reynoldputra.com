import ProjectListSection from "@/containers/projects-page/project-list-section";
import { getAllProjects } from "@/modules/project/project.action";

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen relative z-20 mt-24 mb-64">
      <ProjectListSection projects={projects} />
    </div>
  );
}
