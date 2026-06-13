"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { MailIcon } from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { mobileCtaSafeAreaClassName } from "@/components/mobile-cta";
import { ThemeToggle } from "@/components/theme-toggle";
import { focusRing } from "@/lib/focus-ring";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer
      className={cn(
        "pt-4 text-sm text-muted-foreground sm:pt-5 md:py-4",
        mobileCtaSafeAreaClassName,
        className,
      )}
    >
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-5 text-center md:mb-0 md:text-left">
          <p>
            © {new Date().getFullYear()} {RESUME_DATA.name}.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:justify-end md:gap-3">
          <ThemeToggle />

          <a
            href={`mailto:${RESUME_DATA.contact.email}`}
            className={`p-2 text-muted-foreground transition-colors hover:text-foreground sm:p-1.5 ${focusRing}`}
            aria-label={`Email: ${RESUME_DATA.contact.email}`}
          >
            <MailIcon className="h-5 w-5 md:h-4 md:w-4" />
          </a>

          <a
            href={`tel:${RESUME_DATA.contact.tel}`}
            className={`p-2 text-muted-foreground transition-colors hover:text-foreground sm:p-1.5 ${focusRing}`}
            aria-label={`Phone: ${RESUME_DATA.contact.tel}`}
          >
            <PhoneIcon className="h-5 w-5 md:h-4 md:w-4" />
          </a>

          <a
            href={RESUME_DATA.locationLink}
            target="_blank"
            className={`p-2 text-muted-foreground transition-colors hover:text-foreground sm:p-1.5 ${focusRing}`}
            aria-label={`Location: ${RESUME_DATA.location}`}
            rel="noopener noreferrer"
          >
            <LocationIcon className="h-5 w-5 md:h-4 md:w-4" />
          </a>

          {RESUME_DATA.contact.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 text-muted-foreground transition-colors hover:text-foreground sm:p-1.5 ${focusRing}`}
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5 md:h-4 md:w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
