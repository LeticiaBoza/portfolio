import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#1e1e2e] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades e colaborações. Entre em contato para discutirmos como posso
            contribuir com seu projeto.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a
            href="mailto:devleticiaboza@gmail.com"
            className="flex items-center gap-2 bg-[#6c7086] hover:bg-[#7c8096] px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <Mail size={20} />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/leticiaboza/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#6c7086] text-[#6c7086] hover:bg-[#6c7086] hover:text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/LeticiaBoza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#6c7086] text-[#6c7086] hover:bg-[#6c7086] hover:text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© 2025 Letícia Boza Assumpção. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
