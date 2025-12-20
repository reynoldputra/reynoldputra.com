import { Suspense } from "react";
import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import Typography from "@/components/typography/Typography";
import { getAllProjects } from "@/modules/project/project.action";
import ProjectListContent from "./ProjectListContent";

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
              Here, you&apos;ll find a collection of my work that reflects my journey
              in the world of software development. Each project represents my
              commitment to writing high-quality code, solving complex problems,
              and delivering impactful results.
            </Typography>
            <div className="mt-24">
              <Suspense fallback={<div className="text-rockblue-500 font-mono text-md">Loading...</div>}>
                <ProjectListContent projects={projects} />
              </Suspense>
            </div>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
};
export default ProjectListSection;
