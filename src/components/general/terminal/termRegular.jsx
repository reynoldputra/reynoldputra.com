import { RiArrowRightSLine } from "react-icons/ri"
export default function TermRegular({children}) {
  return (
    <div className="flex">
      <RiArrowRightSLine className="text-terminal-green h-4 w-auto mt-[1px] -translate-x-1" /> 
      <div>
        {children}
      </div>
    </div>
  )
}
