export default function StackGroup({title, items, setSelect, setGroup, group, selectedIndex, selectedGroup}) {
  return (
    <div className="relative mt-6">
      <p className="text-sm font-mono lg:text-center lg:-left-8 lg:absolute lg:top-0 lg:bottom-0 lg:m-0 text-rotate lg:rotate-180"
      >{title}</p>
      <div className="border-t border-t-rockblue-50 grid grid-cols-4 py-8 lg:border-t-transparent lg:border-l lg:border-l-rockblue-50 gap-y-4">
        {
          items.map((item, idx) => (
            <div className="w-16 h-auto mx-auto" key={idx} onClick={() => {setSelect(idx), setGroup(group)}}>
              {item.logo}
            </div>
          )) 
        } 
      </div>
    </div>
  )
}
