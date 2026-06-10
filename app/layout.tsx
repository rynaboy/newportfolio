import type { Metadata } from 'next'
import './globals.css' 

export const metadata: Metadata = {
  title: 'MOL RYNA Portfolio',
  description: 'Created with Next.js by MOL RYNA',
  generator: 'Next.js',
  openGraph: {
    title: 'MOL RYNA Portfolio',
    description: 'Created with Next.js by MOL RYNA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOL RYNA Portfolio',
    description: 'Created with Next.js by MOL RYNA',
  },
  icons: {
    icon: '/molryna.ico',
    shortcut: '/molryna.ico',
    apple: '/molryna.ico',
  },
}
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
