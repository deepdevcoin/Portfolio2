"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "CampusConnect",
    description:
      "Full-stack campus engagement platform with modules for canteen, marketplace, clubs, hostel, messaging, and analytics.",
    stack: ["Next.js", "Supabase", "TypeScript", "React"],
    live: "https://campus.deepdev.co.in/auth",
    github: "https://github.com/deepdevcoin/CampusConnect",
    featured: true,
    image: "/campus-management-platform.jpg",
  },
  {
    title: "CGPA Calculator",
    description:
      "Calculate and visualize academic performance with real-time GPA analytics for multi-semester calculations.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://cgpa-calculator.deepdev.co.in/",
    github: "https://github.com/deepdevcoin/CGPA_Calculator",
    featured: true,
    image: "/academic-calculator-dashboard.jpg",
  },
  {
    title: "AI Portfolio",
    description:
      "Interactive personal portfolio with dynamic visuals and Framer Motion + Three.js 3D animations.",
    stack: ["Next.js", "Tailwind CSS", "Three.js"],
    live: "https://portfolio.deepdev.co.in/",
    github: "https://github.com/deepdevcoin/Portfolio",
    featured: true,
    image: "/interactive-portfolio-3d.jpg",
  },
  {
    title: "Intelligent Recommendations",
    description:
      "Full-stack AI-powered recommendation system using Hugging Face, Python backend, and Next.js frontend.",
    stack: ["Next.js", "Tailwind CSS", "Python", "Hugging Face"],
    live: "https://ai-frontend.deepdev.co.in/",
    github: "https://github.com/deepdevcoin/ai-fronted",
    featured: true,
    image: "/recommendation.jpg",
  },
  {
    title: "AI Bill Reader",
    description:
      "OCR-based document automation system built with TensorFlow and OpenCV for text extraction.",
    stack: ["Python", "TensorFlow", "OpenCV"],
    github: "#",
    featured: false,
    image: "/ocr-document-scanning.jpg",
  },
  {
    title: "Assistive AI System",
    description:
      "Linux-based voice and vision system assisting visually impaired users through AI/ML processing.",
    stack: ["Python", "Linux", "AI/ML"],
    github: "#",
    featured: false,
    image: "/assistive-technology-ai.jpg",
  },
  {
    title: "VR Emergency Response",
    description:
      "Web-based VR first-aid training platform with real-time AI chatbot and image-based feedback.",
    stack: ["Unity WebGL", "Next.js", "Google Gemini AI"],
    github: "#",
    featured: false,
    image: "/vr-training-simulation.jpg",
  },
  {
    title: "Business Portfolio",
    description:
      "Professional portfolio website showcasing company projects, services, and expertise effectively.",
    stack: ["Next.js", "Tailwind CSS", "React"],
    live: "https://business.deepdev.co.in/",
    github: "#",
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
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-in")
        })
      },
      { threshold: 0.1 }
    )

    const elements = containerRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12" data-animate>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Projects</h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            Selected works showcasing my skills in full-stack development, AI/ML, and automation systems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white/5 overflow-hidden hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                data-animate
              >
                <div className="relative h-36 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600 leading-snug mb-3 line-clamp-3">{project.description}</p>

                  <div className="text-xs text-gray-500 mb-3">
                    {project.stack.join(", ")}
                  </div>

                  <div className="flex flex-wrap gap-2 text-sm">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 bg-black text-white rounded-md hover:bg-gray-800 transition"
                      >
                        Live →
                      </Link>
                    )}
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                    >
                      Code →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div data-animate>
          <h3 className="text-2xl font-semibold text-foreground mb-6">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white/5 overflow-hidden hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="text-base font-semibold mb-1">{project.title}</h4>
                    <p className="text-sm text-gray-600 mb-3 leading-snug line-clamp-2">{project.description}</p>

                    <div className="text-xs text-gray-500 mb-3">
                      {project.stack.slice(0, 2).join(", ")}
                      {project.stack.length > 2 && ` +${project.stack.length - 2}`}
                    </div>

                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-2.5 py-1 border border-gray-300 rounded-md hover:bg-gray-100 text-sm transition"
                    >
                      View →
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
