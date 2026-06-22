"use client";

import { FiExternalLink, FiCode } from "react-icons/fi";
import { ClockIcon } from "@/components/icons/ClockIcon";
import { SkillChip } from "@/components/ui/skill-chip";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export type Project = {
  title: string;
  techStack: readonly string[];
  description: string;
  logo: unknown;
  link?: {
    label: string;
    href?: string;
  };
  githubLink?: string;
  badges?: readonly string[];
  badgeIconTypes?: readonly string[];
};

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  isMobile: boolean;
  selectedTechs: string[];
  onToggleExpand: () => void;
  onToggleTech: (tech: string) => void;
}

const VISIBLE_SKILL_LIMIT = 3;

export function ProjectCard({
  project,
  isExpanded,
  isMobile,
  selectedTechs,
  onToggleExpand,
  onToggleTech,
}: ProjectCardProps) {
  const hasRegularLink = Boolean(project.link?.href);
  const hasGithubLink = Boolean(project.githubLink?.length);
  const hasAnyLink = hasRegularLink || hasGithubLink;
  const projectUrl = hasRegularLink
    ? project.link?.href
    : hasGithubLink
      ? project.githubLink
      : "#";
  const visibleTechs = isExpanded
    ? project.techStack
    : project.techStack.slice(0, VISIBLE_SKILL_LIMIT);
  const hiddenTechCount = project.techStack.length - VISIBLE_SKILL_LIMIT;

  return (
    <div className="relative">
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "glass-shine-effect group/card relative flex flex-col rounded-md border border-border bg-gradient-to-b from-card to-secondary/40 p-3 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-secondary/50 hover:shadow-md",
          isExpanded ? "min-h-[155px]" : "h-[155px]",
          hasAnyLink ? "cursor-pointer" : "cursor-default",
        )}
        onClick={(e) => {
          if (!hasAnyLink) {
            e.preventDefault();
            onToggleExpand();
            return;
          }
          if (e.metaKey || e.ctrlKey) return;
          onToggleExpand();
        }}
      >
        <div className="absolute right-2 top-2 z-10 flex space-x-2">
          {project.githubLink && (
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="View source code"
                  >
                    <FiCode size={16} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>View Source Code</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {hasRegularLink && (
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    className="text-muted-foreground transition-colors group-hover/card:text-foreground"
                    aria-hidden
                  >
                    <FiExternalLink size={16} />
                  </span>
                </TooltipTrigger>
                <TooltipContent>Visit Project Website</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        <div className="mb-2 flex items-start justify-between">
          <h3 className="flex items-center text-header-base font-medium text-foreground group-hover/card:text-foreground/90">
            <span className="terminus-project">{project.title}</span>
            {project.badgeIconTypes?.includes("clock") && (
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="relative ml-1.5 inline-block text-brand-muted">
                      <ClockIcon className="h-3.5 w-3.5 cursor-pointer" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>In development</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </h3>
          {project.badges && project.badges.length > 0 && (
            <div className="flex gap-1">
              {project.badges.map((badge, index) => {
                const iconType =
                  project.badgeIconTypes && project.badgeIconTypes[index];
                return (
                  <span
                    key={badge}
                    className="flex items-center rounded bg-secondary px-1.5 py-0.5 text-xs text-brand-muted"
                  >
                    {iconType === "clock" && (
                      <ClockIcon className="mr-1 h-3 w-3" />
                    )}
                    {badge}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        <p
          className={cn(
            "mb-2 text-sm text-muted-foreground",
            !isExpanded && "line-clamp-3",
          )}
        >
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {visibleTechs.map((tech) => (
            <SkillChip
              key={tech}
              as={isMobile ? "span" : "button"}
              variant={
                selectedTechs.includes(tech) ? "projectSelected" : "project"
              }
              className="text-[calc(0.75rem*0.97)] leading-[calc(1rem*0.97)]"
              onClick={(e) => {
                if (!isMobile) {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleTech(tech);
                }
              }}
            >
              {tech}
            </SkillChip>
          ))}
          {!isExpanded && hiddenTechCount > 0 && (
            <SkillChip
              as="button"
              variant="projectOverflow"
              className="text-[calc(0.75rem*0.97)] leading-[calc(1rem*0.97)]"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleExpand();
              }}
            >
              +{hiddenTechCount} more
            </SkillChip>
          )}
        </div>
      </a>
    </div>
  );
}
