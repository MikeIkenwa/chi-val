import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface YesScreenProps {
  onNext?: () => void;
}

export const YesScreen: React.FC<YesScreenProps> = ({ onNext }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Fire confetti
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#FADADD', '#B76E79', '#FFF'] });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#FADADD', '#B76E79', '#FFF'] });
    }, 250);

    // Show button after a few seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center text-center space-y-6 w-full"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
        transition={{ type: "spring", delay: 0.2 }}
        className="text-rosegold mb-4"
      >
        <Heart size={80} fill="#B76E79" />
      </motion.div>

      <h1 className="font-serif text-5xl text-blush drop-shadow-[0_0_10px_rgba(250,218,221,0.5)]">
        She said YES.
      </h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="font-sans text-lg text-cream/90 max-w-xs"
      >
        And in that moment, the stars probably clapped. Because the love of my life chose me back.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        className="mt-8 p-4 w-full"
      >
        <p className="font-serif italic text-xl text-rosegold mb-8">
          Happy Valentine’s Day, my forever.
        </p>

        {showButton && onNext && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="px-6 py-3 bg-wine/80 border border-rosegold rounded-full text-cream text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(183,110,121,0.3)] animate-pulse"
          >
            Send me a message 💌
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};