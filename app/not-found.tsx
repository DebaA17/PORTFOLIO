"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Home, Search, Mail, ArrowLeft, Terminal, Shield, AlertTriangle } from "lucide-react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [glitchText, setGlitchText] = useState("404")
  const [scanningText, setScanningText] = useState("Scanning")
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    setMounted(true)

    // Update current time
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleString())
    }
    updateTime()
    const timeInterval = setInterval(updateTime, 1000)

    // Glitch effect for 404 text
    const glitchChars = "!<>-_\\/[]{}—=+*^?#________"
    const originalText = "404"

    const glitchInterval = setInterval(() => {
      let glitched = ""
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          glitched += originalText[i]
        }
      }
      setGlitchText(glitched)

      // Reset to original after short time
      setTimeout(() => setGlitchText(originalText), 100)
    }, 2000)

    // Scanning animation
    const scanningStates = ["Scanning", "Scanning.", "Scanning..", "Scanning..."]
    let scanIndex = 0
    const scanInterval = setInterval(() => {
      setScanningText(scanningStates[scanIndex])
      scanIndex = (scanIndex + 1) % scanningStates.length
    }, 500)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(scanInterval)
      clearInterval(timeInterval)
    }
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0a0a14] flex items-center justify-center">
        <div className="text-green-400 font-mono">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a14] text-green-400 font-mono flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Scanning lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-4xl w-full space-y-8 relative z-10">
        {/* Terminal Header */}
        <div className="border border-green-400 rounded-lg p-6 bg-black/90 backdrop-blur-sm shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <div
                className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              <span className="ml-4 text-sm text-green-300">security@debasis-portfolio:~$</span>
            </div>
            <div className="text-xs text-green-600">{currentTime}</div>
          </div>

          {/* Error Display */}
          <div className="text-left space-y-2 font-mono">
            <div className="text-red-400 text-xl font-bold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 animate-pulse" />
              <span>SECURITY ALERT - ERROR {glitchText}</span>
            </div>
            <div className="text-green-400">
              <span className="text-red-400">{">"}</span> Unauthorized access attempt detected
            </div>
            <div className="text-green-400">
              <span className="text-red-400">{">"}</span> Resource not found in secure directory
            </div>
            <div className="text-yellow-400">
              <span className="text-red-400">{">"}</span> {scanningText} for available routes...
            </div>
            <div className="text-blue-400">
              <span className="text-red-400">{">"}</span> Initiating redirect protocols...
            </div>
          </div>
        </div>

        {/* Main 404 Display */}
        <div className="text-center space-y-8">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold text-red-400 font-mono tracking-wider relative">
              <span className="inline-block animate-pulse">4</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: "0.2s" }}>
                0
              </span>
              <span className="inline-block animate-pulse" style={{ animationDelay: "0.4s" }}>
                4
              </span>
              <div className="absolute inset-0 text-green-400 opacity-20 blur-sm">
                <span className="inline-block animate-pulse" style={{ animationDelay: "0.1s" }}>
                  4
                </span>
                <span className="inline-block animate-pulse" style={{ animationDelay: "0.3s" }}>
                  0
                </span>
                <span className="inline-block animate-pulse" style={{ animationDelay: "0.5s" }}>
                  4
                </span>
              </div>
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl text-green-400 flex items-center justify-center gap-2">
              <Shield className="w-6 h-6 animate-spin" />
              <span>ACCESS DENIED</span>
            </h2>
            <p className="text-green-300 text-lg">The requested page has been moved to a secure location.</p>
            <p className="text-green-300">Your attempt has been logged for security analysis.</p>
          </div>

          {/* System Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="border border-green-400/30 rounded p-4 bg-green-400/5 backdrop-blur-sm">
              <div className="text-green-400 mb-2 font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                SYSTEM STATUS
              </div>
              <div className="space-y-1 text-green-300 text-sm">
                <div className="flex justify-between">
                  <span>{">"} Security:</span>
                  <span className="text-green-400 animate-pulse">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span>{">"} Firewall:</span>
                  <span className="text-green-400 animate-pulse">ENABLED</span>
                </div>
                <div className="flex justify-between">
                  <span>{">"} Monitoring:</span>
                  <span className="text-green-400 animate-pulse">ONLINE</span>
                </div>
              </div>
            </div>

            <div className="border border-yellow-400/30 rounded p-4 bg-yellow-400/5 backdrop-blur-sm">
              <div className="text-yellow-400 mb-2 font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                THREAT ANALYSIS
              </div>
              <div className="space-y-1 text-yellow-300 text-sm">
                <div className="flex justify-between">
                  <span>{">"} Risk Level:</span>
                  <span className="text-yellow-400 animate-pulse">LOW</span>
                </div>
                <div className="flex justify-between">
                  <span>{">"} Source IP:</span>
                  <span className="text-yellow-400">LOGGED</span>
                </div>
                <div className="flex justify-between">
                  <span>{">"} Action:</span>
                  <span className="text-green-400">REDIRECT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Options */}
          <div className="space-y-6">
            <div className="text-green-400 font-bold text-lg">AUTHORIZED NAVIGATION OPTIONS:</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/"
                className="group px-6 py-4 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 rounded font-mono transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/25 flex items-center gap-2"
              >
                <Home className="w-5 h-5 group-hover:animate-pulse" />
                <span>{">"} HOME</span>
              </Link>

              <a
                href="https://blog.debasisbiswas.me"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 rounded font-mono transform hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25 flex items-center gap-2"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
                <span>{">"} BLOG</span>
              </a>

              <Link
                href="/#contact"
                className="group px-6 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 rounded font-mono transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25 flex items-center gap-2"
              >
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
                <span>{">"} CONTACT</span>
              </Link>

              <a
                href="https://hello.debasisbiswas.me"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded font-mono transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 flex items-center gap-2"
              >
                <Terminal className="w-5 h-5 group-hover:animate-pulse" />
                <span>{">"} SERVER</span>
              </a>
            </div>

            {/* Quick Actions */}
            <div className="pt-4">
              <div className="text-green-400 font-bold mb-4">QUICK ACTIONS:</div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.history.back()}
                  className="group px-6 py-3 border border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black transition-all duration-300 rounded font-mono transform hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:animate-pulse" />
                  <span>{">"} GO BACK</span>
                </button>

                <Link
                  href="/#portfolio"
                  className="group px-6 py-3 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition-all duration-300 rounded font-mono transform hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <Search className="w-5 h-5 group-hover:animate-pulse" />
                  <span>{">"} EXPLORE PROJECTS</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Security Footer */}
          <div className="text-xs text-green-600 pt-8 space-y-2 opacity-80 border-t border-green-400/20">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 animate-pulse" />
              <span>DEBASIS BISWAS SECURITY SYSTEM</span>
            </div>
            <div>© 2025 - ALL UNAUTHORIZED ACCESS MONITORED & LOGGED</div>
            <div className="text-red-400 animate-pulse flex items-center justify-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>SECURITY INCIDENT LOGGED TO DATABASE</span>
            </div>
            <div className="text-blue-400">For legitimate access requests, contact: admin@debasisbiswas.me</div>
          </div>
        </div>
      </div>
    </div>
  )
}
