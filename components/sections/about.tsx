"use client"

import { useEffect, useRef } from "react"
import { Code2, Brain, Zap, Cpu } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    period: "Jun 2025 - Present",
    company: "5C Network",
    role: "Full Stack Developer",
    description: "Developing healthcare modules using React, Next.js, PostgreSQL, and CI/CD pipelines.",
    icon: Code2,
    image: "/healthcare-technology-dashboard.jpg",
  },
  {
    period: "Jan 2024 - Jun 2024",
    company: "Magnus Vista Labs",
    role: "Deep Learning Intern",
    description: "Developed deep learning models for text extraction from bills and advanced OCR systems.",
    icon: Brain,
    image: "/deep-learning-neural-network.jpg",
  },
  {
    period: "Aug 2023 - Oct 2023",
    company: "Advantech Safe Life",
    role: "AI Software Development Intern",
    description: "Engineered AI systems on Linux to assist visually impaired users with voice and image processing.",
    icon: Zap,
    image: "/assistive-technology-ai.jpg",
  },
  {
    period: "Aug 2021 - Sep 2022",
    company: "Larsen & Toubro Defense",
    role: "R&D Department",
    description: "Designed and analyzed products using 3D CAD software and conducted product lifecycle management.",
    icon: Cpu,
    image: "/cad-design-engineering.jpg",
  },
]

export default function About() {
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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div data-animate>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm an AI Engineer and Full Stack Developer passionate about delivering intelligent digital solutions
              through modern frameworks and automation. With expertise in Next.js, React, Node.js, and AI APIs, I build
              scalable applications that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey spans from deep learning and computer vision to full-stack web development and robotics. I'm
              particularly interested in the intersection of AI and web technologies, creating smart dashboards,
              automation systems, and intelligent user experiences.
            </p>
          </div>

          <div data-animate className="space-y-4">
            <div className="p-6 rounded border border-border hover:border-foreground transition-colors">
              <h3 className="font-semibold mb-3 text-foreground">Education</h3>
              <p className="text-foreground font-medium">B.Tech in AI and Data Science</p>
              <p className="text-muted-foreground text-sm mt-1">Coimbatore Institute of Technology (CGPA: 8.5)</p>
            </div>
            <div className="p-6 rounded border border-border hover:border-foreground transition-colors">
              <h3 className="font-semibold mb-3 text-foreground">Interests</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Data Science • Machine Learning • Full Stack Development • Embedded Systems • Robotics & Automation
              </p>
            </div>
          </div>
        </div>

        <div data-animate>
          <h3 className="text-2xl font-bold text-foreground mb-8">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon
              return (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-40 w-full bg-gray-200 overflow-hidden">
                    <Image src={exp.image || "/placeholder.svg"} alt={exp.company} fill className="object-cover" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{exp.period}</p>
                        <h4 className="text-lg font-bold text-foreground mt-1">{exp.role}</h4>
                        <p className="text-sm font-semibold text-gray-700">{exp.company}</p>
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-gray-200">
                        <IconComponent size={20} className="text-gray-700" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
