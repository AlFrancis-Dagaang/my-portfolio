"use client"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Certifications from "../components/certifications"

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  )
}
