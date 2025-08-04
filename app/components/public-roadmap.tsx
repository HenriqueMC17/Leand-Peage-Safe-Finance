"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ThumbsUp, Clock, CheckCircle, Lightbulb, Users } from "lucide-react"

interface RoadmapItem {
  id: string
  title: string
  description: string
  status: "planned" | "in-progress" | "completed"
  votes: number
  category: string
  estimatedDate?: string
  progress?: number
}

const roadmapItems: RoadmapItem[] = [
  {
    id: "1",
    title: "Integração com Open Banking",
    description: "Conecte automaticamente suas contas bancárias para importar transações em tempo real.",
    status: "in-progress",
    votes: 234,
    category: "Integração",
    estimatedDate: "Q2 2024",
    progress: 65,
  },
  {
    id: "2",
    title: "App Mobile Nativo",
    description: "Aplicativo nativo para iOS e Android com todas as funcionalidades da versão web.",
    status: "in-progress",
    votes: 189,
    category: "Mobile",
    estimatedDate: "Q1 2024",
    progress: 80,
  },
  {
    id: "3",
    title: "Metas Financeiras Inteligentes",
    description: "Sistema de metas com IA que sugere objetivos baseados no seu perfil financeiro.",
    status: "planned",
    votes: 156,
    category: "IA",
    estimatedDate: "Q3 2024",
  },
  {
    id: "4",
    title: "Cartão de Crédito Virtual",
    description: "Cartão virtual integrado para controle total dos gastos online.",
    status: "planned",
    votes: 143,
    category: "Produto",
    estimatedDate: "Q4 2024",
  },
  {
    id: "5",
    title: "Relatórios Avançados",
    description: "Relatórios personalizáveis com insights detalhados sobre seus hábitos financeiros.",
    status: "completed",
    votes: 98,
    category: "Relatórios",
  },
  {
    id: "6",
    title: "Modo Família",
    description: "Compartilhe orçamentos e metas com membros da família, com controles de permissão.",
    status: "planned",
    votes: 87,
    category: "Social",
    estimatedDate: "Q2 2024",
  },
]

export default function PublicRoadmap() {
  const [items, setItems] = useState(roadmapItems)
  const [votedItems, setVotedItems] = useState<Set<string>>(new Set())

  const handleVote = (itemId: string) => {
    if (votedItems.has(itemId)) return

    setItems(items.map((item) => (item.id === itemId ? { ...item, votes: item.votes + 1 } : item)))

    setVotedItems(new Set([...votedItems, itemId]))
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="size-4 text-green-600" />
      case "in-progress":
        return <Clock className="size-4 text-blue-600" />
      case "planned":
        return <Lightbulb className="size-4 text-yellow-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "planned":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Concluído"
      case "in-progress":
        return "Em Desenvolvimento"
      case "planned":
        return "Planejado"
      default:
        return status
    }
  }

  const sortedItems = [...items].sort((a, b) => {
    // Priorizar por status (em progresso > planejado > concluído) e depois por votos
    const statusOrder = { "in-progress": 0, planned: 1, completed: 2 }
    const statusDiff = statusOrder[a.status] - statusOrder[b.status]
    if (statusDiff !== 0) return statusDiff
    return b.votes - a.votes
  })

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Roadmap Público</h2>
        <p className="text-muted-foreground">
          Veja o que estamos desenvolvendo e vote nas funcionalidades que mais deseja
        </p>
      </div>

      <div className="grid gap-4">
        {sortedItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(item.status)}
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                  <Badge className={`text-xs ${getStatusColor(item.status)}`}>{getStatusText(item.status)}</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{item.description}</p>

              {item.status === "in-progress" && item.progress && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso</span>
                    <span>{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleVote(item.id)}
                    disabled={votedItems.has(item.id)}
                    className="rounded-full"
                  >
                    <ThumbsUp className={`mr-1 size-3 ${votedItems.has(item.id) ? "fill-current" : ""}`} />
                    {item.votes}
                  </Button>

                  {item.estimatedDate && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="size-3" />
                      {item.estimatedDate}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="size-3" />
                  {item.votes} votos
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center p-6 bg-muted/30 rounded-lg">
        <h3 className="font-semibold mb-2">Tem uma sugestão?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Envie suas ideias e ajude-nos a construir a melhor plataforma financeira
        </p>
        <Button asChild className="rounded-full">
          <a href="/contato">Enviar Sugestão</a>
        </Button>
      </div>
    </div>
  )
}
