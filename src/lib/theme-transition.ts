import { flushSync } from "react-dom";

export const THEME_TRANSITION_MS = 450;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function applyThemeWithTransition(applyTheme: () => void): void {
  if (typeof document === "undefined" || prefersReducedMotion()) {
    applyTheme();
    return;
  }

  const root = document.documentElement;

  const run = () => {
    flushSync(applyTheme);
  };

  if (
    "startViewTransition" in document &&
    typeof document.startViewTransition === "function"
  ) {
    document.startViewTransition(run);
    return;
  }

  root.classList.add("theme-transition");
  run();

  window.setTimeout(() => {
    root.classList.remove("theme-transition");
  }, THEME_TRANSITION_MS);
}
