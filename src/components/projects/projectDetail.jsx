export default function ProjectDetail({ project }) {
  return (
    <div className="h-[400px] detail-panel absolute top-0 bg-primary-950 pt-12">
      <div>
        <p className="text-lg md:text-xl lg:text-2xl text-spray-400 font-bold">{project.name}</p>
        <div className="flex pt-2 gap-4">
          {
            project.label.map((label, idx) => {
              return (
                <p className="text-sm font-mono px-2 py-1 border border-rockblue-50 rounded-md" key={idx}>{label}</p>
              )
            })
          }
        </div>
        <p className="text-sm text-justify pt-4">{project.desc}</p>
      </div>
    </div>
  )
}
