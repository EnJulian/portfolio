# Project Structure

## Root Directory
- `src/` - Main source code
- `public/` - Static assets (images, fonts, favicon, resume PDF)
- `.next/` - Next.js build output
- `node_modules/` - Dependencies

## Source Structure (`src/`)

### App Directory (`src/app/`)
Uses Next.js 13+ App Router structure:
- `layout.tsx` - Root layout with fonts, metadata, global providers
- `page.tsx` - Root page (redirects to /about)
- `globals.css` - Global styles and CSS variables
- `fonts.ts` - Font configurations
- Route folders:
  - `about/` - About page
  - `contact/` - Contact page  
  - `projects/` - Projects showcase
  - `tools/` - Tools page
  - `work/` - Work experience
  - `api/health/` - Health check endpoint

### Components (`src/components/`)
- `ui/` - Reusable UI components (shadcn/ui based)
- `icons/` - Custom icon components
- `nier-ui/` - Specialized UI components
- Layout components: `site-layout.tsx`, `top-navigation.tsx`, `side-navigation.tsx`
- Feature components: `command-menu.tsx`, `project-card.tsx`, `floating-button.tsx`

### Data (`src/data/`)
- `resume-data.tsx` - Centralized resume/portfolio data

### Utilities (`src/lib/`)
- `utils.ts` - Utility functions (cn for className merging)

### Hooks (`src/hooks/`)
- Custom React hooks for state management

### Images (`src/images/`)
- `logos/` - Company and project logos
- `comet/` - Project-specific images

## Key Conventions

### File Naming
- React components: PascalCase (e.g., `SiteLayout.tsx`)
- Pages: lowercase with hyphens (e.g., `about/page.tsx`)
- Utilities: kebab-case (e.g., `use-mobile-menu.tsx`)

### Import Patterns
- Use `@/` alias for src imports
- Relative imports for same-directory files
- Group imports: external libraries, internal components, types

### Component Structure
- UI components follow shadcn/ui patterns
- Use `cn()` utility for conditional classes
- Prefer composition over inheritance
- Export components as default when single export

### Data Management
- Centralized data in `resume-data.tsx`
- Type-safe with TypeScript
- Structured for easy maintenance and updates