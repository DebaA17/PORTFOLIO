"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Initialize skill bar animations
  useEffect(() => {
    if (skillsInView) {
      const skillBars = document.querySelectorAll(".skill-progress")
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        if (width) {
          setTimeout(() => {
            ;(bar as HTMLElement).style.width = width
          }, 200)
        }
      })
    }
  }, [skillsInView])

  return (
    <main className="min-h-screen animated-gradient text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="particles-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />

        <div ref={aboutRef} className={`section-transition ${aboutInView ? "in-view" : ""}`}>
          <About />
        </div>

        <div ref={skillsRef} className={`section-transition ${skillsInView ? "in-view" : ""}`}>
          <Skills />
        </div>

        <div ref={projectsRef} className={`section-transition ${projectsInView ? "in-view" : ""}`}>
          <Projects />
        </div>

        <div ref={contactRef} className={`section-transition ${contactInView ? "in-view" : ""}`}>
          <Contact />
        </div>

        <Footer />
      </div>
    </main>
  )
}
