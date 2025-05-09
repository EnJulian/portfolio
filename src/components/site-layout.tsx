"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RESUME_DATA } from "@/data/resume-data";
import { Footer } from "./footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const pathname = usePathname();
  
  const navItems = [
    { name: "About", href: "/about" },
    { name: "History", href: "/work" },
    { name: "Tools", href: "/tools" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased overflow-hidden">
      <div className="fixed top-[15vh] left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-[75vh]">
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Logo and Name header for mobile */}
          <div className="w-full flex justify-between items-center p-6 md:hidden">
            <div className="inline-block">
              <Link href="/about" className="inline-flex">
                <Image
                  src="/Julian-Amoah-Logo.png"
                  alt="Julian Amoah Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            </div>
            <h1 className="text-lg font-bold tracking-wide text-white">
              {RESUME_DATA.name.toUpperCase()}
            </h1>
          </div>

          {/* Sidebar for larger screens - fixed position */}
          <aside className="md:w-1/4 p-6 h-full">
            <div className="md:mb-10 hidden md:block">
              <Link href="/about" className="inline-flex">
                <Image
                  src="/Julian-Amoah-Logo.png"
                  alt="Julian Amoah Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
            </div>
            
            <nav className="mt-6">
              <ul className="space-y-3">
                {navItems.map((item) => {
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
          <main className="md:w-3/4 p-6 h-full overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
            {/* Name header for larger screens */}
            <div className="hidden md:block mb-8">
              <h1 className="text-xl font-bold tracking-wide text-white">
                {RESUME_DATA.name.toUpperCase()}
              </h1>
            </div>
            
            {/* Page content with extra bottom padding to show scrollability */}
            <div className="text-gray-400 text-sm pb-12">
              {children}
            </div>
            
            {/* Footer */}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
} 