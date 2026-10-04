"use client";

import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ProjectListItem from "@/components/article/ProjectListItem";
import TabMenu from "./TabMenu";
import TechnologyFilter from "./TechnologyFilter";
import { Technology, technologyMap } from "@/data/technologies";
import { ProjectFrontmatter } from "@/modules/project/project.type";

type TabType = "main" | "archive";

interface ProjectListContentProps {
  projects: Array<{
    frontmatter: ProjectFrontmatter;
    slug: string;
  }>;
}

export default function ProjectListContent({ projects }: ProjectListContentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const categoryParam = searchParams.get("category") as TabType | null;
  const [activeTab, setActiveTab] = useState<TabType>(
    categoryParam === "archive" ? "archive" : "main"
  );

  // Extract unique technologies from projects in the current tab
  const availableTechnologies = useMemo(() => {
    const techSet = new Set<Technology>();
    projects
      .filter((project) => project.frontmatter.category === activeTab)
      .forEach((project) => {
        project.frontmatter.icons?.forEach((icon) => {
          if (icon in technologyMap) {
            techSet.add(icon as Technology);
          }
        });
      });
    return Array.from(techSet).sort();
  }, [projects, activeTab]);

  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  // Sync state with URL parameter on mount and when URL changes
  useEffect(() => {
    const category = searchParams.get("category") as TabType | null;
    if (category === "archive" || category === "main") {
      setActiveTab(category);
    } else {
      setActiveTab("main");
    }
    
    const techParam = searchParams.get("tech");
    if (techParam) {
      const techs = techParam.split(",").filter((t): t is Technology => 
        t in technologyMap
      );
      setSelectedTechnologies(techs);
    } else {
      setSelectedTechnologies([]);
    }
  }, [searchParams]);

  const updateUrl = (category: TabType | null, technologies: Technology[]) => {
    const params = new URLSearchParams();
    
    if (category && category !== "main") {
      params.set("category", category);
    }
    
    if (technologies.length > 0) {
      params.set("tech", technologies.join(","));
    }
    
    const queryString = params.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSelectedTechnologies([]);
    updateUrl(tab, []);
  };

  const handleTechnologyToggle = (tech: Technology) => {
    const newSelected = selectedTechnologies.includes(tech)
      ? selectedTechnologies.filter((t) => t !== tech)
      : [...selectedTechnologies, tech];
    
    setSelectedTechnologies(newSelected);
    updateUrl(activeTab, newSelected);
  };

  const mainCount = projects.filter((project) => project.frontmatter.category === "main").length;
  const archiveCount = projects.filter((project) => project.frontmatter.category === "archive").length;

  // Filter projects by category and selected technologies
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by category
      if (project.frontmatter.category !== activeTab) return false;
      
      // Filter by technologies (if any selected)
      if (selectedTechnologies.length > 0) {
        const projectTechs = project.frontmatter.icons || [];
        // Project must have at least one of the selected technologies
        return selectedTechnologies.some((tech) => projectTechs.includes(tech));
      }
      
      return true;
    });
  }, [projects, activeTab, selectedTechnologies]);

  return (
    <>
      <TabMenu 
        activeTab={activeTab} 
        onTabChange={handleTabChange}
        mainCount={mainCount}
        archiveCount={archiveCount}
      />
      <TechnologyFilter
        technologies={availableTechnologies}
        selectedTechnologies={selectedTechnologies}
        onToggle={handleTechnologyToggle}
      />
      <div
        className={clsx(
          "flex flex-col",
          filteredProjects.length > 0 && "border-t border-line",
        )}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => {
            return (
              <ProjectListItem
                project={project.frontmatter}
                slug={project.slug}
                key={idx}
              />
            );
          })
        ) : (
          <div className="text-muted font-mono text-md">
            No {activeTab} projects found{selectedTechnologies.length > 0 ? " with selected technologies" : ""}. Check back soon!
          </div>
        )}
      </div>
    </>
  );
}

