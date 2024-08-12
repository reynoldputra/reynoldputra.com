import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import FocusedPictureCard from "@/components/article/FocusedPictureCard";
import Typography from "@/components/typography/Typography";
import { ProjectFrontmatter } from "@/modules/project/project.type";

const ProjectListSection = ({projects} : {projects : ProjectFrontmatter[]}) => {
  return (
    <div className="relative">
      <Section>
        <Grid screenHeight={false}>
          <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
            <Typography variant="h5" color="highlight" weight="bold">
              Projects
            </Typography>
            <Typography className="mt-2" variant="p" color="white">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet.
            </Typography>
            <div className="flex flex-col gap-y-8 sm:gap-y-4 mt-24">
              {projects.map((project, idx) => {
                return (
                  <FocusedPictureCard key={idx} />
                )
              })}
            </div>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
};
export default ProjectListSection;
