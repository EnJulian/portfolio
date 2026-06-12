"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { focusRing } from "@/lib/focus-ring";

type ProjectPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export function ProjectPagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: ProjectPaginationProps) {
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Project pages"
      className={cn(
        "flex items-center justify-between gap-3 border-t border-border pt-4",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrevious}
        aria-label="Previous page"
        className={cn(
          "inline-flex items-center gap-1 rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40",
          focusRing,
        )}
      >
        <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="flex items-center gap-2 rounded-full border border-border/70 bg-surface-elevated/60 px-4 py-1.5 shadow-sm backdrop-blur-sm">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          Page
        </span>
        <span className="font-mono text-sm font-semibold tabular-nums text-foreground">
          {currentPage}
        </span>
        <span className="font-mono text-xs text-muted-foreground">of</span>
        <span className="font-mono text-sm tabular-nums text-muted-foreground">
          {totalPages}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        aria-label="Next page"
        className={cn(
          "inline-flex items-center gap-1 rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40",
          focusRing,
        )}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-3.5 w-3.5" aria-hidden />
      </button>
    </nav>
  );
}
