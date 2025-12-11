"use client"

import { useState, useEffect, useRef } from "react"
import ProjectCard from "./project-card"

const projectsData = [
  {
    id: 1,
    title: "Barangay 496 Website",
    description:
      "A comprehensive municipal website for Barangay 496 providing information about local services, events, and government activities.",
    tags: ["Website"],
    techStack: ["Node", "Express.js", "CSS", "MongoDB"],
    image: "/images/brgy-pic.png",
    links: [{ label: "GitHub", url: "https://github.com/AlFrancis-Dagaang/Barangay-496-Website.git" }],
  },
  {
    id: 2,
    title: "Telco Churn Prediction",
    description:
      "Telco churn prediction system using machine learning, deployed as a serverless container on AWS Lambda.",
    tags: ["Website", "Cloud", "Data"],
    techStack: ["AWS", "Python", "Scikit-learn", "JavaScript", "HTML", "CSS"],
    image: "/images/telco-pic.png",
    links: [
      { label: "Live Demo", url: "https://d2sfu0oyx3c5vl.cloudfront.net/" },
      { label: "GitHub", url: "https://github.com/AlFrancis-Dagaang/telecom-churn-prediction.git" },
      { label: "LinkedIn", url: "https://www.linkedin.com/posts/al-francis-daga-ang-734043348_aws-randomforest-serverless-activity-7401916360131551232-o_l4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFbb3FgB-nqAPS0JnBtEgOh8hFVsT55ODiE" },
      { label: "Medium", url: "https://medium.com/@dagaang.alfrancis/building-a-serverless-telco-churn-prediction-system-on-aws-29a07a994d9e" },
    ],
  },
  {
    id: 3,
    title: "AWS Automated Data Pipeline for Dengue Outbreak Prediction",
    description:
      "Automated AWS Data Pipeline for Dengue Outbreak Prediction and containerized workflow built using modern AWS cloud services.",
    tags: ["Cloud", "Data"],
    techStack: ["AWS", "Docker", "GitHub", "Python"],
    image: "/images/pipeline-pic.png",
    links: [
      { label: "GitHub", url: "https://github.com/AlFrancis-Dagaang/dengue-outbreak-prediction-pipeline.git" },
      { label: "LinkedIn", url: "#" },
    ],
  },
  {
    id: 4,
    title: "NimbusDrop",
    description:
      " REST API file storage system built with Spring Boot that provides secure file upload, download, and management capabilities.",
    tags: ["REST API"],
    techStack: ["Java", "Spring Boot", "MySQL"],
    image: "/images/nimbus-pic.png",
    links: [{ label: "GitHub", url: "https://github.com/AlFrancis-Dagaang/nimbusdrop.git" }],
  },
  {
    id: 5,
    title: "Library Admin System",
    description:
      "A traditional library management system built with Java Servlets that provides complete CRUD operations.",
    tags: ["REST API"],
    techStack: ["Java", "Servlet", "MySQL"],
    image: "/images/lib-pic.png",
    links: [{ label: "GitHub", url: "https://github.com/AlFrancis-Dagaang/libadmin-api.git" }],
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const sectionRef = useRef(null)

  const filters = ["All", "Website", "Cloud", "Data", "REST API"]
  const filteredProjects =
    activeFilter === "All" ? projectsData : projectsData.filter((project) => project.tags.includes(activeFilter))

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

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 opacity-0" ref={sectionRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Projects</h2>
          <div className="h-1 w-24 bg-teal-600 mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-teal-600 text-white shadow-lg"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
