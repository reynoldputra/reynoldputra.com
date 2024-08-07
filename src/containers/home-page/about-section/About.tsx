"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { useRef } from "react";
import EmailLogo from "@/assets/logo/email";
import GithubLogo from "@/assets/logo/github";
import InstagramLogo from "@/assets/logo/instagram";
import LinkedinLogo from "@/assets/logo/linkedin";
import ScrollSpeed from "@/components/animation/ScrollSpeed";
import Cell from "@/components/Cell";
import ButtonCursor from "@/components/cursor/ButtonCursor";
import Grid from "@/components/Grid";
import { useGSAP } from "@gsap/react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  const name = ["R", "e", "y", "n", "o", "l", "d"];

  useGSAP(
    () => {
      const triggerOption = {
        scrub: 1,
        start: "200px 50%",
        end: "400px 50%",
      };

      const sectionsHor = gsap.utils.toArray(".containerName .char-hor");

      const tlHor = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          ...triggerOption,
        },
      });
      tlHor.fromTo(
        sectionsHor,
        {
          width: "100%",
        },
        {
          width: 0,
        },
      );

      const sectionsVer = gsap.utils.toArray(".containerName .char-ver");
      const tlVer = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          ...triggerOption,
        },
      });

      tlVer.fromTo(
        sectionsVer,
        {
          height: "100%",
        },
        {
          height: 0,
        },
      );

      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          ...triggerOption,
          start: "200px 50%",
          end: "+=80px",
        },
        height: 0,
      });
    }
  );

  return (
    <div className="relative" ref={containerRef}>
      <Grid className="z-20">
        <div className="absolute bottom-0 right-0 py-8 px-4 flex w-full items-center md:block md:left-0 md:right-auto md:w-16 ">
          <div className="w-full pr-4 md:p-0 h-0 md:h-64 md:mb-4">
            <div
              className="w-full border-t md:border-l border-rockblue-50 h-0 m-auto mr-6 md:w-0 md:h-64 md:mr-auto md:mb-6"
              ref={lineRef}
            ></div>
          </div>
          <div className="flex gap-2 md:flex-col items-center">
            <a
              target="_blank"
              href="https://github.com/reynoldputra"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <ButtonCursor circle={24} opacityMain={0.7} opacityTail={1}>
                <GithubLogo className="fill-current hover:fill-spray-400 transition-[fill] duration-300" />
              </ButtonCursor>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/reynoldputra"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <ButtonCursor circle={24} opacityMain={0.7} opacityTail={1}>
                <LinkedinLogo className="fill-current hover:fill-spray-400 transition-[fill] duration-300" />
              </ButtonCursor>
            </a>
            <a
              target="_blank"
              href="mailto:reynoldputra1@gmail.com"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <ButtonCursor circle={24} opacityMain={0.7} opacityTail={1}>
                <EmailLogo className="fill-current hover:fill-spray-400 transition-[fill] duration-300" />
              </ButtonCursor>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/reynoldputra/"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <ButtonCursor circle={24} opacityMain={0.7} opacityTail={1}>
                <InstagramLogo className="fill-current hover:fill-spray-400 transition-[fill] duration-300" />
              </ButtonCursor>
            </a>
          </div>
        </div>
        <Cell cols="1_3" colsMd="3_full">
          <ScrollSpeed speed={2} containerRef={containerRef}>
            <div
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-mono pt-36 lg:pt-48"
              ref={nameRef}
            >
              <p>Hello,</p>
              <p className="text-spray-400">I&apos;m Reynold</p>
            </div>
          </ScrollSpeed>
        </Cell>
        <Cell cols="1_4" colsSm="2_3" colsMd="4_5">
          <ScrollSpeed speed={1} containerRef={containerRef}>
            <p className="pt-16 text-sm text-justify" ref={descRef}>
              {" "}
              I&apos;m an information technology undergraduate student at
              Sepuluh Nopember Institute of Technology (ITS). I started learning
              web development since mid-2021. I&apos;ve an interest in improving
              backend skills, but lately I&apos;ve been learning a lot about the
              frontend because I used to love creating and writing information
              through design, videos, and animation. Besides self-development, I
              also like working on projects in a team. I like managing people so
              they make good use of their time and resources as a team. I have a
              lot of curiosity about tools and frameworks to accelerate personal
              and team workflows.{" "}
            </p>
            <p className="text-sm pt-4">
              Make sure you sign my{" "}
              <Link href="/guestbook">
                <span className="cursor-pointer text-spray-400 underline">
                  guestbook!
                </span>
              </Link>
            </p>
          </ScrollSpeed>
        </Cell>
      </Grid>
      <div className="absolute hidden w-full h-full md:flex justify-center items-center top-0 left-0 z-10">
        <div className="w-full flex containerName">
          {name.map((c, idx) => {
            const even = idx % 2 == 0 ? true : false;
            return (
              <div className="w-fit relative" key={idx}>
                <p className="text-[26vw] font-bold text-center -translate-x-[1.5vw] text-stroke opacity-10 w-fit">
                  {c}
                </p>
                <div
                  className={
                    "absolute h-full w-full bg-primary-950 top-0 right-6 " +
                    (even ? "char-hor" : "char-ver")
                  }
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
