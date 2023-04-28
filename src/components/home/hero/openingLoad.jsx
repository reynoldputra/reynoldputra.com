import Terminal from "../../general/terminal/terminal";
import TermHeading from "../../general/terminal/termHeading";
import TermRegular from "../../general/terminal/termRegular";
import Typed from "react-typed"
import messages from "@/data/opening-terminal.ts"
import { useState } from "react";

export default function OpeningLoad({onCompleteHandle}) {
  const [showItems, setShowItems] = useState([])
  
  return (
    <Terminal className="w-full min-h-[400px] pt-8">
          {
            messages.map((message, idx) => (
              <div key={idx}>
                <TermHeading className={(idx == 0 || showItems[idx-1]) ? "" : "hidden"}/>
                <TermRegular key={idx} className={(idx == 0 || showItems[idx-1]) ? "" : "hidden"}>
                  <div className="block">
                    {
                      message.map((msg, idx2) => {
                        if(idx2 == 0) {
                          return (
                            <Typed 
                              strings={[
                                msg
                              ]}    
                              typeSpeed={200}
                              startDelay={idx ? idx * 3000 + 1200 : 3000}
                              onComplete={() => {
                                const newShowItems = [...showItems];
                                newShowItems[idx] = true;
                                setShowItems(newShowItems);
                                if(idx == messages.length - 1) {
                                  setTimeout(() => {
                                    onCompleteHandle() 
                                  }, 2000)
                                }
                              }}
                              key={idx2}
                              showCursor={false}
                            >
                            </Typed>
                          )
                        } else {
                          return (<p key={idx2} className={showItems[idx] ? "" : "hidden"}>{msg}</p>)
                        }
                      })
                    }
                  </div>
                </TermRegular>
              </div>
            ))
          } 
    </Terminal>
  )
}
