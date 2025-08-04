"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface PersonalizedContentProps {
  userType?: string
}

export default function PersonalizedContent({ userType }: PersonalizedContentProps) {
  const [currentType, setCurrentType] = useState<string>("individual")

  useEffect(() => {
    if (userType) {
      setCurrentType(userType)
    } else {
      const savedType = localStorage.getItem("user-type")
      if (savedType) {
        setCurrentType(savedType)
      }
    }
  }, [userType])

  const contentMap = {
    individual: {
      hero: {
        title: "Organize suas finanças pessoais com facilidade",
        subtitle: "Controle seus gastos, estabeleça metas e construa seu futuro financeiro",
        cta: "Comece sua jornada financeira",
      },
      benefits: [
        "Controle total dos seus gastos pessoais",
        "Metas de economia personalizadas",
        "Relatórios simples e claros",
        "Alertas de vencimento de contas",
      ],
      testimonial: {
        text: "Consegui economizar R$ 500 por mês só organizando meus gastos!",
        author: "Maria Silva, 28 anos",
      },
    },
    family: {
      hero: {
        title: "Una sua família em torno de objetivos financeiros",
        subtitle: "Planeje juntos, economizem juntos e realizem sonhos em família",
        cta: "Organize as finanças da família",
      },
      benefits: [
        "Orçamento familiar compartilhado",
        "Metas para toda a família",
        "Controle de mesadas e gastos dos filhos",
        "Planejamento para grandes objetivos",
      ],
      testimonial: {
        text: "Finalmente conseguimos juntar dinheiro para a casa própria!",
        author: "João e Ana Santos, casal com 2 filhos",
      },
    },
    business: {
      hero: {
        title: "Simplifique a gestão financeira do seu negócio",
        subtitle: "Controle fluxo de caixa, organize receitas e despesas empresariais",
        cta: "Profissionalize suas finanças",
      },
      benefits: [
        "Separação clara entre pessoa física e jurídica",
        "Controle de fluxo de caixa empresarial",
        "Relatórios para contador",
        "Gestão de fornecedores e clientes",
      ],
      testimonial: {
        text: "Meu negócio cresceu 40% depois que organizei as finanças!",
        author: "Carlos Mendes, MEI",
      },
    },
  }

  const content = contentMap[currentType as keyof typeof contentMap]

  return (
    <div className="space-y-8">
      {/* Hero Personalizado */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-8 text-center">
          <Badge className="mb-4" variant="secondary">
            {currentType === "individual" && "Pessoa Física"}
            {currentType === "family" && "Família"}
            {currentType === "business" && "MEI/Empresa"}
          </Badge>
          <h2 className="text-2xl font-bold mb-4">{content.hero.title}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{content.hero.subtitle}</p>
          <Button asChild className="rounded-full">
            <Link href="/cliente">{content.hero.cta}</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Benefícios Personalizados */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Benefícios para você:</h3>
            <ul className="space-y-2">
              {content.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="size-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Depoimento:</h3>
            <blockquote className="text-sm italic mb-3">"{content.testimonial.text}"</blockquote>
            <cite className="text-xs text-muted-foreground">— {content.testimonial.author}</cite>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
