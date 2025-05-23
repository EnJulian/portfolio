import { Space_Grotesk, Montserrat, Archivo } from 'next/font/google'

export const jakartaSans = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta-sans',
  display: 'swap',
})

export const nimbusSans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nimbus-sans',
  display: 'swap',
})

// Using Archivo for headings and important text elements
export const mitchellFont = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mitchell',
  display: 'swap',
})
