import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Analista de Testes Nível 2",
      company: "Orange Testing – Plataforma de Automação de Testes",
      period: "mar/2025 – atual",
      location: "São Paulo, SP (Remoto)",
      description: [
        "Criação, execução e automação de testes funcionais",
        "Elaboração de cenários e casos de teste, identificação de bugs e validação de correções",
        "Participação ativa em entregas ágeis e melhoria contínua",
      ],
    },
    {
      title: "Analista de Testes Júnior",
      company: "Orange Testing",
      period: "mar/2024 – mar/2025",
      location: "São Paulo, SP",
      description: [
        "Estratégias e execução de testes BDD, testes manuais, regressão, integração e exploratórios",
        "Automação de testes Web/API com a ferramenta Orange",
        "Testes REST com Postman",
        "Ferramentas: Cypress, Swagger, Trello, Figma, Azure DevOps, DBeaver, Miro, Jira",
      ],
    },
    {
      title: "Estagiária em Testes",
      company: "Orange Testing",
      period: "mar/2024 – abr/2024",
      location: "São Paulo, SP",
      description: [
        "Criação de testes, análise de requisitos, reporte de bugs e apoio à documentação",
        "Participação em reuniões e colaboração com equipe de QA e desenvolvimento",
      ],
    },
    {
      title: "Desenvolvedora Freelancer",
      company: "Autônoma",
      period: "2022 – 2023",
      location: "Remoto",
      description: [
        "Desenvolvimento com HTML, CSS, JavaScript/Node.js, React Native, Next.js, Python, SQL/MySQL",
        "SaaS para setor imobiliário, sites institucionais personalizados",
        "Aplicativo mobile petcare (React Native)",
        "UX/UI com Figma, metodologia ágil, entregas iterativas e foco em cliente",
      ],
    },
  ]

  return (
    <section id="experiencia" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e2e] mb-4">Experiência Profissional</h2>
          <div className="w-20 h-1 bg-[#6c7086] mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#1e1e2e] mb-2">{exp.title}</h3>
                  <p className="text-[#6c7086] font-medium mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-[#6c7086] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
