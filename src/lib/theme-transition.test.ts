import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { applyThemeWithTransition, THEME_TRANSITION_MS } from "@/lib/theme-transition";

describe("applyThemeWithTransition", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    document.documentElement.className = "dark";
  });

  afterEach(() => {
    vi.useRealTimers();
    document.documentElement.classList.remove("theme-transition");
  });

  it("applies theme immediately when reduced motion is preferred", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const applyTheme = vi.fn();
    applyThemeWithTransition(applyTheme);

    expect(applyTheme).toHaveBeenCalledOnce();
    expect(document.documentElement.classList.contains("theme-transition")).toBe(
      false,
    );
  });

  it("uses CSS fallback when View Transitions API is unavailable", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: false,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const applyTheme = vi.fn();
    applyThemeWithTransition(applyTheme);

    expect(applyTheme).toHaveBeenCalledOnce();
    expect(document.documentElement.classList.contains("theme-transition")).toBe(
      true,
    );

    vi.advanceTimersByTime(THEME_TRANSITION_MS);

    expect(document.documentElement.classList.contains("theme-transition")).toBe(
      false,
    );
  });

  it("uses View Transitions API when available", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: false,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const applyTheme = vi.fn();
    const startViewTransition = vi.fn((callback: () => void) => {
      callback();
    });

    document.startViewTransition = startViewTransition;

    applyThemeWithTransition(applyTheme);

    expect(startViewTransition).toHaveBeenCalledOnce();
    expect(applyTheme).toHaveBeenCalledOnce();
    expect(document.documentElement.classList.contains("theme-transition")).toBe(
      false,
    );

    delete document.startViewTransition;
  });
});
