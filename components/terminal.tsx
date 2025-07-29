"use client"

import { useState, useEffect } from "react"

interface TerminalProps {
  onComplete: () => void
}

export default function Terminal({ onComplete }: TerminalProps) {
  const [text, setText] = useState("")
  const fullText = `> Initializing system...\n> Loading portfolio assets...\n> Establishing secure connection...\n> Welcome to Debasis Biswas's portfolio\n> Starting interface...`

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      setText(fullText.substring(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(typing)
        setTimeout(onComplete, 1000)
      }
    }, 50)

    return () => clearInterval(typing)
  }, [fullText, onComplete])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="terminal-window w-full max-w-2xl">
        <div className="terminal-header">
          <div className="terminal-circle bg-terminal-red"></div>
          <div className="terminal-circle bg-terminal-yellow"></div>
          <div className="terminal-circle bg-terminal-green"></div>
          <div className="ml-4 text-sm text-terminal-green">portfolio.sh</div>
        </div>
        <div className="terminal-content h-96">
          <pre className="font-mono whitespace-pre-line">
            {text}
            {text.length < fullText.length && <span className="terminal-cursor"></span>}
          </pre>
        </div>
      </div>
    </div>
  )
}
