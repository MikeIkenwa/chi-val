import React from 'react';
import { motion } from 'framer-motion';
import { StoryContent } from '../types';
import { TextReveal } from './TextReveal';
import { Instagram, MessageCircle } from 'lucide-react';

interface ContactScreenProps {
  data: StoryContent;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center text-center space-y-10 w-full"
    >
      <div className="space-y-4">
        <h1 className="font-serif text-3xl md:text-4xl text-blush">
          <TextReveal text={data.headline || "One last thing..."} delay={0.2} />
        </h1>
        <p className="font-sans text-cream/80 text-lg max-w-xs mx-auto">
          <TextReveal text={data.subtext || "Tell me."} delay={1.5} />
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="flex flex-col gap-4 w-full max-w-xs"
      >
        <a 
          href="https://wa.me/2349065647671?text=Yes,%20I%20will%20be%20your%20Val%20❤️"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] font-bold rounded-xl shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all duration-300 backdrop-blur-sm"
          >
            <MessageCircle size={24} />
            <span>Text me on WhatsApp</span>
          </motion.button>
        </a>

        <a 
          href="https://www.instagram.com/mikeikenwa?igsh=d3g2MnR6ODBtYml3" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-500/50 text-pink-400 font-bold rounded-xl shadow-[0_0_15px_rgba(236,72,153,0.2)] hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-all duration-300 backdrop-blur-sm"
          >
            <Instagram size={24} />
            <span>DM me on Instagram</span>
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
};