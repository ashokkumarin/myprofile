import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ashok Kumar - Engineering Leader',
  description: 'Engineering leader with 23+ years of experience delivering enterprise-scale SaaS & on-premises products across Healthcare, EHS, and Test & Measurement domains.',
  keywords: 'engineering leader, software development, healthcare technology, team building, digital transformation',
  authors: [{ name: 'Ashok Kumar' }],
  openGraph: {
    title: 'Ashok Kumar - Engineering Leader',
    description: '23+ years of experience in enterprise software development and team leadership',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashok Kumar - Engineering Leader',
    description: '23+ years of experience in enterprise software development and team leadership',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}
