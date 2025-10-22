"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields")
      return
    }

    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section ref={containerRef} className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center" data-animate>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-animate className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to chat about AI and web
                development, feel free to reach out!
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              <a
                href="mailto:karthikeyan8346@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded hover:border-foreground transition-colors"
              >
                <div className="p-3 bg-background rounded">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">karthikeyan8346@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/karthikeyan-a-0a6b00245"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded hover:border-foreground transition-colors"
              >
                <div className="p-3 bg-background rounded">
                  <Linkedin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground font-medium">Karthikeyan A</p>
                </div>
              </a>

              <a
                href="https://github.com/deepdevcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded hover:border-foreground transition-colors"
              >
                <div className="p-3 bg-background rounded">
                  <Github className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="text-foreground font-medium">deepdevcoin</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div data-animate>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error Message */}
              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/30 rounded flex items-center gap-3">
                  <AlertCircle size={18} className="text-destructive flex-shrink-0" />
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-accent/10 border border-accent/30 rounded flex items-center gap-3">
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <p className="text-sm text-accent">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none h-32"
                  placeholder="Your message..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-3 bg-foreground text-background font-medium rounded hover:bg-muted transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
