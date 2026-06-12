# Portfolio (web-cv)

Personal portfolio site built with Next.js 14 App Router, Tailwind CSS, and shadcn/ui primitives.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3 + CSS variables (design tokens)
- **UI:** shadcn/ui (Radix primitives + CVA variants)
- **Animation:** Framer Motion (nav, projects), tailwindcss-animate
- **Theme:** next-themes (dark default; light tokens defined, toggle in footer)

## Project Structure

```
src/
  app/           # Routes and global styles
  components/    # Feature and layout components
  components/ui/ # Design system primitives
  data/          # Resume content (resume-data.tsx)
  hooks/         # Shared React hooks
  lib/           # Utilities (cn)
```

## Design Tokens

Colors are HSL CSS variables in `src/app/globals.css`. Use semantic Tailwind classes — never hardcode `gray-*` or `bg-black` in new code.

| Token | Tailwind | Usage |
|-------|----------|-------|
| `--background` | `bg-background` | Page shell |
| `--foreground` | `text-foreground` | Primary text |
| `--muted-foreground` | `text-muted-foreground` | Secondary text |
| `--card` | `bg-card` | Card surfaces |
| `--secondary` | `bg-secondary` | Chips, elevated surfaces |
| `--surface-elevated` | `bg-surface-elevated` | Dropdowns, nested surfaces |
| `--border` | `border-border` | All borders |
| `--brand` | `text-brand`, `bg-brand` | Accent (success, highlights) |
| `--link` | `.text-link` | Underlined inline links |

Theme blocks: `:root` = light, `.dark` = dark (default via ThemeProvider).

## Typography

| Role | Font | Class / Tailwind |
|------|------|------------------|
| Body | Space Grotesk | `font-sans` (default on body) |
| Display headings | Archivo | `font-display` |
| Mobile name accent | Montserrat | `font-accent` |
| Project titles | Terminus | `font-project`, `.terminus-project` |
| Mono / badges | Inconsolata | `font-mono` |

Scale: `text-header-xs` through `text-header-3xl` for headings; standard `text-sm` / `text-base` for body.

## Component Conventions

- **Pages** compose layout + domain components; avoid inline color classes.
- **Primitives** live in `src/components/ui/` — extend via CVA variants.
- **Domain components:** `NavLink`, `SkillChip`, `SurfaceCard`, `SectionHeading`, `ProjectCard`, `ResumePreviewDialog`.
- **Links:** Use `.text-link` for underlined content links; use `NavLink` for navigation.

## Adding Light Mode

Light tokens are already defined under `:root`. To ship light mode:

1. Expose `ThemeToggle` in nav or footer (component exists, currently in footer).
2. Visual QA accent effects (`.button-highlight`, `.glass-shine-effect`, `.comet-glow`).
3. Update `theme-color` meta (handled by `ThemeColorMeta`).

## Scripts

```bash
npm run dev      # Build + dev server
npm run build    # Production build
npm run lint     # ESLint
npm run test     # Vitest smoke tests
```

## Environment

Runs on Node >= 18.17. WSL2/Ubuntu compatible.
