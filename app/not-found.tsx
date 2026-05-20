"use client"

import { useEffect, useState } from "react"
import { Shield, Terminal, AlertTriangle, Compass } from "lucide-react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    setMounted(true)

    const updateTime = () => setCurrentTime(new Date().toLocaleString())
    updateTime()
    const timeInterval = setInterval(updateTime, 1000)

    return () => clearInterval(timeInterval)
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

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-4xl w-full space-y-8 relative z-10">
        <div className="relative text-center space-y-8">
          <div>
            <h1 className="text-8xl md:text-9xl font-bold text-red-400 font-mono tracking-wider relative">
              4<span className="inline-block animate-pulse">0</span>4
              <div className="absolute inset-0 text-green-400 opacity-20 blur-sm">
                4<span className="inline-block animate-pulse">0</span>4
              </div>
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl text-green-400 flex items-center justify-center gap-2">
              <Shield className="w-6 h-6 animate-spin" />
              <span>PAGE NOT FOUND</span>
            </h2>
            <p className="text-green-300 text-lg">
              The page you are looking for does not exist or has been moved.
            </p>
            <p className="text-green-300">
              Use the shortcuts below to get back on track.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* System Status */}
            <div className="border border-green-400/30 rounded p-4 bg-black/30 backdrop-blur-sm">
              <div className="text-green-400 mb-2 font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                SYSTEM STATUS
              </div>
              <div className="space-y-1 text-green-300 text-sm">
                <div className="flex justify-between">
                  <span>Date & Time:</span>
                  <span className="text-green-400 animate-pulse">{currentTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Security:</span>
                  <span className="text-green-400 animate-pulse">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span>Firewall:</span>
                  <span className="text-green-400 animate-pulse">ENABLED</span>
                </div>
                <div className="flex justify-between">
                  <span>Monitoring:</span>
                  <span className="text-green-400 animate-pulse">ONLINE</span>
                </div>
              </div>
            </div>

            {/* Recovery Guide */}
            <div className="border border-yellow-400/30 rounded p-4 bg-yellow-400/5 backdrop-blur-sm">
              <div className="text-yellow-400 mb-2 font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                RECOVERY GUIDE
              </div>
              <div className="space-y-2 text-yellow-300 text-sm">
                <div>
                  <div className="text-yellow-400 font-semibold">{">"} Check the route:</div>
                  <div className="text-yellow-200">The page may have moved or expired.</div>
                </div>
                <div>
                  <div className="text-yellow-400 font-semibold">{">"} Try again:</div>
                  <div className="text-yellow-200">Refresh or navigate from the homepage.</div>
                </div>
                <div>
                  <div className="text-yellow-400 font-semibold">{">"} Need help?</div>
                  <div className="text-yellow-200">Use the contact form for a quick response.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="border border-green-400/30 rounded p-4 bg-black/30 backdrop-blur-sm">
              <div className="text-green-400 mb-2 font-bold flex items-center gap-2">
                <Compass className="w-4 h-4" />
                QUICK NAVIGATION
              </div>
              <div className="space-y-1 text-green-300 text-sm">
                <div className="flex justify-between">
                  <span>Home:</span>
                  <a className="text-green-400 hover:text-green-200" href="/">/</a>
                </div>
                <div className="flex justify-between">
                  <span>Certifications:</span>
                  <a className="text-green-400 hover:text-green-200" href="/certifications">/certifications</a>
                </div>
                <div className="flex justify-between">
                  <span>Resume:</span>
                  <a className="text-green-400 hover:text-green-200" href="/resume">/resume</a>
                </div>
                <div className="flex justify-between">
                  <span>Games:</span>
                  <a className="text-green-400 hover:text-green-200" href="/games">/games</a>
                </div>
              </div>
            </div>
            <div className="border border-green-400/30 rounded p-4 bg-black/30 backdrop-blur-sm">
              <div className="text-green-400 mb-2 font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                SYSTEM INTEGRITY
              </div>
              <div className="space-y-1 text-green-300 text-sm">
                <div className="flex justify-between">
                  <span>Route Scan:</span>
                  <span className="text-green-400">COMPLETE</span>
                </div>
                <div className="flex justify-between">
                  <span>Cache State:</span>
                  <span className="text-green-400">CLEAN</span>
                </div>
                <div className="flex justify-between">
                  <span>Signal:</span>
                  <span className="text-green-400">STABLE</span>
                </div>
                <div className="flex justify-between">
                  <span>Recovery:</span>
                  <span className="text-green-400">READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
