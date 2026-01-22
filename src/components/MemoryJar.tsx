"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { BIRTHDAY_CONTENT, Memory } from "@/lib/birthdayData";
import { Heart, X } from "lucide-react";

// Modal Component
const MemoryModal = ({ memory, onClose }: { memory: Memory; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-cream p-8 rounded-lg max-w-lg w-full relative shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>
        <h3 className="font-heading text-3xl text-slate-blue mb-4">{memory.title}</h3>
        <p className="font-sans text-gray-700 mb-6">{memory.body}</p>
        <button className="flex items-center gap-2 text-pink-500">
          <Heart size={20} />
          <span>Favorite</span>
        </button>
      </motion.div>
    </motion.div>
  );
};


// Main Jar Component
const MemoryJar = () => {
    const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
    const [noteRotations, setNoteRotations] = useState<number[]>([]);
    const controls = useAnimation();

    useEffect(() => {
        setNoteRotations(Array.from({ length: BIRTHDAY_CONTENT.memories.length }).map(() => Math.random() * 90 - 45));
    }, []);
  
    const shakeJar = async () => {
      await controls.start({
        rotate: [-5, 5, -3, 3, 0],
        transition: { duration: 0.5 },
      });
  
      // Select a random memory
      const randomIndex = Math.floor(Math.random() * BIRTHDAY_CONTENT.memories.length);
      const randomMemory = BIRTHDAY_CONTENT.memories[randomIndex];
      
      // A small delay to feel more natural
      setTimeout(() => {
        setSelectedMemory(randomMemory);
      }, 300);
    };
  
    return (
      <section className="py-20 bg-blush-pink flex flex-col items-center justify-center text-center">
        <h2 className="font-heading text-5xl text-gray-800 mb-4">Memory Jar</h2>
        <p className="mb-8 max-w-prose text-gray-600">
          We've collected so many precious memories. Shake the jar to revisit one.
        </p>
  
        <motion.div animate={controls} className="relative w-48 h-64 mb-8">
            {/* Jar SVG or CSS */}
            <div className="w-full h-full bg-white/50 rounded-t-full rounded-b-lg border-4 border-white/80 shadow-inner" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-400/70 rounded-t-md border-2 border-white/80" />
            {/* Paper notes inside */}
            <div className="absolute inset-4 flex flex-wrap gap-2 overflow-hidden">
                {noteRotations.map((rotation, i) => (
                    <div key={i} className="w-8 h-4 bg-cream rounded-sm shadow-md opacity-70" style={{transform: `rotate(${rotation}deg)`}}/>
                ))}
            </div>
        </motion.div>

  
        <motion.button
          onClick={shakeJar}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white/80 text-slate-blue font-bold rounded-full shadow-lg"
        >
          Shake the Jar
        </motion.button>
  
        <AnimatePresence>
          {selectedMemory && (
            <MemoryModal
              memory={selectedMemory}
              onClose={() => setSelectedMemory(null)}
            />
          )}
        </AnimatePresence>
      </section>
    );
  };
  
  export default MemoryJar;
