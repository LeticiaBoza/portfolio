import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // matches the CSS var used in globals.css
  display: "swap",
})

export const metadata: Metadata = {
  title: "Letícia Boza | Portfólio",
  description: "Portfólio profissional de Letícia Boza Assumpção",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
