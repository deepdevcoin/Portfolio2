"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    // { label: "Contact", href: "#contact" },
  ]

  const isActive = (section: string) => activeSection === section

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex justify-center pt-4 px-6">
        <div className="w-full max-w-2xl">
          <div className="relative bg-white/75 backdrop-blur-xl rounded-2xl border border-white/20 shadow-sm">
            <div className="flex justify-between items-center h-16 px-6">
              {/* Logo */}
              <Link
                href="#home"
                className="flex items-center gap-2 font-bold text-black hover:opacity-70 transition-opacity"
              >
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs font-bold">
                  KA
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-8 items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative group ${
                      isActive(item.href.slice(1)) ? "text-black" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:flex">
                <Link
                  href="#contact"
                  className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Get in touch
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black" aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-xl z-40"
          >
            <div className="flex flex-col gap-6 p-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-black hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="#contact"
                className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors w-fit"
                onClick={() => setIsOpen(false)}
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
