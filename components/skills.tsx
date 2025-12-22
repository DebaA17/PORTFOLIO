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
        { name: "C", icon: "c", level: 85 },
        { name: "HTML", icon: "html5", level: 90 },
        { name: "CSS", icon: "css", level: 85 },
        { name: "JavaScript", icon: "javascript", level: 80 },
        { name: "Python", icon: "python", level: 75 },
        { name: "Bash", icon: "gnubash", level: 70 },
      ],
    },
    {
      id: "frameworks",
      label: "Frameworks",
      skills: [
        { name: "React", icon: "react", level: 80 },
        { name: "Node.js", icon: "nodedotjs", level: 75 },
        { name: "Express", icon: "express", level: 70 },
        { name: "Next.js", icon: "nextdotjs", level: 65 },
      ],
    },
    {
      id: "databases",
      label: "Databases",
      skills: [
        { name: "MySQL", icon: "mysql", level: 80 },
        { name: "MongoDB", icon: "mongodb", level: 65 },
        { name: "SQLite", icon: "sqlite", level: 70 },
      ],
    },
    {
      id: "security",
      label: "Security",
      skills: [
        { name: "Network Security", icon: "cisco", level: 80 },
        { name: "Penetration Testing", icon: "parrotsecurity", level: 70 },
        { name: "Security Auditing", icon: "owasp", level: 65 },
        { name: "Cryptography", icon: "letsencrypt", level: 60 },
      ],
    },
    {
      id: "cloud",
      label: "Cloud & DevOps",
      skills: [
        { name: "Linux", icon: "linux", level: 95 },
        { name: "Azure", level: 70 },
        { name: "VPS (Compute)", icon: "digitalocean", level: 95 },
        { name: "Docker", icon: "docker", level: 85 },
        { name: "Ansible", icon: "ansible", level: 70 },
        { name: "CI/CD (DevOps)", icon: "githubactions", level: 85 },
        { name: "Caddy Server", icon: "caddy", level: 90 },
        { name: "Nginx", icon: "nginx", level: 95 },
        { name: "Cloud Security", icon: "googlecloud", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-14 sm:py-20 bg-[#0c0c1a]">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div ref={ref} className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
          <Tabs defaultValue="programming" className="w-full">
            <TabsList className="flex overflow-x-auto no-scrollbar gap-2 bg-[#111827] p-1 rounded-lg mb-6 sm:mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm min-w-[120px] px-2 py-1"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-5 sm:space-y-6 mt-3 sm:mt-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="mb-5 sm:mb-6">
                    <div className="flex flex-col xs:flex-row xs:justify-between gap-1 mb-1 sm:mb-2 text-sm sm:text-base items-center">
                      <span className="flex items-center gap-2 font-medium">
                        {skill.icon && (
                          <img
                            src={`https://cdn.simpleicons.org/${skill.icon}`}
                            alt={skill.name}
                            className="w-6 h-6 inline-block align-middle"
                            loading="lazy"
                          />
                        )}
                        {skill.name}
                      </span>
                      <span className="text-blue-500">{skill.level}%</span>
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
