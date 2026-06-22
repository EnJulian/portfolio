"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useThemeTransition } from "@/hooks/use-theme-transition";
import { cn } from "@/lib/utils";
import { focusRing } from "@/lib/focus-ring";

interface ThemeSegmentedToggleProps {
  className?: string;
}

export function ThemeSegmentedToggle({ className }: ThemeSegmentedToggleProps) {
  const { resolvedTheme, setTheme } = useThemeTransition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  const segmentClass = (active: boolean) =>
    cn(
      "flex items-center justify-center rounded-md px-2.5 py-1.5",
      active
        ? "border border-border/60 bg-background text-foreground shadow-sm"
        : "border border-transparent text-muted-foreground",
    );

  if (!mounted) {
    return (
      <div
        className={cn(
          "inline-flex rounded-lg border border-border bg-secondary/40 p-1 shadow-sm",
          className,
        )}
        aria-hidden
      >
        <div className={segmentClass(false)}>
          <Sun className="h-3.5 w-3.5 shrink-0" />
        </div>
        <div className={segmentClass(true)}>
          <Moon className="h-3.5 w-3.5 shrink-0" />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      className={cn(
        "inline-flex rounded-lg border border-border bg-secondary/40 p-1 shadow-sm transition-colors hover:bg-secondary/60",
        focusRing,
        className,
      )}
    >
      <span className={segmentClass(!isDark)} aria-hidden>
        <Sun className="h-3.5 w-3.5 shrink-0" />
      </span>
      <span className={segmentClass(isDark)} aria-hidden>
        <Moon className="h-3.5 w-3.5 shrink-0" />
      </span>
    </button>
  );
}
