"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Wallet,
  PieChart,
  BarChart3,
  Bell,
  FileText,
  Lock,
  TrendingUp,
  DollarSign,
  Calendar,
  History,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import SearchButton from "./components/search-button"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Cadastro de Transações",
      description:
        "Registre todas as suas transações (entradas e saídas) com dados como valor, data, categoria, descrição e tipo.",
      icon: <Wallet className="size-5" />,
    },
    {
      title: "Resumo Financeiro",
      description: "Visualize um resumo com total de entradas, saídas, saldo atual e categorias de gastos.",
      icon: <DollarSign className="size-5" />,
    },
    {
      title: "Orçamento Mensal",
      description: "Estabeleça um orçamento mensal com alertas de limite por categoria.",
      icon: <Calendar className="size-5" />,
    },
    {
      title: "Histórico de Transações",
      description: "Acesse o histórico completo, com filtros por data e categoria, além da opção de edição e exclusão.",
      icon: <History className="size-5" />,
    },
    {
      title: "Gráficos e Relatórios",
      description: "Visualize gráficos e relatórios sobre distribuição de gastos e fluxo de caixa.",
      icon: <PieChart className="size-5" />,
    },
    {
      title: "Alertas e Notificações",
      description: "Receba alertas personalizados sobre limites, metas e entradas esperadas.",
      icon: <Bell className="size-5" />,
    },
    {
      title: "Exportação de Dados",
      description: "Exporte seus dados em formatos como CSV ou PDF para facilitar a declaração de impostos.",
      icon: <FileText className="size-5" />,
    },
    {
      title: "Segurança das Informações",
      description: "Tenha a garantia de segurança das informações, com autenticação e criptografia.",
      icon: <Lock className="size-5" />,
    },
    {
      title: "Controle de Investimentos",
      description: "Acompanhe seus investimentos, com rentabilidade e percentual investido.",
      icon: <TrendingUp className="size-5" />,
    },
    {
      title: "Resumo das Finanças",
      description: "Visualize um resumo da sua evolução patrimonial, com gráficos e painéis visuais.",
      icon: <BarChart3 className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              SF
            </div>
            <span>Safe Finance</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Funcionalidades
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sobre
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Benefícios
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Equipe
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Planos
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <SearchButton />
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Alternar tema</span>
            </Button>
            <Link
              href="/cliente"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Entrar
            </Link>
            <Button className="rounded-full" asChild>
              <Link href="/cliente">
                Começar Agora
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Funcionalidades
              </Link>
              <Link href="#about" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Sobre
              </Link>
              <Link href="#benefits" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Benefícios
              </Link>
              <Link href="#team" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Equipe
              </Link>
              <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Planos
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="/cliente" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Entrar
                </Link>
                <Button className="rounded-full" asChild>
                  <Link href="/cliente">
                    Começar Agora
                    <ChevronRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-[#213133] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2a3c3e_1px,transparent_1px),linear-gradient(to_bottom,#2a3c3e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Organize suas finanças
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Organize suas finanças com a Safe Finance
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                A Safe Finance é um aplicativo desenvolvido com o objetivo principal de auxiliar na gestão financeira,
                de maneira intuitiva e prática. Seu design visa atender a públicos que não possuem conhecimentos prévios
                sobre o uso de aplicativos bancários ou planilhas de Excel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base" asChild>
                  <Link href="/agendar-demo">Agendar Demonstração</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>14 dias de teste</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  width={1280}
                  height={720}
                  alt="Safe Finance dashboard"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Sobre
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre a Safe Finance</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                A Safe Finance é um organizador financeiro completo desenvolvido para ajudar indivíduos e pequenas
                empresas a gerenciarem suas finanças de maneira eficiente e intuitiva. Nossa plataforma oferece todas as
                ferramentas necessárias para um controle financeiro preciso e consciente.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="Safe Finance app interface"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="text-lg">
                  Com nossa plataforma intuitiva, você pode registrar todas as suas transações, categorizar gastos,
                  estabelecer orçamentos e acompanhar sua evolução financeira através de gráficos e relatórios
                  detalhados.
                </p>
                <p className="text-lg">
                  Não deixe que a falta de organização e dívidas comprometa suas metas financeiras. O Safe Finance está
                  aqui para simplificar sua vida financeira e ajudar você a alcançar seus objetivos.
                </p>
                <div className="pt-4">
                  <Button className="rounded-full">
                    Saiba Mais
                    <ChevronRight className="ml-1 size-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Funcionalidades
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Objetivos da Safe Finance</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Nossa plataforma oferece todas as ferramentas necessárias para um controle financeiro preciso e
                consciente.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-[#213133] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2a3c3e_1px,transparent_1px),linear-gradient(to_bottom,#2a3c3e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Benefícios
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Benefícios da Safe Finance</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                A Safe Finance tem como objetivo fornecer um conjunto sólido de funcionalidades que resultem em mudanças
                significativas na gestão financeira dos usuários.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  title: "Aprimoramento no gerenciamento",
                  description:
                    "Possibilita o registro e acompanhamento de todas as transações de maneira fácil e compreensível.",
                },
                {
                  title: "Diminuição de despesas desnecessárias",
                  description: "Por meio da gestão do orçamento por categorias e notificações sobre limites.",
                },
                {
                  title: "Melhor planejamento e organização",
                  description: "Com objetivos de gastos e investimentos claramente definidos.",
                },
                {
                  title: "Representação nítida da saúde financeira",
                  description: "Por meio de gráficos, painéis e resumos atualizados em tempo real.",
                },
                {
                  title: "Instrução financeira",
                  description:
                    "Estimulando hábitos mais conscientes através do monitoramento do fluxo de caixa e do retorno sobre os investimentos.",
                },
                {
                  title: "Segurança e confiança",
                  description:
                    "Oferecendo um ambiente protegido para o armazenamento e a administração de informações financeiras pessoais.",
                },
                {
                  title: "Aumento da autonomia dos usuários",
                  description:
                    "Que poderão tomar decisões mais informadas e estratégicas com base nos dados fornecidos pelo sistema.",
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="size-3.5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Nossa Equipe
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Desenvolvedores e Estudantes</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Essa é a equipe de Desenvolvedores da Safe Finance, um grupo destinado a contribuir para um futuro
                financeiro bom e saudável para os usuários. Estudantes de Análise e Desenvolvimento de Sistemas da
                Facens (Faculdade de Engenharia de Sorocaba).
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Anthony Losano Miranda",
                  role: "Desenvolvedor de sistemas, Analista de suporte",
                },
                {
                  name: "Gabriel Viana Krapp Guimarães",
                  role: "Product owner, Analista de viabilidade",
                },
                {
                  name: "Gustavo de Matos Passarelli",
                  role: "Scrum master, Gestor de projetos",
                },
                {
                  name: "Henrique Monteiro Cardoso",
                  role: "Desenvolvedor de algoritmos, Analista de requisitos",
                },
                {
                  name: "Lucas Sodré Teixeira",
                  role: "Consultor de usabilidade",
                },
                {
                  name: "Murilo Henrique Araujo Elias Fernandez",
                  role: "Desenvolvedor de sistemas, Arquitetura de sistemas",
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-16 rounded-full bg-muted flex items-center justify-center text-foreground font-medium text-xl mb-4 mx-auto">
                        {member.name.charAt(0)}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
                      <p className="text-muted-foreground text-center">{member.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold mb-4">Conheça nossa instituição</h3>
              <p className="text-muted-foreground mb-4">Siga a Facens no Instagram:</p>
              <Link href="https://www.instagram.com/facens" className="text-primary hover:underline font-medium">
                @facens
              </Link>
              <Button asChild className="rounded-full">
                <Link href="/carreiras">Ver Vagas Abertas</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Depoimentos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">O que nossos usuários dizem</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Veja como a Safe Finance tem ajudado pessoas a transformarem suas vidas financeiras.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "A Safe Finance transformou completamente a forma como eu gerencio minhas finanças. Agora consigo visualizar exatamente para onde vai meu dinheiro.",
                  author: "Mariana Silva",
                  role: "Professora",
                  rating: 5,
                },
                {
                  quote:
                    "Os gráficos e relatórios me ajudaram a identificar gastos desnecessários que eu nem percebia que estava fazendo. Já economizei muito desde que comecei a usar.",
                  author: "Carlos Oliveira",
                  role: "Engenheiro",
                  rating: 5,
                },
                {
                  quote:
                    "O suporte ao cliente é excepcional. Sempre que tive dúvidas, a equipe foi rápida em me ajudar. Recomendo a todos que querem organizar suas finanças.",
                  author: "Juliana Santos",
                  role: "Empreendedora",
                  rating: 5,
                },
                {
                  quote:
                    "Experimentei vários aplicativos de finanças, mas nenhum é tão completo e fácil de usar quanto o Safe Finance. É perfeito para quem não entende muito de finanças.",
                  author: "Ricardo Mendes",
                  role: "Médico",
                  rating: 5,
                },
                {
                  quote:
                    "As notificações de orçamento me ajudaram a controlar meus gastos e finalmente consegui juntar dinheiro para realizar meu sonho de viajar.",
                  author: "Ana Luiza",
                  role: "Designer",
                  rating: 5,
                },
                {
                  quote:
                    "Desde que comecei a usar o Safe Finance, consegui reduzir minhas dívidas em 40%. A visualização clara dos gastos fez toda a diferença.",
                  author: "Paulo Henrique",
                  role: "Advogado",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-[#213133] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2a3c3e_1px,transparent_1px),linear-gradient(to_bottom,#2a3c3e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Planos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Planos Simples e Transparentes</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Escolha o plano ideal para suas necessidades. Todos os planos incluem um período de teste gratuito de 14
                dias.
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <Tabs defaultValue="monthly" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="rounded-full p-1">
                    <TabsTrigger value="monthly" className="rounded-full px-6">
                      Mensal
                    </TabsTrigger>
                    <TabsTrigger value="annually" className="rounded-full px-6">
                      Anual (Economize 20%)
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="monthly">
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    {[
                      {
                        name: "Básico",
                        price: "R$29",
                        description: "Perfeito para uso pessoal.",
                        features: [
                          "Cadastro de transações",
                          "Resumo financeiro básico",
                          "Orçamento mensal",
                          "Suporte por email",
                        ],
                        cta: "Começar Teste Gratuito",
                      },
                      {
                        name: "Profissional",
                        price: "R$79",
                        description: "Ideal para autônomos e famílias.",
                        features: [
                          "Todas as funcionalidades do Básico",
                          "Gráficos e relatórios avançados",
                          "Exportação de dados",
                          "Suporte prioritário",
                          "Múltiplas contas",
                        ],
                        cta: "Começar Teste Gratuito",
                        popular: true,
                      },
                      {
                        name: "Empresarial",
                        price: "R$199",
                        description: "Para pequenas empresas e equipes.",
                        features: [
                          "Todas as funcionalidades do Profissional",
                          "Controle de investimentos",
                          "Múltiplos usuários",
                          "Suporte 24/7",
                          "API para integração",
                          "Relatórios personalizados",
                        ],
                        cta: "Falar com Vendas",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Mais Popular
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <div className="flex items-baseline mt-4">
                              <span className="text-4xl font-bold">{plan.price}</span>
                              <span className="text-muted-foreground ml-1">/mês</span>
                            </div>
                            <p className="text-muted-foreground mt-2">{plan.description}</p>
                            <ul className="space-y-3 my-6 flex-grow">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                              variant={plan.popular ? "default" : "outline"}
                            >
                              {plan.cta}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="annually">
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    {[
                      {
                        name: "Básico",
                        price: "R$23",
                        description: "Perfeito para uso pessoal.",
                        features: [
                          "Cadastro de transações",
                          "Resumo financeiro básico",
                          "Orçamento mensal",
                          "Suporte por email",
                        ],
                        cta: "Começar Teste Gratuito",
                      },
                      {
                        name: "Profissional",
                        price: "R$63",
                        description: "Ideal para autônomos e famílias.",
                        features: [
                          "Todas as funcionalidades do Básico",
                          "Gráficos e relatórios avançados",
                          "Exportação de dados",
                          "Suporte prioritário",
                          "Múltiplas contas",
                        ],
                        cta: "Começar Teste Gratuito",
                        popular: true,
                      },
                      {
                        name: "Empresarial",
                        price: "R$159",
                        description: "Para pequenas empresas e equipes.",
                        features: [
                          "Todas as funcionalidades do Profissional",
                          "Controle de investimentos",
                          "Múltiplos usuários",
                          "Suporte 24/7",
                          "API para integração",
                          "Relatórios personalizados",
                        ],
                        cta: "Falar com Vendas",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Mais Popular
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <div className="flex items-baseline mt-4">
                              <span className="text-4xl font-bold">{plan.price}</span>
                              <span className="text-muted-foreground ml-1">/mês</span>
                            </div>
                            <p className="text-muted-foreground mt-2">{plan.description}</p>
                            <ul className="space-y-3 my-6 flex-grow">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                              variant={plan.popular ? "default" : "outline"}
                            >
                              {plan.cta}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Perguntas Frequentes</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Encontre respostas para as perguntas mais comuns sobre nossa plataforma.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Como funciona o período de teste gratuito de 14 dias?",
                    answer:
                      "Nosso período de teste gratuito de 14 dias oferece acesso completo a todas as funcionalidades do plano selecionado. Não é necessário cartão de crédito para se inscrever, e você pode cancelar a qualquer momento durante o período de teste sem nenhuma obrigação.",
                  },
                  {
                    question: "Posso mudar de plano posteriormente?",
                    answer:
                      "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Se fizer upgrade, o novo preço será calculado proporcionalmente para o restante do seu ciclo de faturamento. Se fizer downgrade, o novo preço entrará em vigor no início do próximo ciclo de faturamento.",
                  },
                  {
                    question: "Meus dados financeiros estão seguros?",
                    answer:
                      "Sim, levamos a segurança muito a sério. Todos os dados são criptografados tanto em trânsito quanto em repouso. Utilizamos práticas de segurança padrão da indústria e regularmente passamos por auditorias de segurança. Nossa plataforma está em conformidade com o LGPD e outras regulamentações relevantes.",
                  },
                  {
                    question: "Posso exportar meus dados?",
                    answer:
                      "Sim, todos os planos incluem a capacidade de exportar seus dados em formatos como CSV ou PDF. Isso facilita a declaração de impostos ou o compartilhamento de informações com seu contador.",
                  },
                  {
                    question: "A Safe Finance se conecta com meu banco?",
                    answer:
                      "Atualmente, a Safe Finance funciona principalmente como uma ferramenta de registro manual, mas estamos trabalhando em integrações com os principais bancos brasileiros para importação automática de transações. Esta funcionalidade estará disponível em breve para os planos Profissional e Empresarial.",
                  },
                  {
                    question: "Que tipo de suporte vocês oferecem?",
                    answer:
                      "O suporte varia de acordo com o plano. Todos os planos incluem suporte por email, com o plano Profissional oferecendo suporte prioritário por email. O plano Empresarial inclui suporte 24/7 por telefone e email. Também temos uma extensa base de conhecimento e fórum da comunidade disponíveis para todos os usuários.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Pronto para Transformar sua Vida Financeira?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Junte-se a milhares de usuários satisfeitos que organizaram suas finanças e alcançaram seus objetivos
                financeiros com nossa plataforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  Começar Teste Gratuito
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/agendar-demo">Agendar Demonstração</Link>
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                Sem cartão de crédito. 14 dias de teste gratuito. Cancele quando quiser.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  SF
                </div>
                <span>Safe Finance</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Organize suas finanças com nossa plataforma intuitiva. Controle gastos, estabeleça orçamentos e alcance
                seus objetivos financeiros.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/produto/funcionalidades"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link
                    href="/produto/planos"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Planos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/produto/integracoes"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Integrações
                  </Link>
                </li>
                <li>
                  <Link href="/produto/api" className="text-muted-foreground hover:text-foreground transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/recursos/documentacao"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recursos/guias"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Guias
                  </Link>
                </li>
                <li>
                  <Link href="/recursos/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recursos/suporte"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Suporte
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/empresa/sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/empresa/equipe"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Equipe
                  </Link>
                </li>
                <li>
                  <Link
                    href="/empresa/politica-de-privacidade"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/empresa/termos-de-servico"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Termos de Serviço
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Safe Finance. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link
                href="/empresa/politica-de-privacidade"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/empresa/termos-de-servico"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Termos de Serviço
              </Link>
              <Link
                href="/politica-de-cookies"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
