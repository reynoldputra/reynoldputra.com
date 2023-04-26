import Terminal from "../../general/terminal/terminal";
import TermHeading from "../../general/terminal/termHeading";
import TermRegular from "../../general/terminal/termRegular";

export default function OpeningLoad() {
  return (
    <Terminal className="w-full h-full pt-8">
      <TermHeading />
      <TermRegular>
        <p>npm install</p>
      </TermRegular>
    </Terminal>
  )
}
