"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 opacity-0" ref={sectionRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About me</h2>
          <div className="h-1 w-24 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-0" ref={contentRef}>
          {/* Education */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-400">
                <img 
                  src="https://img.icons8.com/?size=100&id=73815&format=png&color=000000" 
                  alt="Education"
                  className="w-6 h-6"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-white">
                Bachelor of Science in Computer Engineering 
              </p>
              <p className="text-white-200 font-semibold mt-1">Pamantasan Ng Lungsod Ng Maynila (2022-2025)</p>
            </div>
          </div>

          {/* Professional Info */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-400">
                <img 
                  src="https://img.icons8.com/?size=100&id=fZ5Vka2rfii4&format=png&color=2C7A7B" 
                  alt="Skills"
                  className="w-6 h-6"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Skills</h3>
              <p className="text-white-100">Cloud Development, Server-side Applications, Full-stack Development</p>
              <p className="text-cyan-200 font-semibold mt-1">Java • Python • JavaScript • AWS</p>
              <p className="text-white-200 text-sm mt-2">Passionate about building scalable applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
