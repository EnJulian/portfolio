"use client";

import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume-data";
import { useMobileMenu } from "@/hooks/use-mobile-menu";

interface MobileNavProps {
  navItems: Array<{ name: string; href: string }>;
}

export function MobileNav({ navItems }: MobileNavProps) {
  const pathname = usePathname();
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();

  // Close menu when pathname changes (navigation occurs)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);
  
  // Handle menu toggle with a dedicated function to ensure it works properly
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [setIsMenuOpen, isMenuOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-50 md:hidden flex flex-col"
          >
            {/* Header with close button */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-800">
              <h2 className="text-white font-medium text-lg">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <motion.nav
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex-1 flex flex-col justify-center px-6"
            >
              <ul className="space-y-8">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.2 }}
                      className="border-b border-gray-800 pb-6"
                    >
                      <Link
                        href={item.href}
                        className={`text-xl font-medium transition-colors flex items-center ${
                          isActive
                            ? "text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                        onClick={() => {
                          // Ensure menu closes on navigation
                          setTimeout(() => setIsMenuOpen(false), 10);
                        }}
                      >
                        <span className={`mr-3 text-xl ${isActive ? "text-white" : "text-gray-600"}`}>
                          {isActive ? "•" : "◦"}
                        </span>
                        {item.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>

            {/* Download CV Button */}
            <div className="px-6 py-8 border-t border-gray-800">
              <a
                href={RESUME_DATA.resumeUrl}
                download
                className="flex items-center justify-center gap-2 w-full bg-white text-black font-medium py-4 rounded-md hover:bg-gray-200 transition-colors active:scale-[0.98]"
                onClick={() => {
                  // Ensure menu closes when downloading CV
                  setTimeout(() => setIsMenuOpen(false), 10);
                }}
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
