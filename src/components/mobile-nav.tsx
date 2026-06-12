"use client";

import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume-data";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { NavLink } from "@/components/ui/nav-link";
import { focusRing } from "@/lib/focus-ring";

interface MobileNavProps {
  navItems: Array<{ name: string; href: string }>;
}

export function MobileNav({ navItems }: MobileNavProps) {
  const pathname = usePathname();
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [setIsMenuOpen, isMenuOpen]);

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

  const overlayMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
      };

  const navMotion = prefersReducedMotion
    ? {}
    : {
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { delay: 0.1, duration: 0.2 },
      };

  const itemMotion = (index: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.1 + index * 0.05, duration: 0.2 },
        };

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden ${focusRing}`}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            {...overlayMotion}
            className="fixed inset-0 z-50 flex flex-col bg-background md:hidden"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <h2 className="text-header-lg font-medium text-foreground">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className={`p-2 text-muted-foreground transition-colors hover:text-foreground ${focusRing}`}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <motion.nav
              {...navMotion}
              className="flex flex-1 flex-col justify-center px-6"
            >
              <ul className="space-y-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    {...itemMotion(index)}
                    className="border-b border-border pb-6"
                  >
                    <NavLink
                      href={item.href}
                      isActive={pathname === item.href}
                      variant="mobile"
                      onClick={() => {
                        setTimeout(() => setIsMenuOpen(false), 10);
                      }}
                    >
                      {item.name}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <div className="border-t border-border px-6 py-8">
              <a
                href={RESUME_DATA.resumeUrl}
                download
                className={`flex w-full items-center justify-center gap-2 rounded-md bg-primary py-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.98] ${focusRing}`}
                onClick={() => {
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
