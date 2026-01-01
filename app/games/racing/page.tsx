"use client";
export const dynamic = 'force-static';
import { useEffect, useRef, useState } from "react";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const CAR_WIDTH = 60;
const CAR_HEIGHT = 120;
const OBSTACLE_WIDTH = 60;
const OBSTACLE_HEIGHT = 120;
const OBSTACLE_SPEED = 6;
const CAR_SPEED = 10;

function getRandomLane() {
  // 3 lanes
  const lanes = [
    GAME_WIDTH / 6 - CAR_WIDTH / 2,
    GAME_WIDTH / 2 - CAR_WIDTH / 2,
    (5 * GAME_WIDTH) / 6 - CAR_WIDTH / 2,
  ];
  return lanes[Math.floor(Math.random() * lanes.length)];
}

export default function RacingGame() {
  const [carX, setCarX] = useState(GAME_WIDTH / 2 - CAR_WIDTH / 2);
  const [obstacles, setObstacles] = useState([
    { x: getRandomLane(), y: -OBSTACLE_HEIGHT },
  ]);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  function goFullscreen() {
    if (gameRef.current && gameRef.current.requestFullscreen) {
      gameRef.current.requestFullscreen();
    }
  }

  useEffect(() => {
    if (!playing) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" || e.key === "a") {
        setCarX((x) => Math.max(0, x - GAME_WIDTH / 3));
      } else if (e.key === "ArrowRight" || e.key === "d") {
        setCarX((x) => Math.min(GAME_WIDTH - CAR_WIDTH, x + GAME_WIDTH / 3));
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [playing]);

  useEffect(() => {
    if (!playing) return;
    function loop() {
      setObstacles((obs) => {
        let newObs = obs.map((o) => ({ ...o, y: o.y + OBSTACLE_SPEED }));
        // Add new obstacle if needed
        if (newObs[newObs.length - 1].y > 200) {
          newObs.push({ x: getRandomLane(), y: -OBSTACLE_HEIGHT });
        }
        newObs = newObs.filter((o) => o.y < GAME_HEIGHT);
        return newObs;
      });
      setScore((s) => s + 1);
      animationRef.current = requestAnimationFrame(loop);
    }
    animationRef.current = requestAnimationFrame(loop);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [playing]);

  useEffect(() => {
    if (!playing) return;
    for (const o of obstacles) {
      if (
        o.y + OBSTACLE_HEIGHT > GAME_HEIGHT - CAR_HEIGHT - 10 &&
        o.y < GAME_HEIGHT - 10 &&
        Math.abs(o.x - carX) < CAR_WIDTH
      ) {
        setPlaying(false);
        setGameOver(true);
      }
    }
  }, [obstacles, carX, playing]);

  function startGame() {
    setCarX(GAME_WIDTH / 2 - CAR_WIDTH / 2);
    setObstacles([{ x: getRandomLane(), y: -OBSTACLE_HEIGHT }]);
    setScore(0);
    setPlaying(true);
    setGameOver(false);
  }

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-3xl font-extrabold mb-4 text-green-700">Car Racing Game</h2>
      <div className="mb-4 text-lg text-gray-700">Score: <span className="font-bold">{score}</span></div>
      <div
        ref={gameRef}
        className="relative bg-gray-900 border-4 border-green-400 rounded-lg mb-6 overflow-hidden"
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
      >
        {/* Road lines */}
        {[1, 2].map((i) => (
          <div
            key={i}
            className="absolute bg-white opacity-30"
            style={{
              left: (GAME_WIDTH * i) / 3 - 5,
              top: 0,
              width: 10,
              height: GAME_HEIGHT,
            }}
          />
        ))}
        {/* Player car */}
        <div
          className="absolute bg-blue-500 border-4 border-white rounded-lg shadow-lg flex items-center justify-center"
          style={{
            left: carX,
            top: GAME_HEIGHT - CAR_HEIGHT - 10,
            width: CAR_WIDTH,
            height: CAR_HEIGHT,
            zIndex: 2,
          }}
        >
          <span className="text-5xl">🚗</span>
        </div>
        {/* Obstacles */}
        {obstacles.map((o, idx) => (
          <div
            key={idx}
            className="absolute bg-red-600 border-4 border-white rounded-lg flex items-center justify-center"
            style={{
              left: o.x,
              top: o.y,
              width: OBSTACLE_WIDTH,
              height: OBSTACLE_HEIGHT,
              zIndex: 1,
            }}
          >
            <span className="text-5xl">🚕</span>
          </div>
        ))}
        {/* Game over overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-10">
            <div className="text-4xl font-extrabold text-white mb-4">Game Over</div>
            <div className="text-2xl text-green-300 mb-6">Score: {score}</div>
            <button
              className="px-6 py-3 bg-green-600 text-white text-xl rounded shadow-lg hover:bg-green-700"
              onClick={startGame}
            >
              Restart
            </button>
          </div>
        )}
        {/* Start overlay */}
        {!playing && !gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center z-10">
            <button
              className="px-6 py-3 bg-green-600 text-white text-xl rounded shadow-lg hover:bg-green-700 mb-4"
              onClick={startGame}
            >
              Start Race
            </button>
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              onClick={goFullscreen}
            >
              Fullscreen
            </button>
            <div className="mt-4 text-white text-lg">Use <b>←/→</b> or <b>A/D</b> to move</div>
          </div>
        )}
      </div>
      <p className="text-gray-500 mt-2">Dodge the cars, survive as long as you can, and try fullscreen for a real racing feel!</p>
    </div>
  );
}
