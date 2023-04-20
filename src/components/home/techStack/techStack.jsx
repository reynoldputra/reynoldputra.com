import Cell from "../../general/cell";
import Grid from "../../general/grid";
import data from "@/data/tech-stack.js"
import StackGroup from "./stackGroup";
import { useState } from "react";

export default function TechStack() {
  const [select, setSelect] = useState(-1)
  const [group, setGroup] = useState("language")
  return (
    <Grid contentStart={false}>
      <Cell cols="1_full" colsLg="2_full" rowsLg="1_1">
        <div className="w-full text-right lg:text-left lg:flex text-3xl md:text-4xl lg:text-5xl font-mono ">
          <p>Tech</p>
          <p>&nbsp;- stack</p>
        </div>
      </Cell>
      <Cell cols="1_full"  colsSm="2_full" colsMd="3_full" colsLg="8_4" rowsLg="2_1" className="lg:flex lg:flex-col lg:justify-center ">
        {
          select == -1 ?
            <div className="text-right pt-12 font-mono lg:p-0">
              <p className="text-spray-400 text-lg">/ {data.main.title} /</p>
              <p className="text-sm pt-4">{data.main.desc}</p>
            </div>
          :
            <div className="text-right pt-12 font-mono lg:p-0">
              <p className="text-spray-400 text-lg">/ {data[group][select].title} /</p>
              <p className="text-sm pt-4">{data[group][select].desc}</p>
            </div>
        }
      </Cell>
      <Cell cols="1_full" colsLg="2_5" rowsLg="2_1">
        <div className="mt-12">
          <StackGroup title="Language" items={data.language} setSelect={setSelect} setGroup={setGroup} group="language" />
        </div> 
        <div className="">
          <StackGroup title="Tool & framework" items={data.tool} setSelect={setSelect} setGroup={setGroup} group="tool" />
        </div> 
      </Cell>
    </Grid>
  )
}
