import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://leandpeage.com/safe-finance"),
  title: {
    default: "Safe Finance - Organize suas finanças",
    template: "%s | Safe Finance",
  },
  description: "Organize suas finanças com a Safe Finance, um aplicativo intuitivo e prático para gestão financeira.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://leandpeage.com/safe-finance",
    siteName: "Safe Finance",
    images: [
      {
        url: "https://leandpeage.com/safe-finance/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Safe Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe Finance - Organize suas finanças",
    description: "Organize suas finanças com a Safe Finance, um aplicativo intuitivo e prático para gestão financeira.",
    images: ["https://leandpeage.com/safe-finance/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}


import './globals.css'