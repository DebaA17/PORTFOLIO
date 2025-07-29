"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Server, Shield, Cpu } from "lucide-react"

export default function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-[#0a0a14]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="space-y-6">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-blue-500">
              BCA Student & Cybersecurity Enthusiast
            </motion.h3>

            <motion.p variants={itemVariants} className="text-gray-300">
              I'm a Bachelor of Computer Applications (BCA) student at B.P. Poddar Institute of Management and
              Technology, with a passion for cybersecurity, network engineering, and software development.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300">
              My journey in technology is driven by curiosity and a desire to build secure, efficient systems. I'm
              constantly learning and exploring new technologies to expand my skillset.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-gray-400">Name:</span>
                <span className="font-medium">Debasis Biswas</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400">College:</span>
                <span className="font-medium">B.P. Poddar Institute Of Management and Technology</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400">Stream:</span>
                <span className="font-medium">BCA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400">Session:</span>
                <span className="font-medium">2024-2028</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Interest areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#111827] p-6 rounded-lg hover-lift hover-glow transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-400">Full-stack web development with modern frameworks and technologies.</p>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg hover-lift hover-glow transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
              <p className="text-gray-400">Security research, penetration testing, and vulnerability assessment.</p>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg hover-lift hover-glow transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Network Engineering</h3>
              <p className="text-gray-400">Network architecture, protocols, and infrastructure management.</p>
            </div>

            <div className="bg-[#111827] p-6 rounded-lg hover-lift hover-glow transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Computing</h3>
              <p className="text-gray-400">Cloud infrastructure, services, and deployment strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
