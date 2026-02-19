import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdullah Alam Khan | Software Developer',
  description: 'Full-stack developer passionate about building elegant, performant web applications and contributing to open source.',
  keywords: ['developer', 'portfolio', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  authors: [{ name: 'Abdullah Alam Khan' }],
  openGraph: {
    title: 'Abdullah Alam Khan | Software Developer',
    description: 'Full-stack developer passionate about building elegant, performant web applications and contributing to open source.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0d0d',
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
