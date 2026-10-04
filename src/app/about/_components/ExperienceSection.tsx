import Typography from "@/components/typography/Typography";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer, first hire",
    company: "Stealth startup",
    location: "Remote, London",
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
    startDate: "Aug 2023",
    endDate: "Jan 2024",
    description: [
      "Led a team to migrate a Japanese e-learning platform from WordPress to Next.js.",
      "Improved website performance by 35% and reduced operational costs by 21%.",
    ],
  },
  {
    title: "Freelance",
    company: "Self-employed",
    location: "Remote",
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
      <Typography as="h2" variant="h5" color="highlight" weight="bold">
        Experience
      </Typography>
      <Typography className="mt-2" variant="p" color="white">
        Where I&apos;ve worked, most recent first.
      </Typography>
      <div className="mt-8 flex flex-col border-t border-rockblue-900/60">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.startDate}`}
            className="py-6 border-b border-rockblue-900/60 flex flex-col gap-1.5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <Typography as="h3" variant="p" weight="bold" color="white">
                {exp.title}
              </Typography>
              <Typography variant="c1" font="mono" color="gray">
                {exp.startDate} – {exp.endDate}
              </Typography>
            </div>
            <Typography variant="c1" font="mono" color="gray">
              {exp.company} · {exp.location}
            </Typography>
            <ul className="mt-1.5 list-disc list-outside pl-5 flex flex-col gap-1.5 text-rockblue-500">
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
