import localFont from "next/font/local";

export const accentFont = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/montserrat/files/montserrat-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-accent",
  display: "swap",
});

export const bodyFont = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const displayFont = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/archivo/files/archivo-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/archivo/files/archivo-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/archivo/files/archivo-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/archivo/files/archivo-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const monoFont = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/inconsolata/files/inconsolata-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inconsolata/files/inconsolata-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inconsolata/files/inconsolata-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inconsolata/files/inconsolata-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const projectFont = localFont({
  src: [
    {
      path: "../../public/fonts/TerminusTTF-4.49.3.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TerminusTTF-Bold-4.49.3.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/TerminusTTF-Italic-4.49.3.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/TerminusTTF-Bold-Italic-4.49.3.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-project",
  display: "swap",
});
