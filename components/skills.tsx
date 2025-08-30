"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Initialize skill bar animations
  useEffect(() => {
    if (inView) {
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
  }, [inView])

  const skillCategories = [
    {
      id: "programming",
      label: "Programming",
      skills: [
        { name: "C", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "Bash", level: 70 },
      ],
    },
    {
      id: "frameworks",
      label: "Frameworks",
      skills: [
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "Next.js", level: 65 },
      ],
    },
    {
      id: "databases",
      label: "Databases",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 65 },
        { name: "SQLite", level: 70 },
      ],
    },
    {
      id: "security",
      label: "Security",
      skills: [
        { name: "Network Security", level: 80 },
        { name: "Penetration Testing", level: 70 },
        { name: "Security Auditing", level: 65 },
        { name: "Cryptography", level: 60 },
      ],
    },
    {
      id: "cloud",
      label: "Cloud & DevOps",
      skills: [
        { name: "Linux", level: 95 },
        { name: "Azure", level: 70 },
        { name: "VPS (Compute)", level: 95 },
        { name: "Docker", level: 85 },
        { name: "Ansible", level: 70 },
        { name: "CI/CD (DevOps)", level: 85 },
        { name: "Caddy Server", level: 90 },
        { name: "Nginx", level: 95 },
        { name: "Cloud Security", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-[#0c0c1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <Tabs defaultValue="programming" className="w-full">
            <TabsList className="flex flex-wrap gap-2 bg-[#111827] p-1 rounded-lg mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between mb-2 flex-wrap">
                      <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-blue-500 text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width={`${skill.level}%`}></div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
