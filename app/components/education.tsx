import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Católica de Santos",
      period: "Fev/2023 – Out/2025 (em andamento)",
      skills:
        "Algoritmos, Estruturas de Dados, Desenvolvimento Front-end e Back-end, React.js, Aplicações Web, Análise de Dados, UI Design, Garantia de Qualidade de Software",
    },
    {
      degree: "Ensino de Inglês como Segundo Idioma (ESL)",
      institution: "Fluencypass",
      period: "Jan/2025 – Dez/2025 (em andamento)",
      skills: "Inglês para tecnologia, Gramática, Ensino de ESL",
    },
    {
      degree: "Técnico em Desenvolvimento de Sistemas",
      institution: "ETEC – Escola Técnica Estadual de São Paulo",
      period: "2021 – 2022",
      skills: "Desenvolvimento Web, UX, UML, Ética, BDGC, Teste e Garantia de Qualidade de Software, Análise de Dados",
    },
    {
      degree: "Licenciatura em Letras – Língua Inglesa e Literaturas",
      institution: "Universidade Paulista (UNIP)",
      period: "Jan/2017 – Nov/2020",
      skills: "Comunicação Oral, Ética, Regras de Negócio, Microsoft Office",
    },
  ]

  return (
    <section id="formacao" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e2e] mb-4">Formação Acadêmica</h2>
          <div className="w-20 h-1 bg-[#6c7086] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start mb-4">
                <div className="bg-[#6c7086] p-2 rounded-lg mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1e1e2e] mb-2">{edu.degree}</h3>
                  <p className="text-[#6c7086] font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-1" />
                    {edu.period}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#1e1e2e] mb-2">Competências:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{edu.skills}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
