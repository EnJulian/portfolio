const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          elevated: "hsl(var(--surface-elevated))",
          muted: "hsl(var(--surface-muted))",
        },
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
          muted: "hsl(var(--brand-muted))",
        },
        link: "hsl(var(--link))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-body)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
        accent: ["var(--font-accent)", ...fontFamily.sans],
        mono: ["var(--font-mono)", "monospace"],
        project: ["var(--font-project)", "monospace"],
      },
      fontSize: {
        xs: ["0.763875rem", { lineHeight: "1.0185rem" }],
        sm: ["0.891188rem", { lineHeight: "1.273125rem" }],
        base: ["1.0185rem", { lineHeight: "1.52775rem" }],
        lg: ["1.145813rem", { lineHeight: "1.782375rem" }],
        xl: ["1.273125rem", { lineHeight: "1.782375rem" }],
        "2xl": ["1.52775rem", { lineHeight: "2.037rem" }],
        "3xl": ["1.909688rem", { lineHeight: "2.291625rem" }],
        "4xl": ["2.291625rem", { lineHeight: "2.291625rem" }],
        "5xl": ["3.0555rem", { lineHeight: "1" }],
        "6xl": ["3.819375rem", { lineHeight: "1" }],
        "7xl": ["4.58325rem", { lineHeight: "1" }],
        "8xl": ["6.111rem", { lineHeight: "1" }],
        "9xl": ["8.148rem", { lineHeight: "1" }],
        "header-xs": ["0.75rem", { lineHeight: "1rem" }],
        "header-sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "header-base": ["1rem", { lineHeight: "1.5rem" }],
        "header-lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "header-xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "header-2xl": ["1.5rem", { lineHeight: "2rem" }],
        "header-3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pulse-horizontal": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-horizontal": "pulse-horizontal 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
