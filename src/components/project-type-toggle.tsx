"use client";

import { Briefcase, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { focusRing } from "@/lib/focus-ring";

type ProjectType = "professional" | "personal";

type ProjectTypeToggleProps = {
  value: ProjectType;
  onChange: (value: ProjectType) => void;
  professionalCount: number;
  personalCount: number;
  className?: string;
};

const options: Array<{
  value: ProjectType;
  label: string;
  shortLabel: string;
  icon: typeof Briefcase;
}> = [
  {
    value: "professional",
    label: "Professional",
    shortLabel: "Pro",
    icon: Briefcase,
  },
  {
    value: "personal",
    label: "Personal",
    shortLabel: "Personal",
    icon: Sparkles,
  },
];

export function ProjectTypeToggle({
  value,
  onChange,
  professionalCount,
  personalCount,
  className,
}: ProjectTypeToggleProps) {
  const counts: Record<ProjectType, number> = {
    professional: professionalCount,
    personal: personalCount,
  };

  return (
    <div
      className={cn(
        "inline-flex rounded-lg border border-border bg-secondary/40 p-1 shadow-sm",
        className,
      )}
      role="tablist"
      aria-label="Project type"
    >
      {options.map((option) => {
        const isActive = value === option.value;
        const Icon = option.icon;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              "relative flex min-w-[7.5rem] items-center justify-center gap-2 rounded-md border px-3 py-2 text-xs font-medium sm:min-w-[9.5rem] sm:px-4",
              focusRing,
              isActive
                ? "border-border/60 bg-background text-foreground shadow-sm"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            <span className="flex items-center gap-1.5">
              <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="hidden sm:inline">{option.label}</span>
              <span className="sm:hidden">{option.shortLabel}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[calc(0.75rem*0.97)] leading-[calc(1rem*0.97)]",
                  isActive
                    ? "bg-secondary text-foreground"
                    : "bg-background/70 text-muted-foreground",
                )}
              >
                {counts[option.value]}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
