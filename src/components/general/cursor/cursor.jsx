export default function Cursor() {
  return (
    <>  
      <div className="cursor-tail z-50 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 bg-spray-400 fixed hidden md:block rounded-full mix-blend-difference custome-cursor" style={{pointerEvents : "none"}} ></div>
      <div className="cursor-main z-50 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-rockblue-50 fixed hidden md:block rounded-full " style={{pointerEvents : "none"}}></div>
    </>
  )
}