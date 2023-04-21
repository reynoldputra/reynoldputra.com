import Cell from "../../general/cell";
import Grid from "../../general/grid";
import Image from "next/image"
import projects from "@/data/my-project.js"
import NextIcon from "../../../asset/icon/next";
import Link from "next/link";

export default function MyPorject(){
  return (
    <Grid>
      <Cell cols="1_full" className="relative h-[40vh] flex flex-col justify-center">
        <div className="absoulte w-fit flex justify-start gap-8 overflow-hidden ">
          {
            projects.map((project, idx) => {
              return (
                <div className="aspect-video w-40 md:w-48 lg:w-64 relative">
                  <Image src={"/asset/my-project/" + project.image} fill className="object-cover" key={idx}/>
                </div>
              )
            }) 
          }
          {
            projects.map((project, idx) => {
              return (
                <div className="aspect-video w-32 md:w-48 lg:w-64 relative">
                  <Image src={"/asset/my-project/" + project.image} fill className="object-cover" key={idx}/>
                </div>
              )
            }) 
          }
        </div> 
      </Cell>
      <Cell cols="1_full" className="h-[50vh] font-mono flex flex-col justify-center items-end" >
        <p className="pb-4 text-2xl md:text-3xl text-spray-400 text-right">Project showcase</p> 
        <Link href="/projects">
          <button className="border border-rockblue-50 w-fit px-6 rounded-md flex py-2 gap-3">
            <p>see more</p>
            <NextIcon className="mt-1" />
          </button>
        </Link>
      </Cell>
    </Grid>
  )
}
