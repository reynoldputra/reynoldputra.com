import Cell from "../general/cell";
import Grid from "../general/grid";
import projects from "../../data/my-project.js"
import ProjectImage from "./projectImage";

export default function ProjectSection() {
  return (
    <Grid>
      <Cell cols="1_full" className="text-center font-mono text-5xl h-screen flex items-center justify-center">
        <p>
          My <span className="text-spray-400">Projects</span>
        </p>
      </Cell>
      {
        projects.map((project, idx) => {
          const left = (idx % 2 != 0 && true)
          return (
            <ProjectImage img={project.image} name={project.name} year={project.year} left={left} /> 
          )
        }) 
      }
    </Grid>
  )
}
