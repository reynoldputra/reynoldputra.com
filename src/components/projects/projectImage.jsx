import Image from "next/image"
import Cell from "../general/cell"
import Grid from "../general/grid"
import NextIcon from "../../asset/icon/next"

export default function ProjectImage({project}) {
  return (
    <div className="w-screen section">
      <Grid className="w-screen pt-16 md:pt-24">
       <Cell cols="1_full" colsMd='2_5' rows="1_1" className="font-mono">
          <div>
            <div className="relative w-full aspect-video">
              <Image src={"/asset/my-project/" + project.image} alt="project image" fill className="object-contain relative" />
            </div>
            <div className="flex justify-between text-sm md:text-md">
              <p>{project.year}</p>
              <a className="flex gap-2 border-b border-rockblue-50 cursor-pointer" target="_blank" href={"https://" + project.link}>
                <p >{project.link}</p>
                <NextIcon className="pt-1 float-right"/>
              </a>
            </div>
          </div>
        </Cell>
        <Cell rows="2_1" rowsMd="1_1" cols="1_full" colsMd="8_4" className="pt-12 md:pt-0 md:flex flex-col justify-center">
         <p className="text-lg md:text-xl lg:text-2xl text-spray-400 font-bold">{project.name}</p>  
          <div className="flex pt-2 gap-4">
            {
              project.label.map((label,idx) => {
                return (
                  <p className="text-sm font-mono px-2 py-1 border border-rockblue-50 rounded-md" key={idx}>{label}</p>
                )
              }) 
            } 
          </div>
         <p className="text-sm pt-4">{project.desc}</p>
        </Cell>
      </Grid>
    </div>
  )
}
