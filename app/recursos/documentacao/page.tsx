import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function DocumentacaoPage() {
  return (
    <div className="container py-12 md:py-20">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Voltar para a página inicial
      </Link>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <div className="md:w-64 flex-shrink-0">
          <div className="sticky top-20">
            <div className="relative mb-6">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar na documentação..." className="w-full pl-9 rounded-md" />
            </div>

            <nav className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Introdução</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="#primeiros-passos" className="text-muted-foreground hover:text-primary">
                      Primeiros Passos
                    </Link>
                  </li>
                  <li>
                    <Link href="#instalacao" className="text-muted-foreground hover:text-primary">
                      Instalação
                    </Link>
                  </li>
                  <li>
                    <Link href="#requisitos" className="text-muted-foreground hover:text-primary">
                      Requisitos do Sistema
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Funcionalidades</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="#transacoes" className="text-muted-foreground hover:text-primary">
                      Cadastro de Transações
                    </Link>
                  </li>
                  <li>
                    <Link href="#categorias" className="text-muted-foreground hover:text-primary">
                      Categorias
                    </Link>
                  </li>
                  <li>
                    <Link href="#orcamentos" className="text-muted-foreground hover:text-primary">
                      Orçamentos
                    </Link>
                  </li>
                  <li>
                    <Link href="#relatorios" className="text-muted-foreground hover:text-primary">
                      Relatórios
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">API</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="#autenticacao" className="text-muted-foreground hover:text-primary">
                      Autenticação
                    </Link>
                  </li>
                  <li>
                    <Link href="#endpoints" className="text-muted-foreground hover:text-primary">
                      Endpoints
                    </Link>
                  </li>
                  <li>
                    <Link href="#exemplos" className="text-muted-foreground hover:text-primary">
                      Exemplos
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Suporte</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="#faq" className="text-muted-foreground hover:text-primary">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#contato" className="text-muted-foreground hover:text-primary">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Documentação</h1>
          <p className="text-muted-foreground mb-12">
            Bem-vindo à documentação oficial da Safe Finance. Aqui você encontrará tudo o que precisa para começar a
            usar nossa plataforma e aproveitar ao máximo todas as funcionalidades.
          </p>

          <section id="primeiros-passos" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Primeiros Passos</h2>
            <p className="text-muted-foreground mb-4">
              A Safe Finance é uma plataforma completa para gestão financeira pessoal e empresarial. Com ela, você pode
              registrar transações, categorizar gastos, estabelecer orçamentos e acompanhar sua evolução financeira
              através de gráficos e relatórios detalhados.
            </p>
            <p className="text-muted-foreground mb-4">
              Para começar a usar a Safe Finance, você precisa criar uma conta e escolher um plano que atenda às suas
              necessidades. Após o cadastro, você terá acesso imediato à plataforma.
            </p>
            <div className="p-4 bg-muted/30 rounded-lg mt-6">
              <h3 className="font-medium mb-2">Dica Rápida</h3>
              <p className="text-sm text-muted-foreground">
                Recomendamos começar importando seus dados bancários ou registrando suas transações dos últimos 3 meses
                para ter uma visão mais completa da sua situação financeira.
              </p>
            </div>
          </section>

          <section id="instalacao" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Instalação</h2>
            <p className="text-muted-foreground mb-4">
              A Safe Finance é uma plataforma baseada em nuvem, o que significa que não é necessário instalar nenhum
              software em seu computador. Basta acessar nosso site e fazer login.
            </p>
            <p className="text-muted-foreground mb-4">
              Para dispositivos móveis, oferecemos aplicativos para iOS e Android que podem ser baixados nas respectivas
              lojas de aplicativos. Nossos aplicativos oferecem todas as funcionalidades da versão web, permitindo que
              você gerencie suas finanças em qualquer lugar.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-medium mb-2">Aplicativo iOS</h3>
                <p className="text-sm text-muted-foreground mb-4">Disponível para iPhone e iPad na App Store.</p>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <Link href="#">Download na App Store</Link>
                </Button>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-medium mb-2">Aplicativo Android</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Disponível para smartphones e tablets Android na Google Play.
                </p>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <Link href="#">Download na Google Play</Link>
                </Button>
              </div>
            </div>
          </section>

          <section id="requisitos" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Requisitos do Sistema</h2>
            <p className="text-muted-foreground mb-4">
              A Safe Finance é compatível com a maioria dos navegadores modernos e dispositivos. Para a melhor
              experiência, recomendamos:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Navegadores: Chrome, Firefox, Safari ou Edge (versões atualizadas)</li>
              <li>Sistemas operacionais: Windows 10+, macOS 10.13+, iOS 13+, Android 8+</li>
              <li>Conexão com a internet estável</li>
              <li>Resolução de tela mínima: 1280x720</li>
            </ul>

            <p className="text-muted-foreground">
              Para funcionalidades avançadas como importação automática de dados bancários, pode ser necessário permitir
              cookies e scripts de terceiros em seu navegador.
            </p>
          </section>

          <div className="text-center mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Não encontrou o que procurava?</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe de suporte está pronta para ajudar com qualquer dúvida que você possa ter.
            </p>
            <Button asChild className="rounded-full">
              <Link href="/contato">Entrar em Contato</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
