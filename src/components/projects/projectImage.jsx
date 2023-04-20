import Image from "next/image"
import Cell from "../general/cell"
export default function ProjectImage({img, name, year, left}) {
  return (
    <Cell cols="1_full" colsMd={left ? '1_5' : '2_5'} colsLg={left ? '2_5' : '3_5'} className="font-mono h-screen flex flex-col justify-center">
      <div className="relative w-full aspect-video">
        <Image src={"/asset/my-project/" + img} fill className="object-contain relative" />
      </div>
      <div className="flex justify-between">
        <p>{name}</p>
        <p>{year}</p>
      </div>
    </Cell>
  )
}
