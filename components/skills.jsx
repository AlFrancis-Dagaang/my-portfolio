"use client"

import { useEffect, useRef } from "react"

const skillsData = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000",
  },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Flask", icon: "https://img.icons8.com/?size=100&id=AqYCfGyGXlO7&format=png&color=000000" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const skillsGridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            // Stagger animation for skill items
            if (entry.target === skillsGridRef.current) {
              const skills = entry.target.querySelectorAll(".skill-item")
              skills.forEach((skill, index) => {
                skill.style.animationDelay = `${index * 50}ms`
                skill.classList.add("animate-fade-in-up")
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (skillsGridRef.current) observer.observe(skillsGridRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 opacity-0" ref={sectionRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Work Experience and Skills</h2>
          <div className="h-1 w-24 bg-teal-600 mx-auto"></div>
        </div>

        <div ref={skillsGridRef} className="grid grid-cols-3 md:grid-cols-5 gap-6 opacity-0">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-item flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-110 hover:shadow-lg opacity-0"
            >
              <img
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <p className="text-sm md:text-base font-semibold text-slate-700 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
