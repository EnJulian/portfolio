"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { focusRing } from "@/lib/focus-ring";

interface MobileCTAProps {
  href: string;
  text: string;
  icon?: "arrow" | "download";
  download?: boolean;
}

export function MobileCTA({
  href,
  text,
  icon = "arrow",
  download = false,
}: MobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { isMenuOpen } = useMobileMenu();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);

      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsVisible(true);
        }
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const ButtonContent = () => (
    <>
      {text}
      {icon === "download" ? (
        <Download size={16} className="motion-safe:animate-pulse-horizontal" />
      ) : (
        <ArrowRight size={16} className="motion-safe:animate-pulse-horizontal" />
      )}
    </>
  );

  const buttonClassName = `flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background py-3.5 px-5 text-base font-medium text-foreground shadow-lg shadow-background/50 transition-all hover:bg-secondary active:scale-[0.98] sm:text-sm ${focusRing}`;

  return (
    <div
      className={`fixed bottom-4 left-0 right-0 z-30 px-4 transition-all duration-500 sm:bottom-6 md:hidden ${
        isVisible && !isMenuOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      {download ? (
        <a href={href} download className={buttonClassName}>
          <ButtonContent />
        </a>
      ) : (
        <Link href={href} className={buttonClassName}>
          <ButtonContent />
        </Link>
      )}
    </div>
  );
}
