import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Linkedin, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function EquipePage() {
  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Voltar para a página inicial
      </Link>

      <h1 className="text-4xl font-bold mb-6">Nossa Equipe</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Conheça os desenvolvedores por trás da Safe Finance, um grupo destinado a contribuir para um futuro financeiro
        bom e saudável para os usuários.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Desenvolvedores e Estudantes</h2>
          <p className="text-lg mb-8">
            Estudantes de Análise e Desenvolvimento de Sistemas da Facens (Faculdade de Engenharia de Sorocaba),
            chegaram em um projeto inspirador sobre o organizador financeiro, com o objetivo dos usuários melhorarem as
            suas vidas financeiras, inclusive cidadãos brasileiros a serem mais cuidadosos e sábios na hora de receber e
            gastar o dinheiro com prudência. Alunos desenvolvedores pretendem seguir a area de Tecnologia da Informação
            com focos diferentes.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Anthony Losano Miranda",
                role: "Desenvolvedor de sistemas, analista de suporte",
                image: "/placeholder.svg?height=300&width=300",
                linkedin: "#",
                email: "anthony@safefinance.com.br",
                bio: "Especialista em desenvolvimento de sistemas e suporte técnico, com foco em criar soluções robustas e de fácil manutenção.",
              },
              {
                name: "Gabriel Viana Krapp Guimarães",
                role: "Product owner, Analista de viabilidade",
                image: "/placeholder.svg?height=300&width=300",
                linkedin: "#",
                email: "gabriel@safefinance.com.br",
                bio: "Responsável pela visão do produto e análise de viabilidade, garantindo que a Safe Finance atenda às necessidades reais dos usuários.",
              },
              {
                name: "Gustavo de Matos Passarelli",
                role: "Scrum master, Gestor de projetos",
                image: "/placeholder.svg?height=300&width=300",
                linkedin: "#",
                email: "gustavo@safefinance.com.br",
                bio: "Especialista em metodologias ágeis e gestão de projetos, garantindo a entrega eficiente e de alta qualidade.",
              },
              {
                name: "Henrique Monteiro Cardoso",
                role: "Desenvolvedor de algoritmos, analista de requisitos",
                image: "/placeholder.svg?height=300&width=300",
                linkedin: "https://www.linkedin.com/in/henrique-monteiro-cardoso-ba3716229/",
                email: "hmonteiro.hc@gmail.com",
                bio: "Focado no desenvolvimento de algoritmos eficientes e análise detalhada de requisitos para garantir soluções precisas.",
              },
              {
                name: "Lucas Sodré Teixeira",
                role: "Consultor de usabilidade",
                image: "/placeholder.svg?height=300&width=300",
                linkedin: "#",
                email: "lucas@safefinance.com.br",
                bio: "Especialista em experiência do usuário, trabalhando para tornar a Safe Finance intuitiva e acessível para todos os públicos.",
              },
              {
                name: "Murilo Henrique Araujo Elias Fernandez",
                role: "Desenvolvedor de sistemas, Arquitetura de sistemas",
                image: "/placeholder.svg?height=300&width=300",
                linkedin: "#",
                email: "murilo@safefinance.com.br",
                bio: "Responsável pela arquitetura de sistemas e desenvolvimento, garantindo uma base sólida e escalável para a plataforma.",
              },
            ].map((member, i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <p className="text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="icon" className="rounded-full">
                      <Link href={member.linkedin}>
                        <Linkedin className="size-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="rounded-full">
                      <Link href={`mailto:${member.email}`}>
                        <Mail className="size-4" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Nossa Instituição</h2>

          <div className="bg-muted/30 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Logo Facens"
                  width={200}
                  height={200}
                  className="w-full max-w-[200px] h-auto mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-4">Facens - Faculdade de Engenharia de Sorocaba</h3>
                <p className="text-muted-foreground mb-4">
                  A Facens é uma instituição de ensino superior localizada em Sorocaba, São Paulo, reconhecida pela
                  excelência em cursos de engenharia e tecnologia. Com uma abordagem prática e inovadora, a Facens
                  prepara seus alunos para os desafios do mercado de trabalho e incentiva o desenvolvimento de projetos
                  com impacto social.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href="https://www.facens.br" target="_blank" rel="noopener noreferrer">
                      Visitar Site
                    </Link>
                  </Button>
                  <Button asChild className="rounded-full">
                    <Link href="https://www.instagram.com/instafacens/" target="_blank" rel="noopener noreferrer">
                      Seguir no Instagram
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Junte-se à Nossa Equipe</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Estamos sempre em busca de talentos apaixonados por tecnologia e finanças para se juntar à nossa equipe.
                Se você é criativo, inovador e quer fazer parte de um projeto que está transformando a vida financeira
                de milhares de pessoas, queremos conhecer você!
              </p>

              <p className="text-lg mb-6">
                Oferecemos um ambiente de trabalho dinâmico, oportunidades de crescimento e a chance de contribuir para
                um produto que faz a diferença na vida das pessoas.
              </p>

              <Button asChild className="rounded-full">
                <Link href="/carreiras">Ver Vagas Abertas</Link>
              </Button>
            </div>

            <div className="rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Equipe trabalhando"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
