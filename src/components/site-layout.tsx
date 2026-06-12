"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";
import { Footer } from "./footer";
import { MobileNav } from "./mobile-nav";
import { NavLink } from "./ui/nav-link";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const pathname = usePathname();

  const mobileNavItems = [
    { name: "About", href: "/about" },
    { name: "History", href: "/work" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const desktopNavItems = [
    { name: "About", href: "/about" },
    { name: "History", href: "/work" },
    { name: "Projects", href: "/projects" },
  ];

  const isProjectsPage = pathname === "/projects";

  useEffect(() => {
    if (!isProjectsPage) {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const syncScrollLock = () => {
      document.documentElement.style.overflow = mediaQuery.matches
        ? "hidden"
        : "";
    };

    syncScrollLock();
    mediaQuery.addEventListener("change", syncScrollLock);

    return () => {
      document.documentElement.style.overflow = "";
      mediaQuery.removeEventListener("change", syncScrollLock);
    };
  }, [isProjectsPage]);

  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans text-foreground antialiased",
        isProjectsPage && "md:h-dvh md:max-h-dvh md:overflow-hidden",
      )}
    >
      <div
        className={cn(
          "mx-auto min-h-screen w-full max-w-5xl py-6 sm:py-10 md:pb-6 md:pt-[15vh]",
          isProjectsPage &&
            "md:flex md:h-full md:min-h-0 md:flex-col md:overflow-hidden md:pb-0",
        )}
      >
        <div
          className={cn(
            "flex h-full w-full flex-col md:flex-row",
            isProjectsPage && "md:min-h-0 md:flex-1 md:overflow-hidden",
          )}
        >
          <div className="sticky top-0 z-20 flex w-full items-center justify-between border-b border-border bg-background px-4 py-3 sm:p-6 md:hidden">
            <div className="inline-block">
              <Link
                href="/about"
                className="comet-glow group relative inline-flex"
              >
                <Image
                  src="/en.png"
                  alt="Julian Amoah Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                  priority
                />
              </Link>
            </div>
            <h1 className="font-accent uppercase tracking-wide text-header-sm sm:text-header-base">
              <Link href="/about">{RESUME_DATA.name}</Link>
            </h1>
            <MobileNav navItems={mobileNavItems} />
          </div>

          <aside className="self-start p-4 sm:p-6 md:sticky md:top-0 md:z-10 md:w-1/4">
            <div className="mb-10 hidden md:block">
              <Link
                href="/about"
                className="comet-glow group relative inline-flex"
              >
                <Image
                  src="/en.png"
                  alt="Julian Amoah Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                  priority
                />
              </Link>
            </div>

            <nav className="mt-6 hidden md:block">
              <ul className="space-y-3">
                {desktopNavItems.map((item) => (
                  <li key={item.name} className="flex items-center">
                    <NavLink
                      href={item.href}
                      isActive={pathname === item.href}
                      variant="desktop"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main
            className={cn(
              "overflow-y-visible p-4 sm:p-6 md:w-3/4 md:self-start",
              isProjectsPage &&
                "md:flex md:min-h-0 md:flex-1 md:flex-col md:self-stretch md:overflow-hidden",
            )}
          >
            <div className="mb-8 hidden shrink-0 md:block">
              <h1 className="font-display text-header-xl font-bold tracking-wide">
                <Link
                  href="/about"
                  className="transition-colors duration-200 hover:text-muted-foreground"
                >
                  {RESUME_DATA.name.toUpperCase()}
                </Link>
              </h1>
            </div>

            <div
              className={cn(
                "pb-20 text-base text-muted-foreground sm:pb-16 md:pb-6",
                isProjectsPage &&
                  "md:flex md:min-h-0 md:flex-1 md:flex-col md:overflow-hidden md:pb-0",
              )}
            >
              {children}
            </div>

            <Footer className={cn(isProjectsPage && "md:shrink-0")} />
          </main>
        </div>
      </div>
    </div>
  );
}
