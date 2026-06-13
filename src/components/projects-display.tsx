"use client";

import { useState, useRef, useEffect } from "react";
import { FiFilter, FiX } from "react-icons/fi";
import { ProjectCard, type Project } from "@/components/project-card";
import { ProjectTypeToggle } from "@/components/project-type-toggle";
import { SkillChip } from "@/components/ui/skill-chip";
import { focusRing } from "@/lib/focus-ring";
import { cn } from "@/lib/utils";

type ProjectsDisplayProps = {
  projects: readonly Project[];
  personalProjects: readonly Project[];
  className?: string;
};

export default function ProjectsDisplay({
  projects,
  personalProjects,
  className,
}: ProjectsDisplayProps) {
  const [projectType, setProjectType] = useState<"professional" | "personal">(
    "professional",
  );
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const allProjects = [...projects, ...personalProjects];
  const allTechStacks = allProjects.flatMap((project) => project.techStack);
  const uniqueTechStacks = Array.from(new Set(allTechStacks)).sort();

  const displayProjects =
    projectType === "personal" ? personalProjects : projects;
  const filteredProjects =
    selectedTechs.length > 0
      ? displayProjects.filter((project) =>
          selectedTechs.every((tech) => project.techStack.includes(tech)),
        )
      : displayProjects;

  useEffect(() => {
    setExpandedProject(null);
  }, [projectType, selectedTechs]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  const clearFilters = () => {
    setSelectedTechs([]);
  };

  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <ProjectTypeToggle
          value={projectType}
          onChange={setProjectType}
          professionalCount={projects.length}
          personalCount={personalProjects.length}
        />

        <div className="relative hidden sm:block" ref={filterRef}>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center rounded-md bg-secondary px-3 py-1 text-xs transition-colors hover:bg-surface-muted ${focusRing}`}
          >
            <FiFilter className="mr-1.5" size={12} />
            {selectedTechs.length > 0
              ? `Filters (${selectedTechs.length})`
              : "Filter by Skill"}
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 z-50 mt-1 w-48 rounded-md border border-border bg-surface-elevated shadow-lg">
              <div className="p-2">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Select technologies
                  </span>
                  {selectedTechs.length > 0 && (
                    <button
                      onClick={clearFilters}
                      className={`text-xs text-muted-foreground hover:text-foreground ${focusRing}`}
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {uniqueTechStacks.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleTech(tech)}
                    className={`flex w-full items-center justify-between rounded px-2 py-1 text-left text-xs hover:bg-secondary ${focusRing}`}
                  >
                    <span>{tech}</span>
                    {selectedTechs.includes(tech) && (
                      <span className="text-brand">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedTechs.length > 0 && (
        <div className="hidden shrink-0 flex-wrap items-center gap-2 sm:flex">
          <span className="text-xs text-muted-foreground">Filtered by:</span>
          {selectedTechs.map((tech) => (
            <SkillChip key={tech} as="span" variant="filter">
              {tech}
              <button
                onClick={() => toggleTech(tech)}
                className={`ml-1.5 text-muted-foreground hover:text-foreground ${focusRing}`}
                aria-label={`Remove ${tech} filter`}
              >
                <FiX size={12} />
              </button>
            </SkillChip>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 content-start items-start gap-3 px-0.5 pb-1 pt-3 md:grid-cols-2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.title} className="group relative">
              <ProjectCard
                project={project}
                isExpanded={expandedProject === project.title}
                isMobile={isMobile}
                selectedTechs={selectedTechs}
                onToggleExpand={() =>
                  setExpandedProject(
                    expandedProject === project.title ? null : project.title,
                  )
                }
                onToggleTech={toggleTech}
              />
            </div>
          ))
        ) : (
          <div className="col-span-2 py-8 text-center">
            <p className="text-muted-foreground">
              No projects match the selected filters.
            </p>
            <button
              onClick={clearFilters}
              className={`mt-2 rounded-md bg-secondary px-3 py-1 text-sm transition-colors hover:bg-surface-muted ${focusRing}`}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
