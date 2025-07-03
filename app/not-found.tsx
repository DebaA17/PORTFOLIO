"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [glitchText, setGlitchText] = useState("404")

  useEffect(() => {
    setMounted(true)

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

    return () => clearInterval(glitchInterval)
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
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
      </div>

      <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
        {/* Terminal Header */}
        <div className="border border-green-400 rounded-lg p-6 bg-black/80 backdrop-blur-sm shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            <span className="ml-4 text-sm text-green-300">terminal@portfolio:~$</span>
          </div>

          {/* Error Display */}
          <div className="text-left space-y-2 font-mono">
            <div className="text-red-400 text-2xl font-bold flex items-center gap-2">
              <span className="animate-pulse">⚠</span>
              <span>ERROR {glitchText}</span>
            </div>
            <div className="text-green-400">
              <span className="text-red-400">{">"}</span> Page not found in system directory
            </div>
            <div className="text-green-400">
              <span className="text-red-400">{">"}</span> Scanning available routes...
            </div>
            <div className="text-green-400">
              <span className="text-red-400">{">"}</span> Access denied to requested resource
            </div>
            <div className="text-yellow-400">
              <span className="text-red-400">{">"}</span> Initiating security protocols...
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-red-400 font-mono tracking-wider">
            <span className="inline-block animate-pulse">4</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: "0.2s" }}>
              0
            </span>
            <span className="inline-block animate-pulse" style={{ animationDelay: "0.4s" }}>
              4
            </span>
          </h1>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-green-400 animate-pulse">{">"} INTRUSION DETECTED</h2>
            <p className="text-green-300">The requested page does not exist in the system database.</p>
            <p className="text-green-300">Unauthorized access attempt has been logged.</p>
          </div>

          {/* System Info */}
          <div className="border border-green-400/30 rounded p-4 bg-green-400/5 text-left text-sm backdrop-blur-sm">
            <div className="text-green-400 mb-2 font-bold">SYSTEM STATUS:</div>
            <div className="space-y-1 text-green-300">
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
                <span className="text-green-400 animate-pulse">ON</span>
              </div>
              <div className="flex justify-between">
                <span>{">"} Threat Level:</span>
                <span className="text-yellow-400 animate-pulse">MEDIUM</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <div className="text-green-400 font-bold">AVAILABLE ACTIONS:</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 rounded font-mono transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/25"
              >
                {">"} RETURN TO HOME
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 rounded font-mono transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25"
              >
                {">"} REPORT ISSUE
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="text-xs text-green-600 pt-8 space-y-1 opacity-80">
            <div className="animate-pulse">DEBASIS BISWAS SECURITY SYSTEM v2.1.0</div>
            <div>© 2024 - ALL UNAUTHORIZED ACCESS MONITORED</div>
            <div className="text-red-400 animate-pulse">⚠ INTRUSION LOGGED TO SECURITY DATABASE</div>
          </div>
        </div>
      </div>

      {/* Scanning line effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  )
}
