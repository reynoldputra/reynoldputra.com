import Terminal from "@/components/terminal/terminal";
import TermHeading from "@/components/terminal/termHeading";
import TermRegular from "@/components/terminal/termRegular";
import Typed from "react-typed";
import { useRef } from "react";
import { gsap } from "gsap";

export default function OpeningLoad() {
  // const [showItems, setShowItems] = useState([])
  // const [typedTimeline, setTimeline] = useState([])

  const welcomeElement = useRef<HTMLDivElement>(null);
  const terminalElement = useRef<HTMLDivElement>(null);

  // const typingCompleteHandle = (idx) => {
  //   const newTimeline = [...typedTimeline]
  //   newTimeline[idx] = true
  //   setTimeline(newTimeline)
  // }

  const welcomeHandling = () => {
    gsap.fromTo(
      welcomeElement.current,
      {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.5,
      },
      {
        opacity: 1,
      },
    );
  };

  return (
    <div ref={terminalElement}>
      <Terminal className="w-full max-w-[800px] z-50 absolute top-0 left-0 right-0 mx-auto">
        <div>
          <TermHeading />
          <TermRegular>
            <div className="block w-full">
              <div>
                <Typed
                  strings={["yarn start"]}
                  showCursor={false}
                  onComplete={() => welcomeHandling()}
                />
              </div>
              <div
                className="opacity-0 text-[8px] leading-none font-bold sm:text-xs md:text-md overflow-hidden"
                ref={welcomeElement}
              >
                {/* <pre>               _                          <br/></pre> */}
                {/* <pre>              | |                         <br/></pre> */}
                {/* <pre> __      _____| | ___ ___  _ __ ___   ___ <br/></pre> */}
                {/* <pre> \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \<br/></pre> */}
                {/* <pre>  \ V  V /  __/ | (_| (_) | | | | | |  __/<br/></pre> */}
                {/* <pre>   \_/\_/ \___|_|\___\___/|_| |_| |_|\___|<br/></pre> */}
              </div>
            </div>
          </TermRegular>
        </div>
      </Terminal>
    </div>
  );
}
