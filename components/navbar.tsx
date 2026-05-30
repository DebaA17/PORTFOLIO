"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react" // Added MessageCircle icon

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const pillLinkClassName =
    "flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-400"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      const sections = ["home", "about", "skills", "portfolio", "contact"]
      let currentSection = "home"
      let maxVisibleHeight = 0
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
          if (visibleHeight > maxVisibleHeight && visibleHeight > 0) {
            maxVisibleHeight = visibleHeight
            currentSection = sectionId
          }
        }
      }
      setActiveSection(currentSection)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  const navItems = [
    { id: "labs", label: "Labs", external: true, href: "https://labs.debasisbiswas.in", icon: null },
    { id: "certifications", label: "Certifications", external: true, href: "/certifications", icon: null },
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
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
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={pillLinkClassName}
                style={{ fontWeight: 700 }}
              >
                {item.icon}
                {item.label}
              </a>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={pillLinkClassName}
                style={{
                  transform: activeSection === item.id ? "translateY(-1px)" : "none",
                  boxShadow: activeSection === item.id ? "0 0 0 1px rgba(96, 165, 250, 0.45), 0 10px 25px rgba(37, 99, 235, 0.28)" : undefined,
                }}
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
                <a
                  key={item.id}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={pillLinkClassName}
                  style={{ fontWeight: 700 }}
                >
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={pillLinkClassName}
                  style={{
                    justifyContent: "flex-start",
                    boxShadow: activeSection === item.id ? "0 0 0 1px rgba(96, 165, 250, 0.45), 0 10px 25px rgba(37, 99, 235, 0.28)" : undefined,
                  }}
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
