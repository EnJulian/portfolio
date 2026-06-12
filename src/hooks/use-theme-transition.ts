"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";
import { applyThemeWithTransition } from "@/lib/theme-transition";

export function useThemeTransition() {
  const { theme, setTheme, ...rest } = useTheme();

  const setThemeWithTransition = useCallback(
    (nextTheme: string) => {
      applyThemeWithTransition(() => setTheme(nextTheme));
    },
    [setTheme],
  );

  return {
    theme,
    setTheme: setThemeWithTransition,
    ...rest,
  };
}
