import { HTMLAttributes } from "react";
import GithubLogo from "@/assets/logo/github";
import LinkedinLogo from "@/assets/logo/linkedin";
import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import ButtonAnimation from "@/components/button/ButtonAnimation";
import Typography from "@/components/typography/Typography";
import { yearsOfExperience } from "@/libs/helper";
import clsx from "clsx";
import Link from "next/link";

export default function Hero({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("relative", className)} {...props}>
      <Section>
        <Grid className="h-full text-md z-20" screenHeight={false}>
          <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <Typography variant="c1" font="mono" color="gray">
                Software Engineer ·{" "}
                <span className="text-accent">
                  {yearsOfExperience()}+ years of experience
                </span>
              </Typography>
            </div>
            <Typography
              as="h1"
              variant="h3"
              className="mt-2 leading-[64px] lg:text-6xl lg:font-extrabold lg:leading-[96px] -translate-x-1"
              color="white"
              weight="bold"
            >
              Reynold Putra
            </Typography>
            <Typography variant="p" color="white" className="mt-4 max-w-[560px]">
              I build web products end to end. Currently the sole engineer on an
              AI medical platform at a stealth startup.
            </Typography>
            <Typography variant="c1" font="mono" color="gray" className="mt-3">
              Open to freelance and consulting.
            </Typography>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                data-umami-event="more-about-me-button"
                className="border border-foreground bg-foreground text-background px-3 py-2 rounded-md font-mono text-sm font-bold"
              >
                More about me
              </Link>
              <Link href="mailto:reynoldputra1@gmail.com" target="_blank">
                <ButtonAnimation
                  data-umami-event="get-in-touch-button"
                  className="border-foreground"
                >
                  <Typography
                    font="mono"
                    variant="c1"
                    className="z-20 transition-all group-hover:font-bold text-foreground group-hover:text-background"
                  >
                    Get in touch
                  </Typography>
                </ButtonAnimation>
              </Link>
              <div className="flex gap-x-2">
                <Link
                  href="https://github.com/reynoldputra"
                  target="_blank"
                  aria-label="GitHub"
                  className="flex items-center gap-x-2"
                >
                  <GithubLogo />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/reynoldputra"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="flex items-center gap-x-2"
                >
                  <LinkedinLogo />
                </Link>
              </div>
            </div>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
}
