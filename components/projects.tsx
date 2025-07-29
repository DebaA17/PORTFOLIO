"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [showComingSoon, setShowComingSoon] = useState(true)

  const projects = [
    {
      title: "Network Security Analyzer",
      description: "A tool for analyzing network traffic and identifying potential security threats.",
      image: "/placeholder.svg?height=300&width=400",
      category: "security",
      tags: ["Python", "Cybersecurity", "Networking"],
      github: "#",
      demo: "#",
    },
    {
      title: "Personal Blog Platform",
      description: "A full-stack blog platform built with React and Node.js.",
      image: "/placeholder.svg?height=300&width=400",
      category: "web",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Cloud Resource Manager",
      description: "An Azure-based application for managing cloud resources efficiently.",
      image: "/placeholder.svg?height=300&width=400",
      category: "cloud",
      tags: ["Azure", "JavaScript", "Cloud"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-commerce Dashboard",
      description: "Admin dashboard for managing products, orders, and customers.",
      image: "/placeholder.svg?height=300&width=400",
      category: "web",
      tags: ["React", "Chart.js", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
  ]

  const filteredProjects = showComingSoon
    ? []
    : filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-[#0a0a14]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "web", "security", "cloud"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === category ? "bg-blue-600 text-white" : "bg-[#111827] text-gray-300 hover:bg-blue-600/20"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111827] rounded-lg overflow-hidden hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* Project image */}
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />

                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-blue-900/80 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
                <div className="absolute inset-2 bg-blue-500/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Projects Coming Soon</h3>
              <p className="text-gray-400 mb-6">
                I'm currently working on some exciting projects that will be showcased here soon. Check back later for
                updates!
              </p>
              <div className="inline-block border border-blue-500 rounded-md p-4 hover-lift hover-glow transition-all">
                <div className="flex items-center gap-2 text-blue-400">
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>In Development</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
