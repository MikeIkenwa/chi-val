import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NoScreenProps {
  onRedeem: () => void;
}

export const NoScreen: React.FC<NoScreenProps> = ({ onRedeem }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'grayscale(100%)' }}
      animate={{ opacity: 1, filter: 'grayscale(50%)' }}
      className="flex flex-col items-center text-center space-y-6"
    >
      <h1 className="font-serif text-6xl text-white/20 mb-4">Oh.</h1>
      
      <p className="font-sans text-white/60 text-lg">
        My heart just did a dramatic slow-motion fall.
      </p>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="font-sans text-white/40 italic"
      >
        But even if you say no today… I’d still choose you tomorrow.
        <br/><br/>
        I’ll be here. Loving you anyway.
      </motion.p>

      {showButton && (
        <motion.button
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRedeem}
          className="mt-10 px-6 py-3 bg-blush text-wine font-bold rounded-xl shadow-[0_0_15px_rgba(250,218,221,0.4)] hover:shadow-[0_0_25px_rgba(250,218,221,0.6)] transition-all duration-300"
        >
          Okay okay… press YES 😌
        </motion.button>
      )}
    </motion.div>
  );
};