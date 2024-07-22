import Cell from "../cell";
import Grid from "../grid";
import NavbarItems from "../../../data/navbar-items.json"
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonAnimation from "../button/buttonAnimation";
import { FaEnvelopeOpen, FaGithub, FaInstagram, FaLinkedin, FaRegHeart } from "react-icons/fa";
import { HTMLAttributes } from "react";

export default function Footer({ className } : HTMLAttributes<HTMLDivElement>) {
  const items = NavbarItems.data
  const pathname = usePathname()

  const classNameSocial = "w-6 h-6"

  const dataSocial = [
    {
      img: <FaGithub className={classNameSocial} />,
      text: "reynoldputra",
      link: "https://github.com/reynoldputra"
    },
    {
      img: <FaLinkedin className={classNameSocial} />,
      text: "in/reynoldputra",
      link: "https://www.linkedin.com/in/reynoldputra"
    },
    {
      img: <FaEnvelopeOpen className={classNameSocial} />,
      text: "reynoldputra1@gmail.com",
      link: "mailto:reynoldputra1@gmail.com"
    },
    {
      img: <FaInstagram className={classNameSocial} />,
      text: "reynoldputra",
      link: "https://www.instagram.com/reynoldputra/"
    }
  ]

  return (
    <div className={className + " h-96 relative"}>
      <div className="w-full h-12 absolute top-0">
        <div className="w-full h-full rounded-b-3xl -translate-y-1 md:rounded-b-full bg-primary-950"></div>
      </div>
      <div className="fixed flex items-end bottom-0 w-full z-0 mt-12 h-80 text-primary-950 overflow-hidden">
          <Grid screenHeight={false} className="w-full pb-4">
            <Cell cols="1_full">
              <div className="flex w-full justify-center gap-4 mb-6 md:mb-2">
                {
                  dataSocial.map((val, idx) => (
                    <a className="cursor-pointer" href={val.link} target="_blank" key={idx}>
                      <div>{val.img}</div>
                    </a>
                  ))
                }
              </div>
            </Cell>
            <Cell cols="1_full">
              <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-2">
                {
                  items.map((item, idx) => (
                    <Link href={item.href} key={idx}>
                      <p className={"text-md text-primary-950 font-bold font-mono " + ((pathname == item.href) && "underline")}>{item.tag}</p>
                    </Link>
                  ))
                }
              </div>
            </Cell>
            <Cell cols="1_full">
              <div className="w-full flex flex-col items-center gap-4 mt-4">
                <div className="text-sm text-center">
                  Ready to bring your digital ideas to life? I&apos;m here to help. <br className="hidden sm:block" /> 
                  Let&apos;s collaborate and create something extraordinary together. <br className="hidden sm:block" /> 
                  Get in touch with me today to discuss your project!
                </div>
                <Link href="/contact">
                  <ButtonAnimation mode="light" className="border-2 border-primary-950 bg-transparent">
                    <p className="z-20 font-mono text-sm group-hover:text-rockblue-50 font-bold">Get in touch</p>
                  </ButtonAnimation>
                </Link>
              </div>
            </Cell>
            <Cell cols="1_full">
              <p className="flex justify-center items-center font-mono mt-8">{new Date().getFullYear()} | made with <FaRegHeart className="ml-2 w-3 h-3" /></p>
            </Cell>
          </Grid>
      </div>
    </div>
  )
}
