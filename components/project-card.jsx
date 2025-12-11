"use client"

import { useEffect, useRef } from "react"

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

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

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={cardRef} className="opacity-0 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden bg-slate-200">
          <img
            src={project.image || "/images/brgy-pic.png"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-300"
              >
                {link.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
