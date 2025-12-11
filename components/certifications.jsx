"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Certifications() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold text-slate-900 mb-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Certifications
          </h2>
          <div
            className={`h-1 w-16 bg-teal-500 mx-auto transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-lg hover:border-cyan-300 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-6">
              {/* Badge Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/images/ccp-badge.png"
                    alt="AWS Certified Cloud Practitioner Badge"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">AWS Certified Cloud Practitioner</h3>
                <p className="text-teal-600 font-semibold mb-1 text-sm">Credential ID: 596a4f10cae5428696e8d93b36affe15</p>
                <p className="text-slate-600 text-sm mb-3">Issued: June 21, 2025</p>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  Certification demonstrating foundational knowledge of AWS cloud services, including core services,
                  security, billing, and architecture concepts.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://media.licdn.com/dms/image/v2/D4E2DAQGRbM9Rhwm1bg/profile-treasury-image-shrink_800_800/B4EZg9m8ruGwAg-/0/1753380278413?e=1766044800&v=beta&t=LGJjEiXaNYyIWmrEVNV2-5_-Kv_Vt_0LXKi-MVsAPHk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors text-sm font-medium"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}