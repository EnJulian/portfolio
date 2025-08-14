import { Space_Grotesk, Montserrat, Archivo } from 'next/font/google'
import localFont from 'next/font/local'

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

// Terminus TTF font for monospace/terminal-like text
export const terminusFont = localFont({
  src: [
    {
      path: '../../public/fonts/TerminusTTF-4.49.3.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TerminusTTF-Bold-4.49.3.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TerminusTTF-Italic-4.49.3.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TerminusTTF-Bold-Italic-4.49.3.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-terminus',
  display: 'swap',
})
