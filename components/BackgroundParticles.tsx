import React, { useEffect, useState } from 'react';

interface BackgroundParticlesProps {
  visible?: boolean;
}

export const BackgroundParticles: React.FC<BackgroundParticlesProps> = ({ visible = true }) => {
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    // Generate static random particles
    // Using simple CSS animations for performance and smoothness
    const count = 15;
    const newParticles = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 20 + 10;
      return {
        id: i,
        style: {
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * -20}s`, // Start at different points in the cycle
          animationDuration: `${Math.random() * 10 + 15}s`, // Random duration between 15s and 25s
          width: `${size}px`,
          height: `${size}px`,
        }
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-50px] animate-float-up text-rosegold/20"
          style={p.style}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  );
};