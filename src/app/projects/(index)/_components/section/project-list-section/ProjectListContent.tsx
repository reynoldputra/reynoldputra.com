"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import FocusedPictureCard from "@/components/article/FocusedPictureCard";
import TabMenu from "./TabMenu";
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

  // Sync state with URL parameter on mount and when URL changes
  useEffect(() => {
    const category = searchParams.get("category") as TabType | null;
    if (category === "side" || category === "main") {
      setActiveTab(category);
    } else {
      setActiveTab("main");
    }
  }, [searchParams]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    if (tab === "main") {
      params.delete("category");
    } else {
      params.set("category", tab);
    }
    const queryString = params.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  };

  const mainCount = projects.filter((project) => project.frontmatter.category === "main").length;
  const sideCount = projects.filter((project) => project.frontmatter.category === "side").length;

  const filteredProjects = projects.filter(
    (project) => project.frontmatter.category === activeTab
  );

  return (
    <>
      <TabMenu 
        activeTab={activeTab} 
        onTabChange={handleTabChange}
        mainCount={mainCount}
        sideCount={sideCount}
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
            No {activeTab} projects yet. Check back soon!
          </div>
        )}
      </div>
    </>
  );
}

