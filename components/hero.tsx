"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown, Terminal } from "lucide-react"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Handle scroll down button click
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  // Initialize typewriter effect with improved speed
  useEffect(() => {
    const roles = ["Cybersecurity Enthusiast", "Network Engineering", "Linux Troubleshooter"]

    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false
    let textElement = document.getElementById("rotating-text")

    const type = () => {
      if (!textElement) {
        textElement = document.getElementById("rotating-text")
        if (!textElement) return
      }

      const currentRole = roles[roleIndex]

      if (isDeleting) {
        // Deleting text - faster deletion
        textElement.textContent = currentRole.substring(0, charIndex - 1)
        charIndex--

        // When deletion is complete
        if (charIndex === 0) {
          isDeleting = false
          roleIndex = (roleIndex + 1) % roles.length
          setTimeout(type, 300) // Shorter pause before typing next word
        } else {
          setTimeout(type, 30) // Faster deletion speed
        }
      } else {
        // Typing text - faster typing
        textElement.textContent = currentRole.substring(0, charIndex + 1)
        charIndex++

        // When typing is complete
        if (charIndex === currentRole.length) {
          isDeleting = true
          setTimeout(type, 1200) // Slightly shorter pause before deleting
        } else {
          // Variable typing speed - faster for better effect
          const typingSpeed = Math.random() * 40 + 30 // Between 30ms and 70ms
          setTimeout(type, typingSpeed)
        }
      }
    }

    // Start the typewriter effect
    const typewriterTimeout = setTimeout(type, 1000)

    // Clean up
    return () => {
      clearTimeout(typewriterTimeout)
      textElement = null
    }
  }, [])

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Simple particle background */}
        <div
          id="tsparticles"
          className="absolute inset-0 z-0 overflow-hidden"
        >
          {/* Simple CSS particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="simple-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Fallback background gradient in case particles fail */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] to-[#0c0c1a] z-[-1]"></div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center stagger-animation">
          {/* Profile image */}
          <div className="profile-image-container animate-float mb-8 group">
            <div className="profile-image-glow group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DEBASIS.jpg-cGsNmIEbGP4AphkJpHl8bmIw3mbWY6.jpeg"
              alt="Debasis Biswas - BCA Student and Cybersecurity Enthusiast"
              width={200}
              height={200}
              className="profile-image group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          {/* Greeting with animated hand wave */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="inline-block">
              <span className="inline-block animate-wave">👋</span> Hello, I'm{" "}
            </span>
            <span className="text-blue-500">Debasis</span>
            <span> Biswas</span>
          </h1>

          {/* Animated subtitle */}
          <div className="flex items-center justify-center gap-2 mb-8 h-8">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z"></path>
                <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z"></path>
              </svg>
            </div>
            <div className="text-xl text-gray-300 relative">
              a <span id="rotating-text" className="text-blue-400 font-medium"></span>
              <span className="absolute right-0 top-0 h-full w-[2px] bg-blue-500 animate-blink"></span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover-lift hover-glow transition-all"
            >
              Learn About Me
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-transparent border border-blue-500 text-blue-500 rounded-md hover-lift hover-glow transition-all"
            >
              Get In Touch
            </button>
            <a
              href="https://hello.debasisbiswas.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white rounded-md hover-lift hover-glow transition-all flex items-center gap-2 group hacker-button"
            >
              <Terminal size={18} className="group-hover:animate-pulse" />
              <span className="group-hover:glitch-text">Access Server</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToAbout}
        >
          <ChevronDown className="w-8 h-8 text-blue-500" />
        </div>
      </section>
    </>
  )
}
