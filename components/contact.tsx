"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage("")

    try {
      // Client-side validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields")
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address")
      }

      // Alternative approach: Use EmailJS directly from the client
      // This is a fallback in case the API route doesn't work in the serverless environment
      if (typeof window !== "undefined" && window.location.hostname === "localhost") {
        // For local development, use the API route
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || "Failed to send message")
        }
      } else {
        // For production, use EmailJS directly
        // You'll need to add the EmailJS script to your project
        // <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

        // This is a simplified example - you would need to set up EmailJS properly
        const serviceId = "your_service_id"
        const templateId = "your_template_id"
        const userId = "your_user_id"

        // @ts-ignore - EmailJS is loaded via script tag
        await window.emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject || "New portfolio contact",
            message: formData.message,
          },
          userId,
        )
      }

      // Handle success
      setSubmitStatus("success")

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred")

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
        setErrorMessage("")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#0c0c1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-gray-400">
              Feel free to reach out for collaborations, opportunities, or just to chat about technology!
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:admin@debasisbiswas.me"
                className="flex items-center gap-4 p-4 bg-[#111827] rounded-lg hover-lift"
                whileHover={{ x: 5 }}
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400">admin@debasisbiswas.me</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/DebaA17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#111827] rounded-lg hover-lift"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Github className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-gray-400">github.com/DebaA17</p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/debasis-biswas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#111827] rounded-lg hover-lift"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-gray-400">linkedin.com/in/debasis-biswas</p>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-[#111827] p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            {/* Notification banner */}
            <div className="mb-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
              <p className="text-blue-400 font-medium">
                <strong>NB:</strong> This form is currently a placeholder for future implementations.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    disabled
                    className="w-full px-4 py-2 bg-[#0a0a14] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-60 cursor-not-allowed"
                    aria-disabled="true"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    disabled
                    className="w-full px-4 py-2 bg-[#0a0a14] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-60 cursor-not-allowed"
                    aria-disabled="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  disabled
                  className="w-full px-4 py-2 bg-[#0a0a14] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-60 cursor-not-allowed"
                  aria-disabled="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  disabled
                  rows={5}
                  className="w-full px-4 py-2 bg-[#0a0a14] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-60 cursor-not-allowed"
                  aria-disabled="true"
                ></textarea>
              </div>

              <button
                type="button"
                disabled
                className="w-full py-3 bg-blue-600/50 text-white/70 rounded-md flex items-center justify-center gap-2 cursor-not-allowed"
                aria-disabled="true"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
