"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { focusRing } from "@/lib/focus-ring";

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
  className?: string;
}

export function NavLink({
  href,
  isActive,
  children,
  variant = "desktop",
  onClick,
  className,
}: NavLinkProps) {
  const isMobile = variant === "mobile";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "transition-colors duration-200",
        focusRing,
        isMobile
          ? cn(
              "flex items-center text-xl font-medium",
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )
          : cn(
              "text-sm",
              isActive
                ? "font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground",
            ),
        className,
      )}
    >
      {isMobile && (
        <span
          className={cn(
            "mr-3 text-xl",
            isActive ? "text-foreground" : "text-muted-foreground/60",
          )}
          aria-hidden
        >
          {isActive ? "•" : "◦"}
        </span>
      )}
      {!isMobile && (
        <span
          className={cn(
            "mr-2",
            isActive ? "text-foreground" : "text-muted-foreground/60",
          )}
          aria-hidden
        >
          {isActive ? "•" : "◦"}
        </span>
      )}
      {children}
    </Link>
  );
}
