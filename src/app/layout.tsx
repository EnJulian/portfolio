import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inconsolata } from "next/font/google";
import { nimbusSans, jakartaSans, mitchellFont } from './fonts';
import { SiteLayout } from "@/components/site-layout";
import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import FloatingButton from "@/components/floating-button";
import { ToastProvider } from "@/components/ui/toast";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Julian Amoah",
  description: "Portfolio and personal website of Julian A. Amoah",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest'
      }
    ]
  }
};

// Define a variable for the font
const fontSansClassName = "font-sans";

// Initialize Inconsolata font for specific elements
const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inconsolata",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSansClassName} ${inconsolata.variable} ${nimbusSans.variable} ${jakartaSans.variable} ${mitchellFont.variable}`}>
      <head>
        {/* Force favicon reload by adding version parameter */}
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" href="/favicon-96x96.png?v=2" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest?v=2" />
      </head>
      <body>
        <ToastProvider>
          <SiteLayout>
            {children}
          </SiteLayout>

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
      </body>
    </html>
  );
}
