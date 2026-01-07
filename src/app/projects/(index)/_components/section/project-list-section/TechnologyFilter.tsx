"use client";

import clsx from "clsx";
import { Technology, technologyMap } from "@/data/technologies";

interface TechnologyFilterProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  onToggle: (tech: Technology) => void;
}

export default function TechnologyFilter({
  technologies,
  selectedTechnologies,
  onToggle,
}: TechnologyFilterProps) {
  if (technologies.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex justify-center flex-wrap gap-2">
        {technologies.map((tech) => {
          const isSelected = selectedTechnologies.includes(tech);
          const config = technologyMap[tech];
          
          return (
            <button
              key={tech}
              onClick={() => onToggle(tech)}
              className={clsx(
                "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-mono font-semibold transition-colors",
                "border",
                isSelected
                  ? "bg-spray-300/20 border-spray-300 text-spray-300"
                  : "bg-primary-900/50 border-rockblue-900/40 text-rockblue-500 hover:border-rockblue-500 hover:text-rockblue-50"
              )}
            >
              {config.icon && <span className="text-lg">{config.icon()}</span>}
              <span>{config.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

