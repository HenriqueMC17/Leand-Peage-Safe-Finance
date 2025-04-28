import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function PlanosPage() {
  return (
    <div className="container max-w-5xl py-12 md:py-20">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Voltar para a página inicial
      </Link>

      <h1 className="text-4xl font-bold mb-6">Nossos Planos</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Escolha o plano ideal para suas necessidades. Todos os planos incluem um período de teste gratuito de 14 dias,
        sem necessidade de cartão de crédito.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            name: "Básico",
            price: "R$29",
            period: "/mês",
            description: "Perfeito para uso pessoal.",
            features: [
              "Cadastro de transações",
              "Resumo financeiro básico",
              "Orçamento mensal",
              "Suporte por email",
              "1 usuário",
              "Exportação básica de dados",
            ],
            cta: "Começar Teste Gratuito",
          },
          {
            name: "Profissional",
            price: "R$79",
            period: "/mês",
            description: "Ideal para autônomos e famílias.",
            features: [
              "Todas as funcionalidades do Básico",
              "Gráficos e relatórios avançados",
              "Exportação de dados em múltiplos formatos",
              "Suporte prioritário",
              "Até 5 usuários",
              "Múltiplas contas e cartões",
              "Planejamento financeiro avançado",
            ],
            cta: "Começar Teste Gratuito",
            popular: true,
          },
          {
            name: "Empresarial",
            price: "R$199",
            period: "/mês",
            description: "Para pequenas empresas e equipes.",
            features: [
              "Todas as funcionalidades do Profissional",
              "Controle de investimentos",
              "Usuários ilimitados",
              "Suporte 24/7",
              "API para integração",
              "Relatórios personalizados",
              "Conciliação bancária automática",
              "Gestão de fluxo de caixa empresarial",
            ],
            cta: "Falar com Vendas",
          },
        ].map((plan, i) => (
          <Card
            key={i}
            className={`relative overflow-hidden ${plan.popular ? "border-primary shadow-lg" : "border-border/40"}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                Mais Popular
              </div>
            )}
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <div className="flex items-baseline mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mt-2 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <Check className="mr-2 size-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={`w-full rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}>
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted/30 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Precisa de um plano personalizado?</h3>
        <p className="text-muted-foreground mb-4">
          Se você tem necessidades específicas ou precisa de um plano customizado para sua empresa, entre em contato com
          nossa equipe de vendas.
        </p>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/contato">Falar com um Consultor</Link>
        </Button>
      </div>
    </div>
  )
}
