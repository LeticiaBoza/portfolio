export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e1e2e] mb-6">Letícia Boza Assumpção</h1>
          <p className="text-xl sm:text-2xl text-[#6c7086] mb-8 max-w-4xl mx-auto leading-relaxed">
            Quality Assurance Analyst | Desenvolvedora | Comunicadora Digital
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Apaixonada por tecnologia, cultura e comunidades. Especializada em garantia de qualidade de software e
            desenvolvimento web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#experiencia"
              className="bg-[#1e1e2e] text-white px-8 py-3 rounded-lg hover:bg-[#2a2a3a] transition-colors duration-200"
            >
              Ver Experiência
            </a>
            <a
              href="#contato"
              className="border-2 border-[#6c7086] text-[#6c7086] px-8 py-3 rounded-lg hover:bg-[#6c7086] hover:text-white transition-colors duration-200"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
