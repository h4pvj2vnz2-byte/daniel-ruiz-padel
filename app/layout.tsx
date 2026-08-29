import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'Daniel Ruiz · Padel Coach in Kuala Lumpur',
  description:
    'Private, duo and group padel lessons in Kuala Lumpur with Daniel Ruiz — PadelMBA certified, coached at Arenal Academy (Belgium) and BPXsport (Spain). Book a session.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B1220',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${anton.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
