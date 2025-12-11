"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonContainerRef = useRef(null)

  useEffect(() => {
    // Fade-in animations for hero elements
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

    if (titleRef.current) observer.observe(titleRef.current)
    if (subtitleRef.current) observer.observe(subtitleRef.current)
    if (buttonContainerRef.current) observer.observe(buttonContainerRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-white flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 opacity-0"
              style={{ animationDelay: "0s" }}
            >
              Al Francis H. <span className="text-teal-600">Daga-ang</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-2xl md:text-3xl text-slate-600 font-semibold mb-4 opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
               Full Stack & Cloud Developer
            </p>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed opacity-0" style={{ animationDelay: "0.2s" }}>
              I am a Cloud Developer proficient in Java, Python, and JavaScript, who likes building server-side apps
            </p>

            <div ref={buttonContainerRef} className="flex flex-wrap gap-4 opacity-0" style={{ animationDelay: "0.3s" }}>
              <a
                href="#about"
                className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Learn more
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Profile Photo */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-400 rounded-full blur-2xl opacity-20"></div>
              
              {/* Image with higher z-index */}
              <img
                src="/images/profile-pic.jpg"
                alt="Al Francis H. Daga-ang"
                className="relative z-10 w-full h-full rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
