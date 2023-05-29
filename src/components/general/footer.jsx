import Cell from "./cell";
import Grid from "./grid";

export default function Footer({ className }) {
  return (
    <div className="h-screen relative">
      <Grid className="h-24 bg-primary-950" screenHeight={false}>
        <Cell cols="1_full" className={className + " relative bg-transparent"}>
          <div className="fixed bottom-0 w-full -z-10">
            <p className="text-primary-950 text-lg">Text</p>
          </div>
        </Cell>
      </Grid>
      <div className="w-full bg-rockblue-50 absolute top-0 h-32">
        <Grid className="h-12 bg-primary-950" screenHeight={false}>
          <p>ini page</p>
        </Grid>
        <div className="w-full h-full rounded-b-full bg-primary-950">
        </div>
      </div>
    </div>
  )
}
