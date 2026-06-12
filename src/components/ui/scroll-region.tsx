"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronDown } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ScrollRegionProps = {
  children: ReactNode;
  className?: string;
  enabled?: boolean;
};

type ScrollState = {
  canScrollUp: boolean;
  canScrollDown: boolean;
  hasOverflow: boolean;
};

const initialScrollState: ScrollState = {
  canScrollUp: false,
  canScrollDown: false,
  hasOverflow: false,
};

export function ScrollRegion({
  children,
  className,
  enabled = true,
}: ScrollRegionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<ScrollState>(initialScrollState);
  const [hintDismissed, setHintDismissed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const desktop = window.matchMedia("(min-width: 768px)").matches;
    setIsDesktop(desktop);

    const { scrollTop, scrollHeight, clientHeight } = el;
    const overflow = desktop && scrollHeight > clientHeight + 1;
    const maxScroll = scrollHeight - clientHeight;

    setScrollState({
      canScrollUp: overflow && scrollTop > 4,
      canScrollDown: overflow && scrollTop < maxScroll - 4,
      hasOverflow: overflow,
    });

    if (scrollTop > 8) {
      setHintDismissed(true);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState, children]);

  useEffect(() => {
    setHintDismissed(false);
  }, [children]);

  const showIndicators = enabled && isDesktop && scrollState.hasOverflow;
  const showHint =
    showIndicators && scrollState.canScrollDown && !hintDismissed;

  return (
    <div className="relative min-h-0 flex-1">
      <div
        ref={scrollRef}
        className={cn(
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground/30 hover:scrollbar-thumb-muted-foreground/50 h-full min-h-0",
          className,
        )}
      >
        {children}
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-background to-transparent transition-opacity duration-300 md:h-8",
          showIndicators && scrollState.canScrollUp
            ? "opacity-100"
            : "opacity-0",
        )}
      />

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-background via-background/90 to-transparent transition-opacity duration-300 md:h-14",
          showIndicators && scrollState.canScrollDown
            ? "opacity-100"
            : "opacity-0",
        )}
      />

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border/70 bg-background/75 px-3 py-1 shadow-sm backdrop-blur-sm transition-all duration-300",
          showHint
            ? "translate-y-0 opacity-100"
            : "translate-y-1 opacity-0",
        )}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          Scroll
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-muted-foreground",
            !prefersReducedMotion && "motion-safe:animate-pulse-horizontal",
          )}
        />
      </div>
    </div>
  );
}
