import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'evoFlow™',
  description: '🧞‍♀️ Your personal workout AI trainer!',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <span className="text-1xl absolute bottom-5 right-5">
          🧞‍♀️ evo<span className="text-green-500 font-semibold">Flow</span>™
        </span>
        {children}
      </body>
    </html>
  )
}
