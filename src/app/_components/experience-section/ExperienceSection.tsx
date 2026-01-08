"use client";

import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import Typography from "@/components/typography/Typography";
import clsx from "clsx";
import { HTMLAttributes, useState } from "react";
import Image from "next/image";
import IconList from "@/components/article/IconList";
import Link from "next/link";
import ButtonAnimation from "@/components/button/ButtonAnimation";

interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    logo?: string;
    startDate: string;
    endDate: string;
    icons?: string[];
    link?: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Full Stack Engineer",
        company: "KinetixPro",
        location: "Remote, Singapore",
        logo: "https://ik.imagekit.io/cndlyiyfg/reynoldputra-com/company-logo/kinetixpro.jpeg",
        startDate: "Sep 2024",
        endDate: "Present",
        icons: ["next", "nest", "python", "elixir", "aws"],
        link: "https://www.kinetixpro.ai",
        description: [
            "Built 7+ core features for a safety-risk platform",
            "Integrating AI detection (computer vision) with Elixir, Next JS, and Python",
            "Created a generic AI–IoT integration pipeline for sensors and speakers",
            "Delivered 4+ international projects (China, Thailand, Mexico, Taiwan, etc.)",
            "Improved statistical query performance by 4× (2s to <500ms) via dynamic SQL optimization",
            "Improved reliability of on-premise multi-tenant servers and AWS-based deployments"
        ]
    },
    {
        title: "Founding Full Stack Engineer (Part time)",
        company: "Generation Health",
        location: "Remote, London",
        logo: "https://ik.imagekit.io/cndlyiyfg/reynoldputra-com/company-logo/genaia.png",
        startDate: "Sep 2025",
        endDate: "Present",
        icons: ["next", "typescript", "supabase", "n8n"],
        description: [
            "Built healthcare apps with a fast MVP delivery cycle, developing 5+ core features end-to-end",
            "Integrated GenAI pipelines to parse and extract structured content from documents with N8N",
            "Initiated Next.js–Supabase integration for rapid development"
        ]
    },
    {
        title: "Implementation (DevOps) Engineer Intern",
        company: "Traveloka",
        location: "On site, Banten",
        logo: "https://ik.imagekit.io/cndlyiyfg/reynoldputra-com/company-logo/traveloka.png",
        startDate: "Feb 2024",
        endDate: "Jun 2024",
        icons: ["aws", "terraform", "datadog"],
        link: "https://traveloka.com",
        description: [
            "Manage infrastructure using AWS and Terraform as IaC tools",
            "Migrated 50+ microservices logs from CloudWatch to Datadog for better observability and monitoring",
            "Implemented a standardized Terraform deployment for 30+ microservice",
            "Gain hands-on experience in maintaining complex applications with hundreds of services"
        ]
    },
    {
        title: "Web Developer",
        company: "Arkalearn",
        location: "Remote, Jakarta",
        logo: "https://ik.imagekit.io/cndlyiyfg/reynoldputra-com/company-logo/arkalearn.png",
        startDate: "Aug 2023",
        endDate: "Jan 2024",
        icons: ["next", "nest", "typescript"],
        link: "https://arkalearn.com",
        description: [
            "Led a team to migrate a Japanese e-learning platform from WordPress to Next.js",
            "Improved website performance by 35%",
            "Reduced operational costs by 21%"
        ]
    },
    {
        title: "Freelance",
        company: "Self Employed",
        location: "Remote",
        logo: "https://ik.imagekit.io/cndlyiyfg/reynoldputra-com/company-logo/reynoldputra.png",
        startDate: "Sep 2022",
        endDate: "Present",
        icons: ["next", "laravel"],
        description: [
            "Freelance projects to build websites and web applications for clients",
            "Developed websites and web applications for clients using Next.js and Laravel"
        ]
    }
];

interface ExperienceCardProps {
    experience: ExperienceItem;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <div className="w-full">
            <div className="sm:flex justify-between">
                <Typography variant="p" weight="bold" color="white">
                    {experience.title}
                </Typography>
                <Typography variant="c1" font="mono" color="gray" className="mt-1">
                    {experience.startDate} - {experience.endDate}
                </Typography>
            </div>
            <div className="sm:flex justify-between items-center mt-2 sm:mt-0">
                <div className="flex items-center gap-x-2">
                    {experience.logo && (
                        <div className="w-6 h-6 bg-gray-600/30 rounded-md relative overflow-hidden">
                            <Image
                                src={experience.logo}
                                alt={`${experience.company} logo`}
                                fill
                                className="object-cover object-center"
                                sizes="24px"
                            />
                        </div>
                    )}
                    <Typography variant="c1" weight="semibold" color="gray" className={clsx(experience.link && "hover:underline cursor-pointer")}>
                        {
                            experience.link ? (
                                <Link href={experience.link} target="_blank">
                                    {experience.company}
                                </Link>
                            ) : (
                                experience.company
                            )
                        }
                    </Typography>
                    <Typography variant="c1" color="gray">
                        - {experience.location}
                    </Typography>
                </div>
                {experience.icons && <IconList className="my-2" icons={experience.icons} />}
            </div>
            <div>
                <ul className="list-disc list-outside text-rockblue-500 pl-5">
                    {experience.description.map((item, idx) => (
                        <li key={idx}>
                            <Typography variant="c1" color="gray">
                                {item}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function ExperienceSection({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={clsx("relative", className)} {...props}>
            <Section>
                <Grid screenHeight={false}>
                    <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
                        <Typography variant="h5" color="highlight" weight="bold">
                            Experiences
                        </Typography>
                        <Typography className="mt-2" variant="p" color="white">
                            My professional journey and the experiences that have shaped my growth as a software engineer.
                        </Typography>
                        <div className="mt-16 relative">
                            <div className={clsx(
                                "gap-y-8 flex flex-col transition-all duration-300",
                                !isExpanded && "h-[430px] overflow-hidden"
                            )}>
                                {experiences.map((experience, idx) => (
                                    <ExperienceCard key={idx} experience={experience} />
                                ))}
                            </div>
                            {!isExpanded && (
                                <div className="absolute z-20 bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-primary-950 pointer-events-none"></div>
                            )}
                        </div>
                        <div className="flex justify-center mt-16 z-30">
                            <ButtonAnimation
                                onClick={() => setIsExpanded(!isExpanded)}
                                data-umami-event="see-more-experience-button" className="border-rockblue-50" innerClassName="flex items-center gap-2">
                                <Typography
                                    font="mono"
                                    variant="c1"
                                    className="z-20 transition-all group-hover:font-bold text-rockblue-50 group-hover:text-primary-950"
                                >
                                    {isExpanded ? "Show less" : "Show more"}
                                </Typography>
                            </ButtonAnimation>
                        </div>
                    </Cell>
                </Grid>
            </Section>
        </div>
    );
}
