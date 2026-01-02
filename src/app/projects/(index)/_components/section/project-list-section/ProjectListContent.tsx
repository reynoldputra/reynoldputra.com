"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import FocusedPictureCard from "@/components/article/FocusedPictureCard";
import TabMenu from "./TabMenu";
import TechnologyFilter, { Technology } from "./TechnologyFilter";
import { ProjectFrontmatter } from "@/modules/project/project.type";

type TabType = "main" | "side";

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
    categoryParam === "side" ? "side" : "main"
  );

  // Extract unique technologies from projects in the current tab
  const availableTechnologies = useMemo(() => {
    const techSet = new Set<Technology>();
    projects
      .filter((project) => project.frontmatter.category === activeTab)
      .forEach((project) => {
        project.frontmatter.icons?.forEach((icon) => {
          if (["react", "nest", "next", "laravel", "typescript", "aws", "azure", "golang", "iot", "arduino", "c", "python", "ai"].includes(icon)) {
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
    if (category === "side" || category === "main") {
      setActiveTab(category);
    } else {
      setActiveTab("main");
    }
    
    const techParam = searchParams.get("tech");
    if (techParam) {
      const techs = techParam.split(",").filter((t): t is Technology => 
        ["react", "nest", "next", "laravel", "typescript", "aws", "azure", "golang", "iot", "arduino", "c", "python", "ai"].includes(t)
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
  const sideCount = projects.filter((project) => project.frontmatter.category === "side").length;

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
        sideCount={sideCount}
      />
      <TechnologyFilter
        technologies={availableTechnologies}
        selectedTechnologies={selectedTechnologies}
        onToggle={handleTechnologyToggle}
      />
      <div className="flex flex-col gap-y-8 sm:gap-y-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => {
            return (
              <FocusedPictureCard
                project={project.frontmatter}
                slug={project.slug}
                key={idx}
              />
            );
          })
        ) : (
          <div className="text-rockblue-500 font-mono text-md">
            No {activeTab} projects found{selectedTechnologies.length > 0 ? " with selected technologies" : ""}. Check back soon!
          </div>
        )}
      </div>
    </>
  );
}

