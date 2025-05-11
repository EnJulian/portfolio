# Mitchell Hashimoto Font Implementation

## Current Implementation
Currently, we're using Google's Archivo Black font as a temporary replacement for Mitchell Hashimoto's Nimbus Sans Bold Extended font. This is configured in `src/app/fonts.ts`.

## Using the Actual Nimbus Sans Bold Extended Font

If you want to use the exact Nimbus Sans Bold Extended font that Mitchell Hashimoto uses:

1. Purchase or obtain the "Nimbus Sans Bold Extended" font from a font provider:
   - Adobe Fonts
   - MyFonts
   - FontShop
   - URW Type Foundry (original creator of Nimbus Sans)

2. Convert it to woff2 format if needed

3. Save the font file in this directory

4. Update the `fonts.ts` file to use the local font:

```typescript
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import localFont from 'next/font/local'

// Other font definitions...

// Mitchell Hashimoto's website font - Nimbus Sans Bold Extended
export const mitchellFont = localFont({
  src: '../fonts/your-font-filename.woff2', // Update this path
  variable: '--font-mitchell',
  display: 'swap',
})
```

5. Make sure the path is correct relative to the location of the fonts.ts file