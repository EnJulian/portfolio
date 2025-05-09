import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "@/data/resume-data";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  // Navigation items with links to separate pages
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Tools", href: "/tools" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased">
      <div className="max-w-5xl mx-auto flex pt-12">
        {/* Left navigation column */}
        <div className="w-48 shrink-0 mr-12">
          <div className="mb-8">
            <Image
              src="/Julian-Amoah-Logo.png"
              alt="Julian Amoah Logo"
              width={48}
              height={48}
              className="mb-3"
            />
            <h1 className="text-lg font-semibold text-white">
              {RESUME_DATA.name}
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-col space-y-3 mb-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mt-8 flex space-x-3">
            {RESUME_DATA.contact.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 max-w-2xl">
          {children}
        </div>
      </div>
    </div>
  );
} 