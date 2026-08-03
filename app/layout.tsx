import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'MOL RYNA Manager | Developer | 096 98 94 789',
  description: 'Full Stack Developer, IT Manager, Project Manager, UX/UI Designer, Mobile Developer, and IT Support with over 5 years of experience. Skilled in Laravel, Next.js, React Native, Flutter, TypeScript, Cpanel, PostgreSQL, Git, RawSQL, and Sqlite.',
  authors: [{ name: 'MOL RYNA', url: 'https://github.com/rynaboy' }],
  creator: 'MOL RYNA',
  publisher: 'MOL RYNA',
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
  other: {
    email: 'rynaboy22@gmail.com',
    phone: '+855 96 98 94 789',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'MOL RYNA',
  jobTitle: 'Full Stack Developer & IT Manager',
  email: 'rynaboy22@gmail.com',
  telephone: '+855 96 98 94 789',
  url: 'https://github.com/rynaboy',
  sameAs: [
    'https://www.linkedin.com/in/mol-ryna-2296b51a1/',
    'https://www.facebook.com/share/1GNoN5TqAh/?mibextid=wwXIfr',
    'https://www.instagram.com/mol.ryna?igsh=YmNmYzFxbm81NTF3&utm_source=qr',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
