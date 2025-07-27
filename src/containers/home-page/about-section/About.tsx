"use client";

import { HTMLAttributes, useRef } from "react";
import GithubLogo from "@/assets/logo/github";
import LinkedinLogo from "@/assets/logo/linkedin";
import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import Typography from "@/components/typography/Typography";
import clsx from "clsx";
import Link from "next/link";

export default function About({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={clsx("relative", className)} {...props} ref={containerRef}>
      <Section>
        <Grid className="h-full text-md z-20" screenHeight={false}>
          <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
            <Typography variant="p" font="mono" color="gray">
              Software Engineer
            </Typography>
            <Typography
              variant="h3"
              className="leading-[64px] lg:text-6xl lg:font-extrabold lg:leading-[96px] -translate-x-1"
              color="white"
              weight="bold"
            >
              Reynold Putra
            </Typography>
          </Cell>
          <Cell cols="1_full" colsMd="3_8" colsLg="4_6" className="mt-6">
            <Typography
              color="highlight"
              variant="c1"
              weight="bold"
              className="mb-2 md:text-p"
            >
              A litle about me
            </Typography>
            <Typography variant="c1" className="md:text-p">
              I&apos;m a software engineer based in Indonesia who strives to craft
              robust software designs using cutting-edge technologies. I
              developed this website to showcase my work and share my passion
              with the world.
            </Typography>
          </Cell>
          <Cell cols="1_full" colsMd="3_8" colsLg="4_3" className="mt-6">
            <Typography
              color="highlight"
              variant="c1"
              weight="bold"
              className="mb-2 md:text-p"
            >
              Get in touch
            </Typography>
            <Typography variant="c1" className="md:text-p">
              reynoldputra1@gmail.com
            </Typography>
          </Cell>
          <Cell cols="1_full" colsMd="3_8" colsLg="7_3" className="mt-6">
            <Typography
              color="highlight"
              variant="c1"
              weight="bold"
              className="mb-2 md:text-p"
            >
              Connect with me
            </Typography>
            <div className="flex gap-x-2">
              <Link href="https://github.com/reynoldputra" target="_blank" className="flex items-center gap-x-2">
                <GithubLogo />
              </Link>
              <Link href="https://www.linkedin.com/in/reynoldputra" target="_blank" className="flex items-center gap-x-2">
                <LinkedinLogo />
              </Link>
            </div>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
}
