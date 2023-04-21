export default function StackGroup({title, items, setSelect, setGroup, group, selectedIndex, selectedGroup}) {
  return (
    <div className="relative mt-6">
      <p className="text-sm font-mono lg:text-center lg:-left-8 lg:absolute lg:top-0 lg:bottom-0 lg:m-0 text-rotate lg:rotate-180"
      >{title}</p>
      <div className="border-t border-t-rockblue-50 grid grid-cols-4 py-8 lg:border-t-transparent lg:border-l lg:border-l-rockblue-50 gap-y-8">
        {
          items.map((item, idx) => {
            const active = (group == selectedGroup && selectedIndex == idx)
            return (
              <div className={"w-20 h-20 p-2 mx-auto hover:border hover:border-spray-50 transition-all duration-200 rounded-full " + (active && "border-spray-50 border")} key={idx} onClick={() => {setSelect(idx), setGroup(group)}}>
                {item.logo}
              </div>
            )
          }) 
        } 
      </div>
    </div>
  )
}
