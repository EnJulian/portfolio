import { Plus_Jakarta_Sans, Inter, Archivo_Black } from 'next/font/google'

export const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jakarta-sans',
  display: 'swap',
})

export const nimbusSans = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nimbus-sans',
  display: 'swap',
})

// Temporary replacement for Mitchell Hashimoto's Nimbus Sans Bold Extended font
// Using Archivo Black which has similar characteristics to Nimbus Sans Bold Extended
export const mitchellFont = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mitchell',
  display: 'swap',
})
