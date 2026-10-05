import Image from "next/image";
import Link from "next/link";
import IconList from "@/components/article/IconList";
import Typography from "@/components/typography/Typography";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  logo?: string;
  link?: string;
  icons: string[];
  startDate: string;
  endDate: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer, first hire",
    company: "Stealth startup",
    location: "Remote, London",
    icons: ["next", "typescript", "supabase", "n8n", "openai"],
    startDate: "Mar 2026",
    endDate: "Present",
    description: [
      "Own end-to-end development of an early-stage medical platform as the sole engineer on the AI service and infrastructure, and primary author of the web application.",
      "Built a Python AI document-parsing service from scratch (FastAPI, Redis, AsyncIO on EC2), with multi-worker queueing and per-user fair scheduling so one uploader can't starve the queue.",
      "Designed and shipped the patient and clinician product in Next.js and React, backed by unit tests and a Playwright E2E suite that exercises the live AI pipeline.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "KinetixPro",
    location: "Remote, Singapore",
    logo: "/media/company-logo/kinetixpro.jpeg",
    link: "https://www.kinetixpro.ai",
    icons: ["next", "nest", "python", "elixir", "aws"],
    startDate: "Sep 2024",
    endDate: "Mar 2026",
    description: [
      "Built 7+ core features for a safety-risk platform.",
      "Integrated AI detection (computer vision) with Elixir, Next.js and Python.",
      "Created a generic AI–IoT integration pipeline for sensors and speakers.",
      "Delivered 4+ international projects (China, Thailand, Mexico, Taiwan and more).",
      "Improved statistical query performance by 4× (2s to under 500ms) via dynamic SQL optimization.",
      "Improved reliability of on-premise multi-tenant servers and AWS-based deployments.",
    ],
  },
  {
    title: "Implementation (DevOps) Engineer Intern",
    company: "Traveloka",
    location: "On site, Banten",
    logo: "/media/company-logo/traveloka.png",
    link: "https://traveloka.com",
    icons: ["aws", "terraform", "datadog"],
    startDate: "Feb 2024",
    endDate: "Jun 2024",
    description: [
      "Managed infrastructure using AWS and Terraform as IaC tools.",
      "Migrated 50+ microservices' logs from CloudWatch to Datadog for better observability and monitoring.",
      "Implemented a standardized Terraform deployment for 30+ microservices.",
    ],
  },
  {
    title: "Web Developer",
    company: "Arkalearn",
    location: "Remote, Jakarta",
    logo: "/media/company-logo/arkalearn.png",
    link: "https://arkalearn.com",
    icons: ["next", "nest", "typescript"],
    startDate: "Aug 2023",
    endDate: "Jan 2024",
    description: [
      "Led a team to migrate a Japanese e-learning platform from WordPress to Next.js.",
      "Improved website performance by 35% and reduced operational costs by 21%.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "PT Ousean Global Digital",
    location: "Tangerang Selatan, Banten",
    logo: "/media/company-logo/ousean.jpg",
    icons: ["laravel"],
    startDate: "Sep 2022",
    endDate: "Nov 2022",
    description: [
      "Maintained the company profile website and its CMS, built with Laravel.",
    ],
  },
  {
    title: "Freelance",
    company: "Self-employed",
    location: "Remote",
    logo: "/media/company-logo/reynoldputra.png",
    icons: ["next", "laravel"],
    startDate: "Sep 2022",
    endDate: "Present",
    description: [
      "Build websites and web applications for clients using Next.js and Laravel.",
    ],
  },
];

export default function ExperienceSection({ className }: { className?: string }) {
  return (
    <section className={className}>
      <Typography as="h2" variant="h5" color="heading" weight="bold">
        Experience
      </Typography>
      <Typography className="mt-2" variant="p" color="white">
        Where I&apos;ve worked, most recent first.
      </Typography>
      <div className="mt-8 flex flex-col border-t border-line">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.startDate}`}
            className="py-6 border-b border-line flex flex-col gap-1.5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <Typography as="h3" variant="p" weight="bold" color="white">
                {exp.title}
              </Typography>
              <Typography variant="c1" font="mono" color="gray">
                {exp.startDate} – {exp.endDate}
              </Typography>
            </div>
            <div className="sm:flex justify-between items-center">
              <div className="flex items-center gap-x-2">
                {exp.logo && (
                  <div className="relative w-6 h-6 rounded-md overflow-hidden bg-surface">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-cover object-center"
                      sizes="24px"
                    />
                  </div>
                )}
                <Typography
                  variant="c1"
                  weight="semibold"
                  color="gray"
                  className={exp.link ? "hover:underline" : undefined}
                >
                  {exp.link ? (
                    <Link href={exp.link} target="_blank">
                      {exp.company}
                    </Link>
                  ) : (
                    exp.company
                  )}
                </Typography>
                <Typography variant="c1" color="gray">
                  - {exp.location}
                </Typography>
              </div>
              <IconList className="my-2 sm:my-0" icons={exp.icons} />
            </div>
            <ul className="mt-1.5 list-disc list-outside pl-5 flex flex-col gap-1.5 text-muted">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
