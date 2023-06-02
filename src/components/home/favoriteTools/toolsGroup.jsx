import Image from "next/image"

export default function ToolsGroup ({tools}) {
  return (
    <div className="pt-4 md:pt-10">
      <div className="w-full" data-aos="flip-up" >
        <p className="text-md md:text-lg font-bold">{tools.tag}</p>
        <p className="w-16 pt-2 border-b-[3px] border-spray-400"></p>
      </div> 
      <div className="flex flex-wrap md:flex-col gap-x-4 gap-y-2 py-6">
        {
          tools.tools.map((tool, idx) => {
            return (
              <div className="flex items-center bg-primary-900 md:bg-transparent rounded w-fit py-2 px-3 md:px-0 md:py-1" key={idx} data-aos="flip-up">
                <div className="relative w-5 h-5 md:w-6 md:h-6">
                  <Image fill src={"/asset/favorite-tools/" + tool.img} alt={tool.colorName} />  
                </div>  
                <div className={"text-sm ml-4 md:text-rockblue-50 " + "text-logo-" + tool.colorName} >{tool.name}</div>
              </div>
            )
          })  
        }
      </div>
    </div>
  )
}
