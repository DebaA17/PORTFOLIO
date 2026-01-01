export const dynamic = 'force-static';
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
return (
<main className="min-h-screen text-white relative overflow-hidden">
{/* Static background gradient (no animation / no particles) */}
<div className="fixed inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 bg-soft-animate"></div>
</div>

<div className="relative z-10">
<Navbar />
<Hero />
<About />
<Skills />
<Projects />
<Contact />
<Footer />
</div>
</main>
)
}