"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          AI Engineer & Full Stack Developer
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Building smart, scalable, and AI-powered web experiences. Passionate about delivering intelligent digital
          solutions through modern frameworks and automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded hover:bg-muted transition-colors"
          >
            View Projects
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-foreground text-foreground font-medium rounded hover:bg-card transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
