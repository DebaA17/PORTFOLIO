export default function Footer() {
  return (
    <footer className="bg-[#0a0a14] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 space-x-4">
            <a
              href="https://www.buymeacoffee.com/debasisbiswas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold shadow hover:bg-yellow-300 transition-colors border border-black"
              style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}
            >
              <span className="mr-2" role="img" aria-label="coffee">☕</span>
              Buy me a coffee
            </a>
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
          </div>
        </div>
      </div>
    </footer>
  )
}
