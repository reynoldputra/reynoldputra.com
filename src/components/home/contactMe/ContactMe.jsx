import { FaChevronRight, FaEnvelopeOpen, FaGithub, FaHeart, FaInstagram, FaLinkedin, FaRegHeart } from "react-icons/fa";
import ButtonAnimation from "../../general/button/buttonAnimation";
import Cell from "../../general/cell";
import Grid from "../../general/grid";

export default function ContactMe() {
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
    <div className="">
      <Grid className="fixed bottom-0 bg-rockblue-50 text-primary-950">
        <Cell cols="1_full">
          <p className="font-bold py-20 text-2xl md:text-3xl text-primary-950 text-center font-mono" data-aos="flip-up" data-aos-anchor-placement="bottom-bottom">Get in touch</p>
        </Cell>
        <Cell cols="3_3" className="flex flex-col gap-2">
          <input className="w-full h-12 rounded-md bg-transparent border-2 border-primary-950" />
          <input className="w-full h-12 rounded-md bg-transparent border-2 border-primary-950" />
          <input className="w-full h-12 rounded-md bg-transparent border-2 border-primary-950" />
          <input className="w-full h-12 rounded-md bg-transparent border-2 border-primary-950" />
          <input className="w-full h-12 rounded-md bg-transparent border-2 border-primary-950" />
          <ButtonAnimation mode="dark" className="border-2 border-primary-950 font-bold">
            <p className="z-20 transition-all group-hover:font-bold text-rockblue-50 group-hover:text-primary-950">Send</p>
            <FaChevronRight className="z-20 h-3  transition-all text-rockblue-50 group-hover:text-primary-950" />
          </ButtonAnimation>
        </Cell>
        <Cell cols="8_3" className="h-4/5 flex flex-col justify-center">
          {
            dataSocial.map((val, idx) => (
              <div className="text-primary-950 flex gap-4 h-10 items-center" key={idx}>
                {val.img}
                <a href={val.link} className="text-md font-mono">{val.text}</a>
              </div>
            ))
          }
        </Cell>
        <Cell cols="1_full" className="pt-24">
          <p className="flex justify-center items-center font-mono">{new Date().getFullYear()} | made with <FaRegHeart className="ml-2 w-3 h-3" /></p>
        </Cell>
      </Grid>
    </div>
  )
}
