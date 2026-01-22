"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactConfetti from "react-confetti";
import { X } from "lucide-react";
import { BIRTHDAY_CONTENT } from "@/lib/birthdayData";

interface MascotProps {
  mood?: "party" | "sleeping" | "holding_letter" | "traveling";
}

interface EasterEggModalProps {
    onClose: () => void;
    message: string;
    riddle: string;
}

const EasterEggModal = ({ onClose, message, riddle }: EasterEggModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-cream p-8 rounded-lg shadow-2xl max-w-sm w-full relative text-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>
        <h3 className="font-heading text-4xl text-blush-pink mb-4">{message}</h3>
        <p className="font-sans text-lg">
          {riddle}
        </p>
      </motion.div>
    </motion.div>
  );
};


const Mascot = ({ mood = "party" }: MascotProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showEasterEggModal, setShowEasterEggModal] = useState(false);

  const handleClick = () => {
    const currentTime = Date.now();
    if (currentTime - lastClickTime < 500) {
      // Rapid click
      setClickCount((prev) => prev + 1);
    } else {
      // Reset if not rapid enough
      setClickCount(1);
    }
    setLastClickTime(currentTime);

    if (clickCount >= 9) { // 10th click
      setShowConfetti(true);
      setShowEasterEggModal(true);
      setClickCount(0); // Reset for next time
    }
  };

  const getMascotEmoji = () => {
    switch (mood) {
      case "party":
        return "🥳🎉";
      case "sleeping":
        return "😴💤";
      case "holding_letter":
        return "💌✍️";
      case "traveling":
        return "✈️🌍";
      default:
        return "🐾"; // Default cute paw print or similar
    }
  };

  return (
    <>
      <motion.div
        className="fixed bottom-4 left-4 z-40 text-5xl cursor-pointer"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        {getMascotEmoji()}
      </motion.div>

      <AnimatePresence>
        {showConfetti && (
          <ReactConfetti
            recycle={false}
            numberOfPieces={500}
            tweenDuration={5000}
            onConfettiComplete={() => setShowConfetti(false)}
          />
        )}
        {showEasterEggModal && (
          <EasterEggModal
            onClose={() => setShowEasterEggModal(false)}
            message={BIRTHDAY_CONTENT.finalReveal.message}
            riddle={BIRTHDAY_CONTENT.finalReveal.riddle}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Mascot;