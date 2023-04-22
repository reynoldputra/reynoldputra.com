import Cell from "../../general/cell";
import Grid from "../../general/grid";

export default function Hero() {
  return (
    <Grid className="relative">      
      <div className="absolute w-screen h-screen z-10">
        
      </div>
      <Cell cols="2_2" colsMd="4_6" className="h-screen flex z-50 relative">
        <p className="m-auto text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Bring your <span className="text-spray-400 font-mono">website</span> to life.
        </p>
      </Cell>
    </Grid>
  )
}
