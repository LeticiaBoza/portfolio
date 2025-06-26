export default function Skills() {
  const skillCategories = [
    {
      title: "Qualidade de Software",
      skills: ["Testes Manuais", "BDD", "Automação de Testes", "Testes de API", "Regressão", "Integração"],
    },
    {
      title: "Ferramentas",
      skills: ["Cypress", "Postman", "Swagger", "Azure DevOps", "Jira", "Trello", "Figma", "Miro", "DBeaver"],
    },
    {
      title: "Desenvolvimento",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "Python", "React Native", "Next.js", "SQL", "MySQL"],
    },
    {
      title: "Design e UX/UI",
      skills: ["Prototipação com Figma", "Fluxo de Usuário", "Design Responsivo"],
    },
    {
      title: "Metodologias",
      skills: ["Scrum", "Kanban", "Ciclos Iterativos", "Foco em Valor"],
    },
  ]

  return (
    <section id="habilidades" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e2e] mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-[#6c7086] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold text-[#1e1e2e] mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#6c7086] hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
