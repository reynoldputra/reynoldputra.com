import Cell from "../../general/cell"
import Grid from "../../general/grid"
import GroupTools from "../../../data/favorite-tools.json"
import ToolsGroup from "./toolsGroup"

export default function FavoriteTools () {
  return (
    <Grid className="py-32 pb-48" screenHeight={false}>
      <Cell cols="1_full">
          <p className="w-full justify-center font-bold pb-4 text-2xl md:text-3xl text-spray-400 text-center font-mono md:mr-8 flex gap-4 " data-aos="flip-up"><span className="hidden md:block">&#128230;</span> Favorite Tools</p>
      </Cell>
      {
        GroupTools.data.map((groupTool, idx) => {
          const idxMd = idx % 3 
          return (
            <Cell cols="1_full" colsMd={(3*idxMd) + 3 + "_3"} colsLg={(idx+1)*2 + "_2"} key={idx}>
              <ToolsGroup tools={groupTool} />
            </Cell>
          )
        })
      }
    </Grid>
  )
}
