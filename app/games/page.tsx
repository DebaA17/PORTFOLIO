import Link from "next/link";

export default function GamesPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Games</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/games/tic-tac-toe" className="text-blue-600 hover:underline text-xl">Tic-Tac-Toe</Link>
        </li>
      </ul>
      <p className="mt-8 text-gray-600">Play Tic-Tac-Toe below. The game is fully client-side and Netlify compatible.</p>
    </main>
  );
}
