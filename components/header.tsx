"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "home", label: "~/home" },
    { name: "about", label: "~/about" },
    { name: "skills", label: "~/skills" },
    { name: "projects", label: "~/projects" },
    { name: "contact", label: "~/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-primary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-terminal-green font-bold text-xl glow">debasis@portfolio:~$</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveSection(item.name)}
                className={`text-sm hover:text-terminal-green transition-colors ${
                  activeSection === item.name ? "text-terminal-green glow" : "text-gray-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-terminal-green">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-primary">
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveSection(item.name)
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left py-2 ${
                  activeSection === item.name ? "text-terminal-green glow" : "text-gray-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
