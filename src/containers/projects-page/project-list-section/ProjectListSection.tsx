import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import FocusedPictureCard from "@/components/article/FocusedPictureCard";
import Typography from "@/components/typography/Typography";
import { getAllProjects } from "@/modules/project/project.action";

const ProjectListSection = async () => {
  const projects = await getAllProjects();

  return (
    <div className="relative">
      <Section>
        <Grid screenHeight={false}>
          <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
            <Typography variant="h5" color="highlight" weight="bold">
              Projects
            </Typography>
            <Typography className="mt-2" variant="p" color="white">
              Here, you’ll find a collection of my work that reflects my journey
              in the world of software development. Each project represents my
              commitment to writing high-quality code, solving complex problems,
              and delivering impactful results.
            </Typography>
            <div className="flex flex-col gap-y-8 sm:gap-y-6 mt-24">
              {projects.map((project, idx) => {
                return (
                  <FocusedPictureCard
                    project={project.frontmatter}
                    slug={project.slug}
                    key={idx}
                  />
                );
              })}
            </div>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
};
export default ProjectListSection;
