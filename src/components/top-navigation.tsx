import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RESUME_DATA } from "@/data/resume-data";

export function TopNavigation() {
  // Navigation items with links to separate pages
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Tools", href: "/tools" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full max-w-screen-md mx-auto py-6 px-4">
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/Julian-Amoah-Logo.png"
          alt="Julian Amoah Logo"
          width={60}
          height={60}
          className="rounded-full hover:opacity-80 transition-opacity duration-200 mb-4"
        />
        <h1 className="nimbus font-bold uppercase tracking-wide text-white text-center">
          {RESUME_DATA.name}
        </h1>
      </div>
      
      {/* Horizontal Navigation */}
      <nav className="flex justify-center space-x-8 mb-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </header>
  );
}