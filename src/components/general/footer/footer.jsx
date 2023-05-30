import Cell from "../cell";
import Grid from "../grid";
import NavbarItems from "../../../data/navbar-items.json"
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonAnimation from "../button/buttonAnimation";
import { FaChevronRight, FaEnvelopeOpen, FaGithub, FaHeart, FaInstagram, FaLinkedin, FaRegHeart } from "react-icons/fa";

export default function Footer({ className }) {
  const items = NavbarItems.data
  const router = useRouter()
  const { pathname } = router

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
    <div className="h-80 relative">
      <div className="w-full bg-primary-950 h-48 relative">
        <Grid className="h-12 bg-primary-950" screenHeight={false}>
          <Cell cols="2_10">
            <div className="w-full border-b border-rockblue-50 mb-6"></div>
          </Cell>
          <Cell cols="1_full">
            <div className="w-full flex justify-center gap-4">
              {
                items.map((item, idx) => (
                  <Link href={item.href} key={idx}>
                    <p className={"text-sm text-primary-200 font-mono " + ((pathname == item.href) && "underline")}>{item.tag}</p>
                  </Link>
                ))
              }
            </div>
          </Cell>
          <Cell cols="4_6">
            <div className="w-full flex flex-col items-center gap-4 mt-8">
              <div className="text-xs text-center">Ready to bring your digital ideas to life? I&apos;m here to help. Let&apos;s collaborate and create something extraordinary together. Get in touch with me today to discuss your project!</div>
              <ButtonAnimation>
                <p className="z-20 font-mono text-sm group-hover:text-primary-950 group-hover:font-bold">Get in touch</p>
              </ButtonAnimation>
            </div>
          </Cell>
        </Grid>
        <div className="w-full h-12 absolute bottom-0 translate-y-[100%]">
          <div className="w-full h-full rounded-b-full bg-primary-950"></div>
        </div>
      </div>
      <div className="text-primary-950">
        <div>
            <div className="h-20 flex justify-end items-center">
              <p className="flex justify-center items-center font-mono">{new Date().getFullYear()} | made with <FaRegHeart className="ml-2 w-3 h-3" /></p>
            </div>
        </div>
      </div>
    </div>
  )
}
