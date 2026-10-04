import GithubLogo from "@/assets/logo/github";
import LinkedinLogo from "@/assets/logo/linkedin";
import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import Typography from "@/components/typography/Typography";
import { yearsOfExperience } from "@/libs/helper";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExperienceSection from "./_components/ExperienceSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer based in Indonesia, open to freelance and consulting work. Background, experience and ways to get in touch.",
};

export default function About() {
  return (
    <div className="min-h-screen relative z-20 mt-24 mb-64">
      <Section>
        <Grid screenHeight={false}>
          <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
            <Typography as="h1" variant="h5" color="heading" weight="bold">
              About
            </Typography>
            <div className="mt-6 flex flex-wrap items-start gap-x-6 gap-y-5">
              <div className="relative w-40 h-40 rounded-md overflow-hidden shrink-0">
                <Image
                  src="/assets/reynold-portrait.jpg"
                  alt="Portrait of Reynold Putra"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-[280px] flex flex-col gap-4 leading-6">
                <Typography variant="p" color="white">
                  I&apos;m <span className="font-bold">Reynold Putra</span>, a
                  software engineer based in Indonesia with{" "}
                  {yearsOfExperience()}+ years of experience, who strives to
                  craft robust software designs using cutting-edge technologies.
                </Typography>
                <Typography variant="p" color="white">
                  I developed this website to showcase my work and share my
                  passion with the world. I&apos;m open to freelance and
                  consulting work, and always open to new opportunities and
                  collaborations.
                </Typography>
                <Typography variant="p" color="white">
                  If you&apos;re interested, here&apos;s my{" "}
                  <Link
                    data-umami-event="resume-button"
                    href="https://docs.google.com/document/d/1rZTrxfzM9Kzvk_KJ7ZTo8ZG2jYFKVrpNTXwVvWM2sfA/edit?tab=t.zh1ixsmuerq9"
                    target="_blank"
                    className="bg-foreground text-background hover:underline px-1"
                  >
                    résumé
                  </Link>
                </Typography>
              </div>
            </div>
            <ExperienceSection className="mt-24" />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Typography
                  color="highlight"
                  variant="c1"
                  weight="bold"
                  className="mb-2 md:text-p"
                >
                  Get in touch
                </Typography>
                <Link
                  href="mailto:reynoldputra1@gmail.com"
                  target="_blank"
                  className="inline-block w-fit min-w-fit"
                >
                  <Typography
                    variant="c1"
                    className="md:text-p hover:underline w-fit"
                  >
                    reynoldputra1@gmail.com
                  </Typography>
                </Link>
              </div>
              <div>
                <Typography
                  color="highlight"
                  variant="c1"
                  weight="bold"
                  className="mb-2 md:text-p"
                >
                  Connect with me
                </Typography>
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
            </div>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
}
