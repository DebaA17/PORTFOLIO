export default function Footer() {
  return (
    <footer className="bg-[#0a0a14] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Left section: Buy me a coffee + copyright */}
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 gap-2 md:gap-4">
            <a
              href="https://www.buymeacoffee.com/debasisbiswas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold shadow hover:bg-yellow-300 transition-colors border border-black text-base sm:text-sm"
              style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}
            >
              <span className="mr-2" role="img" aria-label="coffee">☕</span>
              Buy me a coffee
            </a>
            <p className="text-gray-400 text-center sm:text-left text-sm">
              © {new Date().getFullYear()} <span className="text-blue-500">Debasis Biswas</span>. All rights reserved.
            </p>
          </div>
          {/* Right section: Social/Privacy links */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <a
              href="https://github.com/DebaA17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors text-base sm:text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/debasis-biswas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors text-base sm:text-sm"
            >
              LinkedIn
            </a>
            <a href="mailto:contact@debasisbiswas.me" className="text-gray-400 hover:text-blue-500 transition-colors text-base sm:text-sm">
              Email
            </a>
            <a href="/privacy-policy" className="text-gray-400 hover:text-blue-500 transition-colors text-base sm:text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
