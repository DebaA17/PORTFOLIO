

"use client"
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";


export default function HappyNewYear() {
  const [show, setShow] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [year, setYear] = useState<number | null>(null);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const outTimer = setTimeout(() => setAnimateOut(true), 3200);
    const hideTimer = setTimeout(() => setShow(false), 4000);
    function updateSize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    setYear(new Date().getFullYear());
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(outTimer);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  if (typeof window !== "undefined") {
    const now = new Date();
    const isJan1 = now.getMonth() === 0 && now.getDate() === 1;
    if (!isJan1 || !show) return null;
  } else {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.7)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        fontSize: "2.5rem",
        fontWeight: "bold",
        animation: "fadeIn 1s"
      }}
    >
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={350}
        gravity={0.35}
        initialVelocityY={15}
        recycle={false}
        run={show}
      />
      <span role="img" aria-label="party popper" style={{ fontSize: "4rem", animation: "drop 1s" }}>
        🎉
      </span>
      <div
        style={{
          margin: "1rem 0",
          animation: animateOut ? "dropOut 0.8s forwards" : "drop 1.2s",
          filter: animateOut ? "blur(8px)" : undefined,
        }}
      >
        Happy New Year{year ? ` ${year}` : ""}!
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes drop {
          0% { transform: translateY(-100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes dropOut {
          0% { opacity: 1; filter: blur(0); transform: translateY(0); }
          80% { opacity: 0.7; filter: blur(6px); }
          100% { opacity: 0; filter: blur(16px); transform: translateY(80px); }
        }
      `}</style>
    </div>
  );
}
