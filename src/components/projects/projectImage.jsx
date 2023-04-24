import Image from "next/image"
import Cell from "../general/cell"
import Grid from "../general/grid"
import NextIcon from "../../asset/icon/next"

export default function ProjectImage({project}) {
  return (
      <div className="h-96 w-[35vw] px-8 image-panel absolute right-0 top-0 bg-primary-950">
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
  )
}
