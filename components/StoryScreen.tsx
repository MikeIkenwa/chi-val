import React from 'react';
import { motion } from 'framer-motion';
import { StoryContent } from '../types';
import { TextReveal } from './TextReveal';
import { ArrowRight } from 'lucide-react';

interface StoryScreenProps {
  data: StoryContent;
  onNext: () => void;
}

export const StoryScreen: React.FC<StoryScreenProps> = ({ data, onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center space-y-8"
    >
      {data.headline && (
        <div className="font-serif text-3xl md:text-4xl text-blush tracking-wide">
          <TextReveal text={data.headline} delay={0.2} speed={0.1} />
        </div>
      )}

      <div className="font-sans text-lg md:text-xl font-light leading-relaxed text-cream/90 min-h-[120px]">
        {data.subtext && <TextReveal text={data.subtext} delay={1.5} speed={0.03} />}
      </div>

      <motion.button
        onClick={onNext}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 4, duration: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-3 bg-wine border border-rosegold/30 rounded-full text-rosegold font-medium tracking-widest uppercase text-sm flex items-center gap-2 group shadow-[0_0_15px_rgba(183,110,121,0.2)] hover:shadow-[0_0_25px_rgba(183,110,121,0.5)] transition-all duration-300"
      >
        <span>{data.cta || "Continue"}</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};