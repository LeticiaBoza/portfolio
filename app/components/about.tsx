export default function About() {
  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e2e] mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-[#6c7086] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#1e1e2e] mb-4">Profissional Multidisciplinar</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sou uma profissional apaixonada por tecnologia com sólida experiência em Quality Assurance e
                desenvolvimento de software. Minha jornada combina conhecimento técnico com habilidades de comunicação,
                permitindo-me atuar efetivamente em equipes multidisciplinares.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Atualmente trabalho como Analista de Testes Nível 2 na Orange Testing, onde desenvolvo estratégias de
                automação e garanto a qualidade de software em projetos diversos. Também contribuo ativamente para
                comunidades de tecnologia e projetos sociais.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-[#1e1e2e] mb-2">Foco Principal</h4>
                <p className="text-gray-600">Quality Assurance & Automação de Testes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-[#1e1e2e] mb-2">Especialidades</h4>
                <p className="text-gray-600">Testes BDD, API Testing, Desenvolvimento Web</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-[#1e1e2e] mb-2">Interesses</h4>
                <p className="text-gray-600">Tecnologia, Comunidades, Projetos Sociais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
