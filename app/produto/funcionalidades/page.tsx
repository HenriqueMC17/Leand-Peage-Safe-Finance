import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function FuncionalidadesPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Voltar para a página inicial
      </Link>

      <h1 className="text-4xl font-bold mb-6">Funcionalidades</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Cadastro de Transações</h2>
          <p className="text-muted-foreground mb-4">
            Registre todas as suas transações (entradas e saídas), com dados como valor, data, categoria, descrição e
            tipo. Organize seus movimentos financeiros de forma detalhada e acessível.
          </p>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="font-medium mb-2">Recursos incluídos:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Registro de receitas e despesas</li>
              <li>Categorização automática e manual</li>
              <li>Anexo de comprovantes</li>
              <li>Recorrência de transações</li>
              <li>Marcação de transações pagas/pendentes</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Resumo Financeiro</h2>
          <p className="text-muted-foreground mb-4">
            Visualize um resumo com total de entradas, saídas, saldo atual e categorias de gastos. Tenha uma visão clara
            e imediata da sua situação financeira a qualquer momento.
          </p>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="font-medium mb-2">Recursos incluídos:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Dashboard personalizado</li>
              <li>Visão mensal, trimestral e anual</li>
              <li>Comparativo entre períodos</li>
              <li>Alertas de gastos excessivos</li>
              <li>Previsão de saldo futuro</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Orçamento Mensal</h2>
          <p className="text-muted-foreground mb-4">
            Estabeleça um orçamento mensal com alertas de limite por categoria. Defina limites para seus gastos e receba
            avisos quando estiver se aproximando deles.
          </p>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="font-medium mb-2">Recursos incluídos:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Definição de orçamentos por categoria</li>
              <li>Alertas personalizáveis</li>
              <li>Acompanhamento em tempo real</li>
              <li>Sugestões de ajustes</li>
              <li>Histórico de orçamentos anteriores</li>
            </ul>
          </div>
        </section>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Conheça todas as nossas funcionalidades e comece a transformar sua vida financeira hoje mesmo.
          </p>
          <Button asChild className="rounded-full">
            <Link href="/#pricing">Ver Planos</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
