import type { Metadata } from 'next'
import './globals.css' 
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'MOL RYNA Manager | Developer',
  description: 'Full Stack Developer, IT Manager, Project Manager, UX/UI Designer, Mobile Developer, and IT Support with over 5 years of experience. Skilled in Laravel, Next.js, React Native, Flutter, TypeScript, Cpanel, PostgreSQL, Git, RawSQL, and Sqlite.',
  openGraph: {
    title: 'MOL RYNA Manager | Developer',
    description: 'Full Stack Developer, IT Manager, Project Manager, UX/UI Designer, Mobile Developer, and IT Support with over 5 years of experience. Skilled in Laravel, Next.js, React Native, Flutter, TypeScript, Cpanel, PostgreSQL, Git, RawSQL, and Sqlite.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOL RYNA Manager | Developer',
    description: 'Full Stack Developer, IT Manager, Project Manager, UX/UI Designer, Mobile Developer, and IT Support with over 5 years of experience. Skilled in Laravel, Next.js, React Native, Flutter, TypeScript, Cpanel, PostgreSQL, Git, RawSQL, and Sqlite.',
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
      <body>
        {children}
        <Toaster position="top-right" richColors closeButton />
        
        {/* SVG Gradient definitions for icons */}
        <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f9ce34" />
              <stop offset="50%" stopColor="#ee2a7b" />
              <stop offset="100%" stopColor="#6228d7" />
            </linearGradient>
          </defs>
        </svg>
      </body>
    </html>
  )
}
