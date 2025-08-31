"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Home,
  Search,
  Mail,
  ArrowLeft,
  Terminal,
  Shield,
  AlertTriangle,
} from "lucide-react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [glitchText, setGlitchText] = useState("404")
  const [scanningText, setScanningText] = useState("Scanning")
  const [currentTime, setCurrentTime] = useState("")
  const [geoData, setGeoData] = useState({
    ip: "Detecting...",
    city: "",
    region: "",
    country: "",
    org: "",
  })

  useEffect(() => {
    setMounted(true)

    // Time updater
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleString())
    }
    updateTime()
    const timeInterval = setInterval(updateTime, 1000)

    // Glitch effect
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
      setTimeout(() => setGlitchText(originalText), 100)
    }, 2000)

    // Scanning dots animation
    const scanningStates = ["Scanning", "Scanning.", "Scanning..", "Scanning..."]
    let scanIndex = 0
    const scanInterval = setInterval(() => {
      setScanningText(scanningStates[scanIndex])
      scanIndex = (scanIndex + 1) % scanningStates.length
    }, 500)

    // Get IP and location info from ipapi.co
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setGeoData({
          ip: data.ip || "Unavailable",
          city: data.city || "Unknown",
          region: data.region || "Unknown",
          country: data.country_name || "Unknown",
          org: data.org || "Unknown ISP",
        })
      })
      .catch(() =>
        setGeoData({
          ip: "Unavailable",
          city: "N/A",
          region: "N/A",
          country: "N/A",
          org: "N/A",
        })
      )

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
      {/* Background Grid */}
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

      {/* Top & bottom scan lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-4xl w-full space-y-8 relative z-10">
        {/* Terminal Box */}
        <div className="border border-green-400 rounded-lg p-6 bg-black/90 backdrop-blur-sm shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              <span className="ml-4 text-sm text-green-300">security@debasis-portfolio:~$</span>
            </div>
            <div className="text-xs text-green-600">{currentTime}</div>
          </div>

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

        {/* Main 404 */}
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

          {/* System Status + Threat Analysis */}
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
                  <span className="text-yellow-400 font-bold animate-pulse">{geoData.ip}</span>
                </div>
                <div className="flex justify-between">
                  <span>{">"} Location:</span>
                  <span className="text-yellow-400">{geoData.city}, {geoData.region}, {geoData.country}</span>
                </div>
                <div className="flex justify-between">
                  <span>{">"} ISP:</span>
                  <span className="text-yellow-400">{geoData.org}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trace Log */}
          <div className="mt-4 text-xs text-green-600 text-center italic animate-pulse">
            <span className="text-green-400">[ TRACE LOG ]</span> {geoData.ip} | {geoData.city}, {geoData.region} via {geoData.org}
          </div>

          {/* Navigation, Footer etc. — you can keep your existing JSX here as-is */}
        </div>
      </div>
    </div>
  )
}
