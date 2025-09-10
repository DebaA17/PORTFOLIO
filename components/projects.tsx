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
  // Exclude profile README, MY-DP, and any other repos you want
  const excluded = ["DebaA17", "MY-DP", "chat-portfolio", "PYTHON_LAB", "golan-learning", "DemoLoginPage"];
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111827] rounded-lg overflow-hidden hover-lift"
              >
                <div className="relative h-48 overflow-hidden flex items-center justify-center bg-[#222]">
                  <img
                    src={repo.owner?.avatar_url || "/placeholder.svg"}
                    alt={repo.name}
                    className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 shadow-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                  <p className="text-gray-400 mb-4">{repo.description || "No description provided."}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.language && (
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-colors"
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
