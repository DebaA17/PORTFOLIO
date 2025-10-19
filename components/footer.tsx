import { useEffect, useRef } from "react";
export default function Footer() {
  const bmcRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!bmcRef.current) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js";
    script.setAttribute("data-name", "bmc-button");
    script.setAttribute("data-slug", "debasisbiswas");
    script.setAttribute("data-color", "#FFDD00");
    script.setAttribute("data-emoji", "☕");
    script.setAttribute("data-font", "Comic");
    script.setAttribute("data-text", "Buy me a coffee");
    script.setAttribute("data-outline-color", "#000000");
    script.setAttribute("data-font-color", "#000000");
    script.setAttribute("data-coffee-color", "#ffffff");
    bmcRef.current.appendChild(script);
    return () => {
      if (bmcRef.current) {
        bmcRef.current.innerHTML = "";
      }
    };
  }, []);
  return (
    <footer className="bg-[#0a0a14] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} <span className="text-blue-500">Debasis Biswas</span>. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/DebaA17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/debasis-biswas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
            <a href="mailto:contact@debasisbiswas.me" className="text-gray-400 hover:text-blue-500 transition-colors">
              Email
            </a>
            <a href="/privacy-policy" className="text-gray-400 hover:text-blue-500 transition-colors">
              Privacy Policy
            </a>
            <div ref={bmcRef} />
          </div>
        </div>
      </div>
    </footer>
  )
}
