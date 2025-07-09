"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import { useInView } from "react-intersection-observer"

export default function Home() {
  // Initialize intersection observer for animations
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
    <div className="bg-[#0a0a14] min-h-screen">
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
    </div>
  )
}