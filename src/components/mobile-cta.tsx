"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useMobileMenu } from "@/hooks/use-mobile-menu";

interface MobileCTAProps {
  href: string;
  text: string;
  icon?: "arrow" | "download";
  download?: boolean;
}

export function MobileCTA({ href, text, icon = "arrow", download = false }: MobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { isMenuOpen } = useMobileMenu();

  // Show the CTA button after a short delay, regardless of scroll position
  useEffect(() => {
    const timer = setTimeout(() => {
      // Make the button visible by default after the delay
      setIsVisible(true);

      // Also check scroll position to ensure it's visible
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsVisible(true);
        }
      };

      // Check initial scroll position
      handleScroll();

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, 500); // Show after 0.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Render different elements based on whether it's a download or navigation link
  const ButtonContent = () => (
    <>
      {text}
      {icon === "download" ? (
        <Download size={16} className="animate-pulse-horizontal" />
      ) : (
        <ArrowRight size={16} className="animate-pulse-horizontal" />
      )}
    </>
  );

  const buttonClassName = "flex items-center justify-center gap-2 w-full bg-black text-white border border-gray-800 font-medium py-3.5 px-5 rounded-md shadow-lg shadow-black/50 hover:bg-gray-900 hover:text-white transition-all active:scale-[0.98] text-base sm:text-sm";

  return (
    <div 
      className={`fixed bottom-4 sm:bottom-4 sm:bottom-6 left-0 right-0 z-30 px-4 md:hidden transition-all duration-500 ${
        isVisible && !isMenuOpen
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      {download ? (
        <a 
          href={href}
          download
          className={buttonClassName}
        >
          <ButtonContent />
        </a>
      ) : (
        <Link 
          href={href}
          className={buttonClassName}
        >
          <ButtonContent />
        </Link>
      )}
    </div>
  );
}
