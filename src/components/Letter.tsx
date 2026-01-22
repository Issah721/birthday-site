"use client";

import { motion } from "framer-motion";

interface LetterProps {
  letterContent: string;
}

const Letter = ({ letterContent }: LetterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="absolute w-full h-full bg-cream text-gray-800 p-8 rounded-lg overflow-y-auto custom-scrollbar"
    >
      <div className="font-sans text-base space-y-4 text-gray-600" dangerouslySetInnerHTML={{ __html: letterContent }} />
    </motion.div>
  );
};

export default Letter;
