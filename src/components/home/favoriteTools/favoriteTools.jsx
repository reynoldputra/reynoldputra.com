import Cell from "../../general/cell"
import Grid from "../../general/grid"
import GroupTools from "../../../data/favorite-tools.json"
import ToolsGroup from "./toolsGroup"

export default function FavoriteTools () {
  return (
    <Grid className="py-32 pb-48" screenHeight={false}>
      <Cell cols="1_full">
        <p className="font-bold pb-12 text-2xl md:text-3xl text-spray-400 text-center font-mono" data-aos="flip-up" data-aos-anchor-placement="bottom-bottom">Favorite Tools</p> 
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
