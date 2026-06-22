"use client";

import { useThemeTransition } from "@/hooks/use-theme-transition";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { focusRing } from "@/lib/focus-ring";

interface ThemeToggleProps {
  variant?: "icon" | "menu";
  className?: string;
}

export function ThemeToggle({ variant = "icon", className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useThemeTransition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  const modeLabel = isDark ? "Dark mode" : "Light mode";

  if (!mounted) {
    if (variant === "menu") {
      return (
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-md border border-border px-4 py-3 text-muted-foreground",
            className,
          )}
          aria-hidden
        >
          <span className="text-base font-medium">Dark mode</span>
          <Moon className="h-5 w-5" />
        </div>
      );
    }

    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn("h-8 w-8 text-muted-foreground", className)}
        aria-label="Toggle theme"
        disabled
      >
        <Moon className="h-4 w-4" />
      </Button>
    );
  }

  if (variant === "menu") {
    return (
      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-between rounded-md border border-border px-4 py-3 text-foreground transition-colors hover:bg-secondary",
          focusRing,
          className,
        )}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={label}
      >
        <span className="text-base font-medium">{modeLabel}</span>
        {isDark ? (
          <Moon className="h-5 w-5 text-muted-foreground" />
        ) : (
          <Sun className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "h-8 w-8 text-muted-foreground hover:text-foreground",
        className,
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
}
