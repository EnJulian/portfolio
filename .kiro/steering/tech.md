# Technology Stack

## Framework & Runtime
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment

## Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **Radix UI** - Headless UI components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **CSS Variables** - For theming (HSL color system)

## Key Dependencies
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional CSS classes
- **cmdk** - Command menu component
- **vaul** - Drawer component
- **@vercel/analytics** - Analytics integration

## Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## Common Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality
- Prettier is configured with Tailwind plugin for class sorting
- ESLint extends Next.js configuration
- TypeScript strict mode enabled

## Path Aliases
- `@/*` maps to `./src/*` for clean imports

## Font Configuration
- Custom fonts loaded via Next.js font optimization
- **Primary Fonts**: Nimbus Sans, Jakarta Sans, and Mitchell fonts for main content
- **Terminus TTF**: Used exclusively for project names in the projects page
- Available CSS classes:
  - `jakarta-sans` - Jakarta Sans for body text
  - `nimbus` - Nimbus Sans for navigation and headers
  - `mitchell-font` - Mitchell font for main name/branding
  - `terminus-project` - Terminus for project titles only
- Inconsolata for monospace elements