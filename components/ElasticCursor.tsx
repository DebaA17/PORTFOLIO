"use client";
import { useEffect, useRef, useState } from 'react';

export default function ElasticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [shape, setShape] = useState<'circle' | 'egg'>('circle');
  useEffect(() => {
    const handleEnter = () => setShape('egg');
    const handleLeave = () => setShape('circle');
    const hoverables = Array.from(document.querySelectorAll('a,button,[role="button"],input,textarea,.cursor-pointer'));
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });
    return () => {
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    let raf: number;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.22;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.22;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x - 18}px, ${pos.current.y - 18}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 4}px, ${mouse.current.y - 4}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  // Hide system cursor only on mobile/touch devices (pointer: coarse)
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media (pointer: coarse) {
        html, body, * {
          cursor: none !important;
        }
        *:hover, *:active, *:focus {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Outer circle */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: shape === 'egg' ? 44 : 36,
          height: 36,
          borderRadius: shape === 'circle' ? '50%' : '50% 50% 45% 45% / 60% 60% 40% 40%',
          border: '2.5px solid #a259ff',
          background: 'rgba(162,89,255,0.08)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.18s cubic-bezier(.7,1.7,.7,1), border-radius 0.18s cubic-bezier(.7,1.7,.7,1), border-color 0.2s, background 0.2s',
          mixBlendMode: 'exclusion',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: shape === 'egg' ? 12 : 8,
          height: 8,
          borderRadius: shape === 'circle' ? '50%' : '50% 50% 45% 45% / 60% 60% 40% 40%',
          background: '#a259ff',
          pointerEvents: 'none',
          zIndex: 10000,
          boxShadow: '0 0 8px 2px #a259ff55',
          transition: 'width 0.18s cubic-bezier(.7,1.7,.7,1), border-radius 0.18s cubic-bezier(.7,1.7,.7,1)',
        }}
      />
    </>
  );
}
