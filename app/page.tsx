import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Experience from "./components/experience"
import Education from "./components/education"
import Skills from "./components/skills"
import Volunteer from "./components/volunteer"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Volunteer />
      <Footer />
    </main>
  )
}
