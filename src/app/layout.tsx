import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { inconsolataFont, nimbusSans, jakartaSans, mitchellFont, terminusFont } from './fonts';
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
      { url: '/en-round.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/en-round.svg', type: 'image/svg+xml' }
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSansClassName} ${inconsolataFont.variable} ${nimbusSans.variable} ${jakartaSans.variable} ${mitchellFont.variable} ${terminusFont.variable}`}>
      <head>
        <link rel="icon" href="/en-round.svg?v=4" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/en-round.svg?v=4" />
        <link rel="manifest" href="/site.webmanifest?v=4" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
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
