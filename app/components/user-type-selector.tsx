"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { User, Users, Building2 } from "lucide-react"

interface UserTypeProps {
  onTypeSelect?: (type: string) => void
  className?: string
}

export default function UserTypeSelector({ onTypeSelect, className }: UserTypeProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  useEffect(() => {
    // Verificar se já existe uma preferência salva
    const savedType = localStorage.getItem("user-type")
    if (savedType) {
      setSelectedType(savedType)
      onTypeSelect?.(savedType)
    }
  }, [onTypeSelect])

  const handleTypeSelect = (type: string) => {
    setSelectedType(type)
    localStorage.setItem("user-type", type)
    onTypeSelect?.(type)
  }

  const userTypes = [
    {
      id: "individual",
      title: "Pessoa Física",
      description: "Controle suas finanças pessoais",
      icon: User,
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      id: "family",
      title: "Família",
      description: "Organize as finanças familiares",
      icon: Users,
      color: "bg-green-500/10 text-green-600 border-green-200",
    },
    {
      id: "business",
      title: "MEI/Empresa",
      description: "Gerencie finanças empresariais",
      icon: Building2,
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
  ]

  return (
    <div className={className}>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">Qual é o seu perfil?</h3>
        <p className="text-sm text-muted-foreground">Personalize sua experiência escolhendo seu tipo de usuário</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {userTypes.map((type) => {
          const Icon = type.icon
          const isSelected = selectedType === type.id

          return (
            <Card
              key={type.id}
              className={`cursor-pointer transition-all hover:shadow-md ${isSelected ? "ring-2 ring-primary" : ""}`}
              onClick={() => handleTypeSelect(type.id)}
            >
              <CardContent className="p-4 text-center">
                <div className={`size-12 rounded-full ${type.color} flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="size-6" />
                </div>
                <h4 className="font-medium mb-1">{type.title}</h4>
                <p className="text-xs text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
