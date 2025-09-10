  // Use the same background image for all projects
  const projectBg = "/add-project-bg.jpg";
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const [repos, setRepos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://api.github.com/users/DebaA17/repos?sort=updated")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories")
        return res.json()
      })
      .then((data) => {
  const excluded = ["DebaA17", "MY-DP", "chat-portfolio", "PYTHON_LAB", "golang-learning", "DemoLoginPage", "llm-chat-app-template", "Data_structure_LAB"];
  setRepos(data.filter((repo: any) => !excluded.includes(repo.name)))
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <section id="portfolio" className="py-20 bg-[#0a0a14]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-blue-400">Loading projects...</div>
        ) : error ? (
          <div className="text-center py-20 text-red-400">{error}</div>
        ) : repos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#181f2a] rounded-2xl overflow-hidden shadow-lg flex flex-col h-full"
              >
                <div
                  className="relative h-40 sm:h-48 flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${projectBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <img
                    src={repo.owner?.avatar_url || "/placeholder.svg"}
                    alt={repo.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-4 border-blue-500 shadow-lg z-10"
                    style={{ position: 'relative' }}
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white truncate">{repo.name}</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-2 flex-1 line-clamp-3">{repo.description || "No description provided."}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {repo.language && (
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">No public repositories found.</div>
        )}
      </div>
    </section>
  );
}
