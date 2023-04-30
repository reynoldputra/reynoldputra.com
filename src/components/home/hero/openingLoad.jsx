import Terminal from "../../general/terminal/terminal";
import TermHeading from "../../general/terminal/termHeading";
import TermRegular from "../../general/terminal/termRegular";
import Typed from "react-typed"
import messages from "@/data/opening-terminal.ts"
import { useEffect, useRef, useState } from "react";

export default function OpeningLoad({onCompleteHandle}) {
  const [showItems, setShowItems] = useState([])
  const [typedTimeline, setTimeline] = useState([])
  
  const typingCompleteHandle = (idx) => {
    const newTimeline = [...typedTimeline]
    newTimeline[idx] = true 
    setTimeline(newTimeline)
  }

  return (
    <Terminal className="w-full min-h-[400px] pt-8">
              <div>
                <TermHeading/>
                <TermRegular>
                  <div className="block w-full">
                    <div>
                      <Typed
                        strings={["start prod"]}
                        showCursor={false}
                        onComplete={() => typingCompleteHandle(0)}
                      /> 
                    </div>
                    <div className="hidden md:block">
                      {
                        typedTimeline[0] &&
                        <>
                          <pre>  _                     _ _             <br/></pre>
                          <pre> | |                   | (_)            <br/></pre>
                          <pre> | |     ___   __ _  __| |_ _ __   __ _ <br/></pre>
                          <pre> | |    / _ \ / _` |/ _` | | '_ \ / _` |<br/></pre>
                          <pre> | |___| (_) | (_| | (_| | | | | | (_| |<br/></pre>
                          <pre> |______\___/ \__,_|\__,_|_|_| |_|\__, |<br/></pre>
                          <pre>                                   __/ |<br/></pre>
                          <pre>                                  |___/ <br/></pre>
                        </>
                      }
                    </div>
                    <div>
                      {
                        typedTimeline[0] &&
                        <>
                          <pre> {} loading ...</pre> 
                        </>
                      }
                    </div>
                  </div>
                </TermRegular>
              </div>
    </Terminal>
  )
}
