import { IoGitBranch } from "react-icons/io5"
import { BiUpArrowAlt } from "react-icons/bi"
import { FaNodeJs } from "react-icons/fa"

export default function TermHeading({className}) {
  return (
    <div className={"flex flex-wrap items-center gap-x-2 " + className}>
      <p className="text-terminal-blue">reynoldputra.com</p> 
      <p>on</p>
      <IoGitBranch className="h-4 w-auto text-terminal-purple" />
      <p className="text-terminal-purple">main</p>
      <p className="flex items-center text-terminal-red">[<span><BiUpArrowAlt className="h-4 w-auto" /></span>]</p> 
      {/* <p>via</p> */}
      {/* <p className="flex items-center text-terminal-green gap-2"><FaNodeJs className="h-3 w-auto" /> 19.8.1</p> */}
    </div>  
  )
} 
