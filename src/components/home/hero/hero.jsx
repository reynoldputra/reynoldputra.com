import Cell from "../../general/cell";
import Grid from "../../general/grid";
import OpeningLoad from "./openingLoad";

export default function Hero() {
  return (
    <Grid className="relative">      
      <div className="absolute w-[60vw] h-64 -top-4 left-0 right-0 mx-auto rounded-b-md">
        <OpeningLoad />
      </div>
      <Cell cols="2_2" colsMd="4_6" className="h-screen flex z-50 relative">
        {/* <p className="m-auto text-3xl md:text-4xl lg:text-5xl xl:text-6xl"> */}
        {/*   Bring your <span className="text-spray-400 font-mono">website</span> to life. */}
        {/* </p> */}
      </Cell>
    </Grid>
  )
}
