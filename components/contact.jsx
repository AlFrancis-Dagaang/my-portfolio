"use client"

import { useEffect, useRef, useState } from "react"

const contactLinks = [
  {
    label: "Email",
    value: "dagaang.alfrancish@gmail.com",
    icon: "https://img.icons8.com/?size=100&id=12623&format=png&color=2C7A7B",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/al-francis-daga-ang",
    url: "https://www.linkedin.com/in/al-francis-daga-ang-734043348/",
    icon: "https://img.icons8.com/?size=100&id=8808&format=png&color=2C7A7B",
  },
  {
    label: "GitHub",
    value: "github.com/AlFrancis-Dagaang",
    url: "https://github.com/AlFrancis-Dagaang",
    icon: "https://img.icons8.com/?size=100&id=12599&format=png&color=2C7A7B",
  },
  {
    label: "Phone",
    value: "+639608208888",
    icon: "https://img.icons8.com/?size=100&id=jShwZ2RCyPSO&format=png&color=2C7A7B",
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const contactsRef = useRef(null)
  const [copiedIndex, setCopiedIndex] = useState(null)

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
    if (contactsRef.current) observer.observe(contactsRef.current)

    return () => observer.disconnect()
  }, [])

  const handleClick = async (contact, index) => {
    // If it has a URL (LinkedIn/GitHub), open it
    if (contact.url) {
      window.open(contact.url, "_blank", "noopener,noreferrer")
    } else {
      // If no URL (Email/Phone), copy to clipboard
      try {
        await navigator.clipboard.writeText(contact.value)
        setCopiedIndex(index)
        setTimeout(() => setCopiedIndex(null), 2000) // Reset after 2 seconds
      } catch (err) {
        console.error("Failed to copy:", err)
      }
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 opacity-0" ref={sectionRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <div className="h-1 w-24 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0" ref={contactsRef}>
          {contactLinks.map((contact, index) => (
            <button
              key={index}
              onClick={() => handleClick(contact, index)}
              className="group flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 hover:border-teal-600 cursor-pointer text-left"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={contact.icon} 
                  alt={contact.label}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-semibold text-slate-900 text-center group-hover:text-teal-600 transition-colors">
                {contact.label}
              </h3>
              <p className="text-sm text-slate-600 text-center break-all group-hover:text-teal-600 transition-colors">
                {copiedIndex === index ? "✓ Copied!" : contact.value}
              </p>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-600 text-sm">© 2025 Al Francis H. Daga-ang. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}