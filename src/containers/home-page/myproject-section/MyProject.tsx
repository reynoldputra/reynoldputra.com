"use client";
import ButtonAnimation from "@/components/button/ButtonAnimation";
import Cell from "@/components/Cell";
import ButtonCursor from "@/components/cursor/ButtonCursor";
import Grid from "@/components/Grid";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function MyPorject() {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      img: "medselaras.png",
      url: "medselaras.com",
      fullLink: "https://medselaras.com",
      year: 2022,
    },
    {
      img: "inilhoits.png",
      url: "inilho.its.ac.id",
      fullLink: "https://inilho.its.ac.id",
      year: 2023,
    },
    {
      img: "irpro.png",
      url: "irproconsulting.com",
      fullLink: "https://irproconsulting.com",
      year: 2023,
    },
  ];

  useGSAP(
    () => {
      const projects = gsap.utils.toArray(".project") as gsap.TweenTarget[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1200",
          pin: true,
          // markers: true,
          scrub: 1,
        },
      });

      tl.fromTo(
        ".project-1",
        {
          top: "350px",
        },
        {
          top: "0px",
        },
      );

      tl.fromTo(
        ".project-1",
        {
          opacity: 0,
        },
        {
          duration: 0.5,
          opacity: 1,
        },
        "<0.2",
      );

      tl.fromTo(
        projects[0],
        {
          top: "50px",
          opacity: 0,
        },
        {
          top: 0,
          opacity: 1,
          duration: 0.3,
        },
        "<",
      );

      tl.fromTo(
        ".item-menu",
        {
          opacity: 0,
          y: "10px",
        },
        {
          opacity: 1,
          y: 0,
        },
        "<0.2",
      );

      tl.fromTo(
        ".project-2",
        {
          top: "350px",
        },
        {
          top: "24px",
        },
        ">0.5",
      );

      tl.fromTo(
        ".project-2",
        {
          opacity: 0,
        },
        {
          duration: 0.5,
          opacity: 1,
        },
        "<0.2",
      );

      tl.fromTo(
        projects[1],
        {
          top: "50px",
          opacity: 0,
        },
        {
          top: 0,
          opacity: 1,
          duration: 0.3,
        },
        "<",
      );

      tl.fromTo(
        projects[0],
        {
          top: 0,
          opacity: 1,
        },
        {
          top: "-50px",
          opacity: 0,
          duration: 0.3,
        },
        "<",
      );

      tl.fromTo(
        ".project-1",
        {
          scale: 1,
          filter: "brightness(100%)",
        },
        {
          scale: "0.94",
          filter: "brightness(50%)",
          duration: "0.2",
        },
        "<0.1",
      );

      tl.fromTo(
        ".project-3",
        {
          top: "350px",
        },
        {
          top: "48px",
        },
        ">0.5",
      );

      tl.fromTo(
        ".project-3",
        {
          opacity: 0,
        },
        {
          duration: 0.5,
          opacity: 1,
        },
        "<0.2",
      );

      tl.fromTo(
        projects[2],
        {
          top: "50px",
          opacity: 0,
        },
        {
          top: 0,
          opacity: 1,
          duration: 0.3,
        },
        "<",
      );

      tl.fromTo(
        projects[1],
        {
          top: 0,
          opacity: 1,
        },
        {
          top: "-50px",
          opacity: 0,
          duration: 0.3,
        },
        "<",
      );

      tl.fromTo(
        ".project-2",
        {
          scale: 1,
          filter: "brightness(100%)",
        },
        {
          scale: "0.96",
          filter: "brightness(50%)",
          duration: "0.2",
        },
        "<0.1",
      );

      tl.fromTo(
        ".project-3",
        {},
        {
          delay: 0.5,
        },
      );
    },
    {
      scope: containerRef,
    },
  );

  return (
    <div ref={containerRef}>
      <Grid className="pt-16">
        <Cell
          cols="1_full"
          className="h-[30vh] font-mono flex flex-col justify-center items-center"
        >
          <p
            className="font-bold pb-4 text-2xl md:text-3xl text-spray-400 text-center md:mr-8 flex gap-4 "
            data-aos="flip-up"
          >
            <span className="hidden md:block">&#128640;</span> Selected Project
          </p>
          <Link href="/projects">
            <ButtonAnimation className="border-rockblue-50" data-aos="zoom-in">
              <p className="z-20 transition-all group-hover:font-bold text-rockblue-50 group-hover:text-primary-950">
                See more
              </p>
              <FaChevronRight className="z-20 h-3  transition-all text-rockblue-50 group-hover:text-primary-950" />
            </ButtonAnimation>
          </Link>
        </Cell>
        <Cell cols="1_full" colsMd="2_5" className="relative pt-12 h-48">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={
                "w-full max-w-sm md:max-w-xl aspect-[16/8] absolute mx-auto left-0 right-0 overflow-hidden rounded-lg " +
                "project-" +
                (idx + 1)
              }
            >
              <Image
                src={"/assets/my-project/" + project.img}
                fill
                className="object-cover"
                alt="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </Cell>
        <Cell
          cols="1_full"
          colsMd="8_4"
          className="flex flex-col items-start md:items-end justify-center h-72 pt-12 md:pt-0"
        >
          <div className="h-12 w-32 text-left md:text-right relative">
            {projects.map((project, idx) => (
              <div
                className="absolute project top-12 left-0 right-auto md:left-auto md:right-0"
                key={idx}
              >
                <p className="text-sm md:text-md font-mono">{project.year}</p>
                <ButtonCursor>
                  <a
                    href={project.fullLink}
                    target="_blank"
                    className="text-lg md:text-xl font-bold"
                  >
                    {project.url}
                  </a>
                </ButtonCursor>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end justify-center item-menu">
            <div className="border-b-2 md:border-b-[3px] md:mt-2 border-spray-400 w-32"></div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}
