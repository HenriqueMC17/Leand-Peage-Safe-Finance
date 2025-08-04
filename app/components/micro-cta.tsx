"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Eye, BarChart3 } from "lucide-react"
import Link from "next/link"

interface MicroCTAProps {
  type: "test" | "demo" | "compare" | "practice"
  className?: string
}

export default function MicroCTA({ type, className }: MicroCTAProps) {
  const ctaConfig = {
    test: {
      text: "Teste agora gratuitamente",
      subtext: "Sem cartão de crédito",
      icon: Play,
      href: "/cliente",
      variant: "default" as const,
    },
    demo: {
      text: "Veja na prática",
      subtext: "Demo interativa",
      icon: Eye,
      href: "/demo",
      variant: "outline" as const,
    },
    compare: {
      text: "Confira o comparativo",
      subtext: "Veja todos os planos",
      icon: BarChart3,
      href: "#pricing",
      variant: "outline" as const,
    },
    practice: {
      text: "Experimente agora",
      subtext: "Teste por 14 dias",
      icon: ArrowRight,
      href: "/cliente",
      variant: "default" as const,
    },
  }

  const config = ctaConfig[type]
  const Icon = config.icon

  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <div className="text-center">
        <Button asChild variant={config.variant} className="rounded-full mb-2">
          <Link href={config.href}>
            <Icon className="mr-2 size-4" />
            {config.text}
          </Link>
        </Button>
        <p className="text-xs text-muted-foreground">{config.subtext}</p>
      </div>
    </div>
  )
}
