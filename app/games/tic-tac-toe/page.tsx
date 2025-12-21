"use client";
import { useState } from "react";

const initialBoard = Array(9).fill(null);

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState<Array<string | null>>(initialBoard);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const winner = calculateWinner(board);

  function handleClick(i: number): void {
    if (board[i] || winner) return;
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function restart(): void {
    setBoard(initialBoard);
    setXIsNext(true);
  }

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-4xl font-extrabold mb-8">Tic-Tac-Toe</h2>
      <div className="grid grid-cols-3 gap-4 mb-8" style={{ width: '480px', height: '480px' }}>
        {board.map((square: string | null, i: number) => (
          <button
            key={i}
            className="w-40 h-40 text-7xl font-extrabold border-4 border-gray-700 bg-white hover:bg-gray-100 flex items-center justify-center"
            onClick={() => handleClick(i)}
            style={{ color: square === 'X' ? '#2563eb' : square === 'O' ? '#dc2626' : '#d1d5db' }}
          >
            {square ? square : ''}
          </button>
        ))}
      </div>
      <div className="mb-6">
        {winner
          ? <span className="text-green-600 text-2xl font-semibold">Winner: {winner}</span>
          : board.every(Boolean)
            ? <span className="text-yellow-600 text-2xl font-semibold">Draw!</span>
            : <span className="text-blue-600 text-2xl">Next Player: {xIsNext ? "X" : "O"}</span>
        }
      </div>
      <button className="px-6 py-3 bg-blue-600 text-white text-xl rounded shadow-lg" onClick={restart}>Restart</button>
    </div>
  );
}
