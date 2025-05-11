"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { MailIcon } from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { LocationIcon } from "@/components/icons/LocationIcon";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`py-6 md:py-8 text-sm text-gray-600 ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>© {new Date().getFullYear()} {RESUME_DATA.name}.</p>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-3">
          <a 
            href={`mailto:${RESUME_DATA.contact.email}`} 
            className="text-gray-500 hover:text-white transition-colors p-1.5"
            aria-label={`Email: ${RESUME_DATA.contact.email}`}
          >
            <MailIcon className="h-5 w-5 md:h-4 md:w-4" />
          </a>
          
          <a 
            href={`tel:${RESUME_DATA.contact.tel}`} 
            className="text-gray-500 hover:text-white transition-colors p-1.5"
            aria-label={`Phone: ${RESUME_DATA.contact.tel}`}
          >
            <PhoneIcon className="h-5 w-5 md:h-4 md:w-4" />
          </a>
          
          <a 
            href={RESUME_DATA.locationLink} 
            target="_blank" 
            className="text-gray-500 hover:text-white transition-colors p-1.5"
            aria-label={`Location: ${RESUME_DATA.location}`}
          >
            <LocationIcon className="h-5 w-5 md:h-4 md:w-4" />
          </a>
          
          {RESUME_DATA.contact.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors p-1.5"
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