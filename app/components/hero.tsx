"use client";
export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Banner Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-purple-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#6c7086]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto relative z-10 p-11">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e1e2e] mb-6">
              Letícia Boza
              <span className="block text-[#6c7086]">Assumpção</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed">
              Analista de Qualidade de Software | Desenvolvedora | Comunicadora
              Digital
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Apaixonada por tecnologia, cultura e comunidades. Especializada em
              garantia de qualidade de software e desenvolvimento web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() =>
                  document
                    .getElementById("experiencia")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#1e1e2e] text-white px-8 py-3 rounded-lg hover:bg-[#2a2a3a] transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Ver Experiência
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-[#6c7086] text-[#6c7086] px-8 py-3 rounded-lg hover:bg-[#6c7086] hover:text-white transition-colors duration-200"
              >
                Entre em Contato
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#6c7086]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200/40 rounded-full blur-xl"></div>

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-[#6c7086]/10 to-purple-100/50 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-[#6c7086]/20 to-purple-200/30 rounded-2xl flex items-center justify-center">
                  <img
                    src="/img/perfil1.png"
                    alt="Letícia Boza Assumpção"
                    className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
