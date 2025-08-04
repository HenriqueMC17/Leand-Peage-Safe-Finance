"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react"

interface OnboardingStep {
  id: number
  title: string
  description: string
  tip: string
  action?: string
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    title: "Bem-vindo à Safe Finance!",
    description: "Vamos configurar sua conta em poucos passos simples.",
    tip: "Este processo leva apenas 2 minutos",
    action: "Começar",
  },
  {
    id: 2,
    title: "Conecte suas contas",
    description: "Importe suas transações automaticamente ou adicione manualmente.",
    tip: "Você pode pular este passo e fazer depois",
    action: "Conectar contas",
  },
  {
    id: 3,
    title: "Configure suas categorias",
    description: "Personalize as categorias de gastos de acordo com seu estilo de vida.",
    tip: "Temos categorias pré-definidas para facilitar",
    action: "Configurar",
  },
  {
    id: 4,
    title: "Defina seu primeiro orçamento",
    description: "Estabeleça limites de gastos para manter suas finanças organizadas.",
    tip: "Comece com valores aproximados, você pode ajustar depois",
    action: "Criar orçamento",
  },
  {
    id: 5,
    title: "Tudo pronto!",
    description: "Sua conta está configurada. Agora você pode começar a usar todos os recursos.",
    tip: "Explore o dashboard e descubra todas as funcionalidades",
    action: "Ir para dashboard",
  },
]

interface InteractiveOnboardingProps {
  onComplete?: () => void
}

export default function InteractiveOnboarding({ onComplete }: InteractiveOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

  const handleNext = () => {
    setCompletedSteps(new Set([...completedSteps, currentStep]))

    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete?.()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    onComplete?.()
  }

  const step = onboardingSteps[currentStep]
  const progress = ((currentStep + 1) / onboardingSteps.length) * 100

  return (
    <div className="max-w-md mx-auto">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Header com progresso */}
          <div className="p-6 pb-4">
            <div className="flex justify-between items-center mb-4">
              <Badge variant="outline">
                Passo {currentStep + 1} de {onboardingSteps.length}
              </Badge>
              <Button variant="ghost" size="sm" onClick={handleSkip}>
                Pular
              </Button>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Conteúdo do passo */}
          <div className="px-6 pb-6">
            <div className="text-center mb-6">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {completedSteps.has(currentStep) ? (
                  <CheckCircle className="size-8 text-primary" />
                ) : (
                  <span className="text-2xl font-bold text-primary">{step.id}</span>
                )}
              </div>

              <h2 className="text-xl font-bold mb-2">{step.title}</h2>
              <p className="text-muted-foreground mb-4">{step.description}</p>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">💡 {step.tip}</p>
              </div>
            </div>

            {/* Ações */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="rounded-full bg-transparent"
              >
                <ChevronLeft className="mr-1 size-4" />
                Anterior
              </Button>

              <Button onClick={handleNext} className="rounded-full">
                {step.action}
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </div>
          </div>

          {/* Indicadores de passos */}
          <div className="flex justify-center gap-2 p-4 bg-muted/30">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`size-2 rounded-full transition-colors ${
                  index === currentStep ? "bg-primary" : completedSteps.has(index) ? "bg-green-500" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
