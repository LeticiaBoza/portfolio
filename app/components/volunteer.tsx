import { Heart, Users } from "lucide-react"

export default function Volunteer() {
  const volunteerWork = [
    {
      title: "Gerente de Organização",
      organization: "Py013 – Comunidade Python da Baixada Santista",
      period: "dez/2023 – atual",
      description: [
        "Organização de meetups, hackathons e workshops",
        "Curadoria de conteúdo e cronogramas",
        "Engajamento com a comunidade e gestão de parcerias",
        "Divulgação estratégica nas redes sociais",
      ],
      icon: Users,
    },
    {
      title: "Gestora de Tecnologia e Comunicação",
      organization: "Instituto da Reserva Musical",
      period: "dez/2023 – atual",
      description: [
        "Manutenção do site institucional e criação de sistemas internos",
        "Gestão de redes sociais e identidade visual",
        "Apoio à diretoria na estruturação técnica e digital da banda",
        "Contribuição para a profissionalização da organização",
      ],
      icon: Heart,
    },
  ]

  return (
    <section id="voluntario" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e2e] mb-4">Trabalho Voluntário</h2>
          <div className="w-20 h-1 bg-[#6c7086] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerWork.map((work, index) => {
            const IconComponent = work.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-[#6c7086] p-3 rounded-lg mr-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1e1e2e] mb-2">{work.title}</h3>
                    <p className="text-[#6c7086] font-medium mb-2">{work.organization}</p>
                    <p className="text-sm text-gray-500 mb-4">{work.period}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {work.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start text-sm">
                      <span className="w-2 h-2 bg-[#6c7086] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
