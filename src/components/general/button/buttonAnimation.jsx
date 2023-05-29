export default function ButtonAnimation({children, mode = "dark", className, ...rest}) {
  return (
    <button className={"border w-fit px-3 rounded-md flex items-center py-2 gap-2 text-sm relative group overflow-hidden " + (mode == "dark" ?  " bg-primary-950 " :  " bg-rockblue-50 ") + className} {...rest}>
      {children}
      <div className={"z-10 w-0 h-0 group-hover:w-32 group-hover:h-32 transition-all duration-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " + (mode == "dark" ?  "bg-rockblue-50" :  "bg-primary-950")}></div>
    </button>
  )
}
