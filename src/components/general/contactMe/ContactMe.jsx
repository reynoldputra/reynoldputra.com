import { FaChevronRight, FaEnvelopeOpen, FaGithub, FaInstagram, FaLinkedin, FaRegHeart } from "react-icons/fa";
import ButtonAnimation from "../../general/button/buttonAnimation";
import Cell from "../../general/cell";
import Grid from "../../general/grid";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useRef } from "react";

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


  const formMethod = useForm({
  })

  const onSubmit = formMethod.handleSubmit(async (data) => {
    const _res = axios.post("http://localhost:3001/api/contact-us-submission", data)
    toast.promise(_res, {
      pending: {
        render : () =>  'Sending...',
        position: "bottom-right",
      },
      success: {
        render: () => "Message sent successfully",
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      },
      error: {
        render: () => 'There is an error',
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      },
    });
  })

  const inputs = [
    ["name", "Name", true],
    ["email", "Email", true, "email"],
    ["company", "Company", false],
    ["subject", "Subject", true],
    ["message", "Message", true],
  ]

  return (
    <Grid className="bg-rockblue-50 text-primary-950">
      <Cell cols="1_full">
        <p className="font-bold pt-24 pb-10 md:pb-4 text-2xl md:text-3xl text-primary-950 text-center font-mono" >Get in touch</p>
      </Cell>
      <Cell cols="1_full" colsMd="1_5" colsLg="2_4" colsXl="3_4" className="flex flex-col gap-2 mt-8 text-primary-950 font-mono font-bold">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-2"
        >
          {
            inputs.map(([id, label, isOpt, type]) => (
              <div key={id}>
                <p>{label}</p>
                <input
                  {...formMethod.register(id)}
                  required={isOpt}
                  name={id}
                  id={id}
                  className="w-full px-4 font-normal h-8 max-w-xs md:max-w-sm md:h-12 rounded-md bg-transparent border-2 border-primary-950"
                  type={(type ? type : "text")}
                />
              </div>
            ))
          }
          <ButtonAnimation
            mode="dark"
            className="border-2 mt-8 border-primary-950 font-bold"
            type="submit"
          >
            <p className="z-20 transition-all group-hover:font-bold text-rockblue-50 group-hover:text-primary-950">Send</p>
            <FaChevronRight className="z-20 h-3  transition-all text-rockblue-50 group-hover:text-primary-950" />
          </ButtonAnimation>
        </form>
      </Cell>
      <Cell cols="1_full" colsMd="8_full" className="h-4/5 mt-8 flex gap-x-8 md:flex-col justify-center">
        {
          dataSocial.map((val, idx) => (
            <div className="text-primary-950 flex gap-4 h-10 items-center" key={idx}>
              {val.img}
              <a href={val.link} className="text-md font-mono hidden md:block">{val.text}</a>
            </div>
          ))
        }
      </Cell>
      <Cell cols="1_full" className="pt-6">
        <p className="flex justify-center items-center font-mono">{new Date().getFullYear()} | made with <FaRegHeart className="ml-2 w-3 h-3" /></p>
      </Cell>
    </Grid>
  )
}
