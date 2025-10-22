"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const services = [
  {
    title: "AI-Powered Web Development",
    description:
      "Build intelligent web applications with AI integration, chatbots, and machine learning models for enhanced user experiences.",
    features: ["LLM Integration", "Chatbots", "AI APIs", "Smart Automation"],
    image: "/ai-powered-web-development.jpg",
  },
  {
    title: "Full Stack Application Architecture",
    description:
      "Design and develop scalable full-stack applications using modern frameworks, databases, and cloud deployment strategies.",
    features: ["Next.js", "React", "Node.js", "Cloud Deployment"],
    image: "/full-stack-architecture.jpg",
  },
  {
    title: "Chatbot & RAG Integration",
    description:
      "Implement advanced chatbots with Retrieval-Augmented Generation for context-aware Q&A and document processing.",
    features: ["RAG Systems", "Vector DB", "Document Processing", "Context Awareness"],
    image: "/chatbot-rag-integration.jpg",
  },
  {
    title: "Automation & Smart Dashboards",
    description:
      "Create intelligent automation systems and real-time dashboards for data visualization and business intelligence.",
    features: ["Real-time Data", "Analytics", "Automation", "Visualization"],
    image: "/automation-dashboards.jpg",
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

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

    const elements = containerRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16" data-animate>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Services & Expertise</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Specialized services combining AI, full-stack development, and modern web technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-animate
              className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40 w-full overflow-hidden bg-muted">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs font-medium text-gray-700">
                      {feature}
                      {i < service.features.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
