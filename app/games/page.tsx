
export const dynamic = 'force-static';
import Link from "next/link";

export default function GamesPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-indigo-700 drop-shadow-sm">
            🎮 Games
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            A collection of interactive games built for the web.
          </p>
        </header>

        {/* Games Grid */}
        <section className="grid gap-8 sm:grid-cols-2">
          {/* Tic Tac Toe */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition">
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-2">
                Tic-Tac-Toe
              </h2>
              <p className="text-gray-600 mb-6">
                A classic strategy game. Play against a friend and test your logic
                skills in this clean, responsive version.
              </p>
            </div>
            <Link href="/games/tic-tac-toe">
              <button className="w-full py-3 text-xl font-bold text-blue-700 bg-blue-100 rounded-xl border-2 border-blue-300 hover:bg-blue-200 hover:scale-[1.02] transition">
                Play Game
              </button>
            </Link>
          </div>

          {/* Car Racing */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition">
            <div>
              <h2 className="text-3xl font-bold text-green-700 mb-2">
                Car Racing
              </h2>
              <p className="text-gray-600 mb-6">
                A fast-paced racing experience. Go fullscreen, push your limits,
                and aim for the best lap time.
              </p>
            </div>
            <Link href="/games/racing">
              <button className="w-full py-3 text-xl font-bold text-green-700 bg-green-100 rounded-xl border-2 border-green-300 hover:bg-green-200 hover:scale-[1.02] transition">
                Start Racing
              </button>
            </Link>
          </div>
        </section>

        {/* Footer note */}
        <p className="text-center text-gray-500 mt-12">
          More games coming soon 🚀
        </p>
      </div>
    </main>
  );
}
