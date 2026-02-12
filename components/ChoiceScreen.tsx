import React from 'react';
import { motion } from 'framer-motion';
import { StoryContent } from '../types';
import { TextReveal } from './TextReveal';

interface ChoiceScreenProps {
  data: StoryContent;
  onChoice: (path: 'A' | 'B') => void;
}

export const ChoiceScreen: React.FC<ChoiceScreenProps> = ({ data, onChoice }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center space-y-10"
    >
      {/* Headlines */}
      <div className="space-y-4">
        <h1 className="font-serif text-4xl text-blush">
          <TextReveal text={data.headline || ""} delay={0.5} />
        </h1>
        <p className="font-sans text-cream/80 text-lg">
          <TextReveal text={data.subtext || ""} delay={2.5} />
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="pt-4"
      >
        <p className="font-serif italic text-xl text-rosegold mb-6">
          {data.question}
        </p>

        <div className="flex flex-col gap-4 w-full">
          {data.choices?.map((choice, idx) => (
            <motion.button
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 5 + (idx * 0.3) }}
              onClick={() => onChoice(choice.path)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-4 border border-rosegold/40 bg-darkromance/50 backdrop-blur-sm rounded-xl text-cream/90 font-light font-sans shadow-[0_0_15px_rgba(183,110,121,0.15)] hover:shadow-[0_0_25px_rgba(183,110,121,0.4)] transition-all duration-300"
            >
              {choice.text}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};