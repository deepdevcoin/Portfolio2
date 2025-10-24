"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "CampusConnect",
    description:
      "A full-stack campus engagement platform with modules for canteen, marketplace, clubs, hostel, messaging, and analytics. Built with secure authentication and real-time features.",
    stack: ["Next.js", "Supabase", "TypeScript", "React"],
    live: "https://campus.deepdev.co.in/auth",
    github: "https://github.com/deepdevcoin/CampusConnect",
    featured: true,
    image: "/campus-management-platform.jpg",
  },
  {
    title: "CGPA Calculator",
    description:
      "A web application for students to calculate and visualize academic performance with real-time GPA analytics. Supports multi-semester calculations.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://cgpa-calculator.deepdev.co.in/",
    github: "https://github.com/deepdevcoin/CGPA_Calculator",
    featured: true,
    image: "/academic-calculator-dashboard.jpg",
  },
  {
    title: "AI Portfolio",
    description:
      "An interactive personal portfolio showcasing dynamic data visualization and smooth Framer Motion animations with Three.js 3D elements.",
    stack: ["Next.js", "Tailwind CSS", "Three.js"],
    live: "https://portfolio.deepdev.co.in/",
    github: "https://github.com/deepdevcoin/Portfolio",
    featured: true,
    image: "/interactive-portfolio-3d.jpg",
  },
  {
    title: "Intelligent Recommendations & Insights",
    description:
      "A full-stack project combining Next.js frontend, Tailwind CSS styling, a Python backend, and Hugging Face models for AI-powered product recommendations and overviews.",
    stack: ["Next.js", "Tailwind CSS", "Python backend", "Hugging Face model"],
    live: "https://ai-frontend.deepdev.co.in/",
    github: "https://github.com/deepdevcoin/ai-fronted",
    featured: true,
    image: "/recommendation.jpg",
  },
  {
    title: "AI Bill Reader",
    description:
      "Deep learning model for OCR-based text extraction from bills and documents. Engineered at Magnus Vista Labs for document automation.",
    stack: ["Python", "TensorFlow", "OpenCV"],
    github: "#",
    featured: false,
    image: "/ocr-document-scanning.jpg",
  },
  {
    title: "Assistive AI System",
    description:
      "Linux-based AI system for visually impaired assistance. Developed at Advantech Safe Life with voice and image processing capabilities.",
    stack: ["Python", "Linux", "AI/ML"],
    github: "#",
    featured: false,
    image: "/assistive-technology-ai.jpg",
  },
  {
    title: "VR Emergency Response Guide",
    description:
      "Browser-based VR first-aid training platform with AI chatbot, image analysis, real-time feedback, and 3D simulations.",
    stack: ["Unity WebGL", "Next.js", "Google Gemini AI"],
    github: "#",
    featured: false,
    image: "/vr-training-simulation.jpg",
  },
    {
    title: "Business Portfolio",
    description:
      "A professional business portfolio website designed to showcase company projects, services, and expertise effectively.",
    stack: ["Next.js", "Tailwind CSS", "React"],
    live: "https://business.deepdev.co.in/",
    github: "#", // Add repository URL if available
    featured: true,
    image: "/business-portfolio-website.jpg",
  },
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = containerRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16" data-animate>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground">
            A selection of my recent work showcasing full-stack development, AI/ML, and innovative solutions.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                data-animate
                className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40 w-full bg-gray-200 overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Featured Project</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-gray-700">
                        {tech}
                        {i < project.stack.length - 1 && ", "}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
                      >
                        Live Demo →
                      </Link>
                    )}
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
                    >
                      GitHub →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Section */}
        <div data-animate>
          <h3 className="text-2xl font-bold text-foreground mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-32 w-full bg-gray-200 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h4 className="font-bold text-foreground mb-2 text-lg">{project.title}</h4>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.stack.slice(0, 2).map((tech, i) => (
                        <span key={i} className="text-xs text-gray-700 font-medium">
                          {tech}
                          {i < Math.min(1, project.stack.length - 1) && ", "}
                        </span>
                      ))}
                      {project.stack.length > 2 && (
                        <span className="text-xs text-gray-600 font-medium">+{project.stack.length - 2}</span>
                      )}
                    </div>

                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1.5 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
                    >
                      View Code →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
