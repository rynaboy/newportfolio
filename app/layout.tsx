import type { Metadata } from 'next'
import './globals.css' 

export const metadata: Metadata = {
  title: 'MOL RYNA Manager | Developer',
  description: 'Full Stack Developer, IT Manager, Project Manager, UX/UI Designer, Mobile Developer, and IT Support with over 5 years of experience. Skilled in Laravel, Next.js, React Native, Flutter, TypeScript, Cpanel, PostgreSQL, Git, RawSQL, and Sqlite.',
  openGraph: {
    title: 'MOL RYNA Manager | Developer',
    description: 'Full Stack Developer, IT Manager, Project Manager, UX/UI Designer, Mobile Developer, and IT Support with over 5 years of experience. Skilled in Laravel, Next.js, React Native, Flutter, TypeScript, Cpanel, PostgreSQL, Git, RawSQL, and Sqlite.',
    type: 'website',
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
      <body>{children}</body>
    </html>
  )
}
