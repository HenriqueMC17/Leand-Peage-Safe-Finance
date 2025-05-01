"use client"

import type React from "react"

import { useEffect } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
  backUrl?: string
  backLabel?: string
  preserveScrollPosition?: boolean
}

export default function PageLayout({
  children,
  title,
  description,
  backUrl = "/",
  backLabel = "Voltar para a página inicial",
  preserveScrollPosition = false,
}: PageLayoutProps) {
  // Scroll to top on page load, unless preserveScrollPosition is true
  useEffect(() => {
    if (!preserveScrollPosition) {
      window.scrollTo(0, 0)
    }
  }, [preserveScrollPosition])

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (preserveScrollPosition) {
      // Don't do anything special, let the browser handle it
      return
    }

    // If not preserving scroll, prevent default and handle navigation manually
    if (backUrl === "/") {
      e.preventDefault()
      window.location.href = "/"
    }
  }

  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <Link
        href={backUrl}
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
        onClick={handleBackClick}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        {backLabel}
      </Link>

      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      {description && <p className="text-muted-foreground mb-12 max-w-2xl">{description}</p>}

      {children}
    </div>
  )
}
