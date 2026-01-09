"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const skillCategories = [
    {
      id: "programming",
      label: "Programming",
      skills: [
        { name: "C", icon: "c" },
        { name: "HTML", icon: "html5" },
        { name: "CSS", icon: "css" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Python", icon: "python" },
        { name: "Bash", icon: "gnubash" },
      ],
    },
    {
      id: "frameworks",
      label: "Frameworks",
      skills: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Express", icon: "express" },
        { name: "Next.js", icon: "nextdotjs" },
      ],
    },
    {
      id: "databases",
      label: "Databases",
      skills: [
        { name: "MySQL", icon: "mysql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "SQLite", icon: "sqlite" },
      ],
    },
    {
      id: "security",
      label: "Security",
      skills: [
        { name: "Network Security", icon: "cisco" },
        { name: "Penetration Testing", icon: "parrotsecurity" },
        { name: "Security Auditing", icon: "owasp" },
        { name: "Cryptography", icon: "letsencrypt" },
      ],
    },
    {
      id: "cloud",
      label: "Cloud & DevOps",
      skills: [
        { name: "Linux", icon: "linux" },
        { name: "Azure" },
        { name: "VPS (Compute)", icon: "digitalocean" },
        { name: "Docker", icon: "docker" },
        { name: "Ansible", icon: "ansible" },
        { name: "CI/CD (DevOps)", icon: "githubactions" },
        { name: "Caddy Server", icon: "caddy" },
        { name: "Nginx", icon: "nginx" },
        { name: "Cloud Security", icon: "googlecloud" },
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

        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
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
                    <div className="flex items-center gap-2 text-sm sm:text-base">
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
