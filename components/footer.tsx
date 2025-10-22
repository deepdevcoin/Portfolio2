"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: "Projects", href: "#projects" },
      { label: "Services", href: "#services" },
      { label: "Tech Stack", href: "#services" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Resume", href: "#" },
    ],
    Social: [
      { label: "GitHub", href: "https://github.com/karthikeyan83462", icon: Github },
      { label: "LinkedIn", href: "https://linkedin.com/in/karthikeyan-a-0a6b00245", icon: Linkedin },
      { label: "Email", href: "mailto:karthikeyan8346@gmail.com", icon: Mail },
    ],
  }

  const LinkItem = ({ href, label, icon: Icon }: { href: string; label: string; icon?: any }) => (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2 }}
      className="text-sm text-gray-600 hover:text-black transition-colors flex items-center gap-2"
    >
      {Icon && <Icon size={16} />}
      {label}
    </motion.a>
  )

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs font-bold">
                KA
              </div>
              <span className="font-bold text-black">Karthikeyan</span>
            </div>
            <p className="text-sm text-gray-600">
              AI Engineer & Full Stack Developer building digital intelligence for your brand.
            </p>
            <div className="flex gap-3 pt-2">
              <motion.a
                href="https://github.com/karthikeyan83462"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/karthikeyan-a-0a6b00245"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:karthikeyan8346@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-black mb-4 text-sm">Product</h3>
            <ul className="space-y-3">
              {footerLinks.Product.map((link) => (
                <li key={link.href}>
                  <LinkItem href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-black mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.href}>
                  <LinkItem href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-black mb-4 text-sm">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.Social.map((link) => (
                <li key={link.href}>
                  <LinkItem href={link.href} label={link.label} icon={link.icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© {currentYear} Karthikeyan A. All rights reserved.</p>
          <p className="text-sm text-gray-600">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
