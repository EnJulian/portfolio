"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RESUME_DATA } from "@/data/resume-data";
import { Footer } from "./footer";
import { MobileNav } from "./mobile-nav";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const pathname = usePathname();

  // Navigation items for mobile view (includes Contact)
  const mobileNavItems = [
    { name: "About", href: "/about" },
    { name: "History", href: "/work" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // Navigation items for desktop view (excludes Contact)
  const desktopNavItems = [
    { name: "About", href: "/about" },
    { name: "History", href: "/work" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased">
      <div className="mx-auto w-full max-w-5xl min-h-screen py-6 sm:py-10 md:py-[15vh]">
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Logo and Name header for mobile */}
          <div className="w-full flex justify-between items-center px-4 py-3 sm:p-6 md:hidden sticky top-0 z-20 bg-black border-b border-gray-800">
            <div className="inline-block">
              <Link href="/about" className="inline-flex comet-glow relative group">
                <Image
                  src="/Julian-Amoah-Favicon-Black.png"
                  alt="Julian Amoah Logo"
                  width={31}
                  height={31}
                  className="rounded-full"
                  priority
                />
              </Link>
            </div>
            <h1 className="jakarta-sans uppercase tracking-wide text-sm sm:text-base">
              <a href="/about">
                {RESUME_DATA.name}
              </a>
            </h1>
            <MobileNav navItems={mobileNavItems} />
          </div>

          {/* Sidebar for larger screens - sticky position */}
          <aside className="md:w-1/4 p-4 sm:p-6 md:sticky md:top-0 md:z-10 self-start">
            <div className="md:mb-10 hidden md:block">
              <Link href="/about" className="inline-flex comet-glow relative group">
                <Image
                  src="/Julian-Amoah-Favicon-Black.png"
                  alt="Julian Amoah Logo"
                  width={31}
                  height={31}
                  className="rounded-full"
                  priority
                />
              </Link>
            </div>

            <nav className="mt-6 hidden md:block">
              <ul className="space-y-3">
                {desktopNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name} className="flex items-center">
                      <span className={`mr-2 ${isActive ? "text-white" : "text-gray-600"}`}>
                        {isActive ? "•" : "◦"}
                      </span>
                      <Link
                        href={item.href}
                        className={`transition-colors duration-200 text-sm ${
                          isActive 
                            ? "text-white font-medium" 
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <main className="md:w-3/4 p-4 sm:p-6 overflow-y-visible">
            {/* Name header for larger screens */}
            <div className="hidden md:block mb-8">
              <h1 className="text-xl font-bold tracking-wide text-white mitchell-font">
                <Link href="/about" className="hover:text-gray-300 transition-colors duration-200">
                  {RESUME_DATA.name.toUpperCase()}
                </Link>
              </h1>
            </div>

            {/* Page content with extra bottom padding to show scrollability */}
            <div className="text-gray-400 text-[1.08rem] sm:text-[0.972rem] pb-20 sm:pb-16 md:pb-6">
              {children}
            </div>

            {/* Footer - with conditional padding for specific pages */}
            <Footer 
              className={
                pathname === "/work" || 
                pathname === "/projects" || 
                pathname === "/contact" 
                  ? "mb-16 md:mb-0" : ""
              } />
          </main>
        </div>
      </div>
    </div>
  );
}
