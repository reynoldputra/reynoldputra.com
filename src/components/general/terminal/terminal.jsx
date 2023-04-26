export default function Terminal({children, className}) {
  return (
        <div className={"text-sm rounded-md bg-primary-900 border border-spray-50 font-mono text-rockblue-200 p-4 " + className}>{children}</div>
  )
}
