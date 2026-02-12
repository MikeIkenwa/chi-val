import React from 'react';
import { motion } from 'framer-motion';
import { StoryContent } from '../types';
import { TextReveal } from './TextReveal';

interface FinalProposalProps {
  data: StoryContent;
  onResponse: (accepted: boolean) => void;
}

export const FinalProposal: React.FC<FinalProposalProps> = ({ data, onResponse }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center text-center w-full max-h-[85vh] overflow-y-auto custom-scrollbar"
    >
      <div className="space-y-6 text-left w-full bg-wine/10 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
        <h2 className="font-serif text-3xl text-rosegold mb-4">
            <TextReveal text={data.headline || ""} delay={0.5} />
        </h2>
        
        <div className="font-sans font-light text-cream/90 leading-7 space-y-4 text-sm md:text-base whitespace-pre-line">
           {/* We render the big block of text. We won't use staggered reveal for the whole block as it's too slow for reading long text, just a gentle fade. */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2.5, duration: 2 }}
           >
             {data.subtext}
           </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 6, duration: 1 }}
        className="mt-10 w-full text-center space-y-8 pb-10"
      >
        <p className="font-serif text-2xl md:text-3xl text-blush italic">
          {data.question}
        </p>

        <div className="flex justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onResponse(true)}
            className="px-8 py-3 bg-rosegold text-wine font-bold rounded-full shadow-[0_0_20px_rgba(183,110,121,0.6)] hover:shadow-[0_0_35px_rgba(183,110,121,0.8)] transition-shadow duration-300 animate-pulse"
          >
            ❤️ Yes
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onResponse(false)}
            className="px-8 py-3 bg-transparent border border-white/20 text-white/50 rounded-full hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            💔 No
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};