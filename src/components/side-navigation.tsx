import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "@/data/resume-data";

export function SideNavigation() {
  // Navigation items with links to separate pages
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-black flex flex-col items-start p-8 border-r border-gray-800 z-50">
      {/* Logo and Name */}
      <div className="flex flex-col items-start mb-12">
        <div className="relative mb-4 group">
          <Image
            src="/Liso-static.png"
            alt="Julian Amoah Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Image
              src="/Liso.gif"
              alt="Julian Amoah Logo (Animated)"
              width={60}
              height={60}
              className="rounded-full"
              unoptimized
              loading="lazy"
            />
          </div>
        </div>
        <h1 className="nimbus font-bold uppercase tracking-wide text-white">
          {RESUME_DATA.name}
        </h1>
      </div>

      {/* Vertical Navigation */}
      <nav className="flex flex-col items-start space-y-6 mb-auto">
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

      {/* Social Links */}
      <div className="mt-auto flex flex-col items-start space-y-4">
        {RESUME_DATA.contact.social.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 p-1.5 rounded-full hover:bg-gray-800"
            aria-label={social.name}
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
