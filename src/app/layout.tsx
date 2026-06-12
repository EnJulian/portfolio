import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import {
  accentFont,
  bodyFont,
  displayFont,
  monoFont,
  projectFont,
} from "./fonts";
import { SiteLayout } from "@/components/site-layout";
import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import FloatingButton from "@/components/floating-button";
import { ToastProvider } from "@/components/ui/toast";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeColorMeta } from "@/components/theme-color-meta";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Julian Amoah",
  description: "Portfolio and personal website of Julian A. Amoah",
  icons: {
    icon: [{ url: "/en-round.svg", type: "image/svg+xml" }],
    apple: [{ url: "/en-round.svg", type: "image/svg+xml" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark font-sans ${bodyFont.variable} ${displayFont.variable} ${accentFont.variable} ${monoFont.variable} ${projectFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/en-round.svg?v=4" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/en-round.svg?v=4" />
        <link rel="manifest" href="/site.webmanifest?v=4" />
      </head>
      <body>
        <ThemeProvider>
          <ThemeColorMeta />
          <ToastProvider>
            <SiteLayout>{children}</SiteLayout>

            <CommandMenu
              links={[
                {
                  url: RESUME_DATA.personalWebsiteUrl,
                  title: "Personal Website",
                },
                ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
                  url: socialMediaLink.url,
                  title: socialMediaLink.name,
                })),
              ]}
            />

            <FloatingButton />
            <Analytics />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
