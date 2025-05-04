"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  CreditCard,
  Wallet,
  BanknoteIcon,
  TrendingUp,
  Calendar,
  Bell,
  Settings,
  User,
  Home,
  PieChartIcon,
  BarChart3,
  FileText,
  LogOut,
} from "lucide-react"

// Importar componente de virtualização
import { useVirtualizer } from "@tanstack/react-virtual"
import { useRef } from "react"

// Dados de exemplo
const balanceData = [
  { name: "Jan", receitas: 4000, despesas: 2400 },
  { name: "Fev", receitas: 3000, despesas: 2800 },
  { name: "Mar", receitas: 5000, despesas: 3000 },
  { name: "Abr", receitas: 4500, despesas: 3500 },
  { name: "Mai", receitas: 6000, despesas: 3200 },
  { name: "Jun", receitas: 5500, despesas: 4000 },
]

const categoryData = [
  { name: "Moradia", value: 1800, color: "#50c8a8" },
  { name: "Alimentação", value: 1200, color: "#3b82f6" },
  { name: "Transporte", value: 800, color: "#f59e0b" },
  { name: "Lazer", value: 600, color: "#8b5cf6" },
  { name: "Saúde", value: 500, color: "#ef4444" },
  { name: "Outros", value: 400, color: "#6b7280" },
]

const transactionData = [
  {
    id: 1,
    description: "Salário",
    date: "15/06/2023",
    amount: 5000,
    type: "receita",
    category: "Renda",
  },
  {
    id: 2,
    description: "Aluguel",
    date: "05/06/2023",
    amount: 1200,
    type: "despesa",
    category: "Moradia",
  },
  {
    id: 3,
    description: "Supermercado",
    date: "10/06/2023",
    amount: 450,
    type: "despesa",
    category: "Alimentação",
  },
  {
    id: 4,
    description: "Uber",
    date: "12/06/2023",
    amount: 35,
    type: "despesa",
    category: "Transporte",
  },
  {
    id: 5,
    description: "Freelance",
    date: "20/06/2023",
    amount: 1200,
    type: "receita",
    category: "Renda",
  },
]

export default function DashboardDemo() {
  const [activeTab, setActiveTab] = useState("visao-geral")

  // Modificar a seção de transações para usar virtualização
  const parentRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: transactionData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,
  })

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-background border-r p-4">
        <div className="flex items-center gap-2 font-bold mb-8">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
            SF
          </div>
          <span>Safe Finance</span>
        </div>

        <nav className="space-y-1">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium"
          >
            <Home className="size-4" />
            <span>Visão Geral</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors"
          >
            <Wallet className="size-4" />
            <span>Transações</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors"
          >
            <PieChartIcon className="size-4" />
            <span>Orçamento</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors"
          >
            <BarChart3 className="size-4" />
            <span>Relatórios</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors"
          >
            <TrendingUp className="size-4" />
            <span>Investimentos</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors"
          >
            <Calendar className="size-4" />
            <span>Planejamento</span>
          </Link>
        </nav>

        <div className="mt-auto space-y-1">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors"
          >
            <Bell className="size-4" />
            <span>Notificações</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors"
          >
            <Settings className="size-4" />
            <span>Configurações</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors"
          >
            <User className="size-4" />
            <span>Perfil</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors"
          >
            <LogOut className="size-4" />
            <span>Sair</span>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 md:p-8 overflow-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Bem-vindo de volta, João Silva</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full">
              <FileText className="mr-2 size-4" />
              Exportar Relatório
            </Button>
            <Button className="rounded-full">
              <BanknoteIcon className="mr-2 size-4" />
              Nova Transação
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="size-6 text-primary" />
                </div>
                <ArrowUpRight className="size-4 text-green-500" />
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">Saldo Atual</p>
                <h3 className="text-2xl font-bold">R$ 8.350,00</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="size-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <ArrowUpRight className="size-6 text-green-500" />
                </div>
                <ArrowUpRight className="size-4 text-green-500" />
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">Receitas (Junho)</p>
                <h3 className="text-2xl font-bold">R$ 6.200,00</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="size-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <ArrowDownRight className="size-6 text-red-500" />
                </div>
                <ArrowDownRight className="size-4 text-red-500" />
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">Despesas (Junho)</p>
                <h3 className="text-2xl font-bold">R$ 4.000,00</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="size-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <CreditCard className="size-6 text-blue-500" />
                </div>
                <ArrowUpRight className="size-4 text-green-500" />
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">Economia (Junho)</p>
                <h3 className="text-2xl font-bold">R$ 2.200,00</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
            <TabsTrigger value="transacoes">Transações</TabsTrigger>
            <TabsTrigger value="categorias">Categorias</TabsTrigger>
          </TabsList>
          <TabsContent value="visao-geral">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Balanço Mensal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] sm:h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={balanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="receitas" fill="#50c8a8" />
                        <Bar dataKey="despesas" fill="#ef4444" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tendência de Saldo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={balanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="receitas" stroke="#50c8a8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="despesas" stroke="#ef4444" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="transacoes">
            <Card>
              <CardHeader>
                <CardTitle>Transações Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Na renderização da lista de transações */}
                <div ref={parentRef} className="max-h-[400px] overflow-auto">
                  <div
                    style={{
                      height: `${rowVirtualizer.getTotalSize()}px`,
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                      const transaction = transactionData[virtualRow.index]
                      return (
                        <div
                          key={transaction.id}
                          className="flex items-center justify-between p-4 border rounded-lg absolute top-0 left-0 w-full"
                          style={{
                            height: `${virtualRow.size}px`,
                            transform: `translateY(${virtualRow.start}px)`,
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`size-10 rounded-full flex items-center justify-center ${
                                transaction.type === "receita" ? "bg-green-500/10" : "bg-red-500/10"
                              }`}
                            >
                              {transaction.type === "receita" ? (
                                <ArrowUpRight className={`size-5 text-green-500`} />
                              ) : (
                                <ArrowDownRight className={`size-5 text-red-500`} />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <p className="text-sm text-muted-foreground">
                                {transaction.date} • {transaction.category}
                              </p>
                            </div>
                          </div>
                          <p
                            className={`font-medium ${transaction.type === "receita" ? "text-green-500" : "text-red-500"}`}
                          >
                            {transaction.type === "receita" ? "+" : "-"}R$ {transaction.amount.toFixed(2)}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="rounded-full">
                    Ver Todas as Transações
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="categorias">
            <Card>
              <CardHeader>
                <CardTitle>Despesas por Categoria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="h-80 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Detalhamento</h3>
                    <div className="space-y-4">
                      {categoryData.map((category, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="size-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                            <span>{category.name}</span>
                          </div>
                          <span className="font-medium">R$ {category.value.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Demo notice */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
          <p className="text-sm">
            Esta é uma demonstração do dashboard da Safe Finance. Para acessar todas as funcionalidades,{" "}
            <Link href="/#pricing" className="text-primary font-medium">
              assine um de nossos planos
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
