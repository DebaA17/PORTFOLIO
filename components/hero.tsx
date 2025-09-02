"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll events for navbar styling and section detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "portfolio", "contact"]

      // Find the section that is currently in view
      let currentSection = "home"
      let maxVisibleHeight = 0

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Calculate how much of the section is visible in the viewport
          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)

          // If this section has more visible area than previous ones, it's the active one
          if (visibleHeight > maxVisibleHeight && visibleHeight > 0) {
            maxVisibleHeight = visibleHeight
            currentSection = sectionId
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check for active section
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Approximate height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Update active section immediately for better UX
      setActiveSection(sectionId)
    }
  }

  // Navigation items, including new Chat button
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
    // [CHAT BUTTON]
    { id: "chat", label: "Chat", external: true, href: "https://chat.debasisbiswas.me" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a14]/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center" onClick={() => scrollToSection("home")}>
          <span className="text-blue-500">Debasis</span>
          <span className="text-white">Biswas</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) =>
            item.external ? (
              // [CHAT BUTTON]
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-sm font-medium transition-colors text-blue-500 hover:text-blue-400"
                style={{ display: "flex", alignItems: "center" }}
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection === item.id ? "active" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a14]/95 border-b border-gray-800 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) =>
              item.external ? (
                // [CHAT BUTTON]
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left py-2 px-4 rounded-md transition-colors bg-blue-500/20 text-blue-500"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 px-4 rounded-md transition-colors ${
                    activeSection === item.id ? "bg-blue-500/20 text-blue-500" : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </header>
  )
}
