"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { adventures, Adventure } from "@/data/adventures";
import { MapPin, X } from "lucide-react";
import ReactConfetti from "react-confetti";

const AdventurePopup = ({ adventure, onClose, onClaim }: { adventure: Adventure, onClose: () => void, onClaim: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute z-10 p-4 bg-white rounded-lg shadow-xl w-64"
            style={{ top: adventure.position.top, left: adventure.position.left, transform: 'translate(-50%, -120%)' }}
        >
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                <X size={18} />
            </button>
            <adventure.Icon className="w-8 h-8 text-slate-blue mb-2" />
            <h4 className="font-bold text-gray-800">{adventure.title}</h4>
            <p className="text-sm text-gray-600 mb-3">{adventure.description}</p>
            <button 
                onClick={() => {
                    onClaim();
                    onClose();
                }}
                className="w-full px-4 py-2 text-sm font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
            >
                Claim Adventure
            </button>
        </motion.div>
    )
}


const AdventureMap = () => {
    const [activeAdventure, setActiveAdventure] = useState<Adventure | null>(null);
    const [showConfetti, setShowConfetti] = useState(false);

    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Let it run for 5 seconds
    };

  return (
    <section className="relative py-20 bg-sage-green">
      {showConfetti && <ReactConfetti recycle={false} onConfettiComplete={() => setShowConfetti(false)} />}
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-5xl text-gray-800 mb-4">Adventures Awaiting</h2>
        <p className="mb-12 max-w-prose mx-auto text-gray-600">
          The world is full of places to see and things to do. Here are a few I'd love to experience with you.
        </p>

        <div className="relative w-full max-w-4xl mx-auto h-[500px] bg-white/30 rounded-lg shadow-inner overflow-hidden">
            {/* A simple decorative map background */}
            <div className="absolute inset-0 bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url('/images/adventure.png')"}} />

            {adventures.map((adv) => (
                <motion.button
                    key={adv.title}
                    whileHover={{ scale: 1.5 }}
                    className="absolute z-0"
                    style={{ top: adv.position.top, left: adv.position.left }}
                    onClick={() => setActiveAdventure(adv)}
                >
                    <MapPin className="w-8 h-8 text-red-500 drop-shadow-lg" />
                </motion.button>
            ))}

            <AnimatePresence>
                {activeAdventure && (
                    <AdventurePopup 
                        adventure={activeAdventure} 
                        onClose={() => setActiveAdventure(null)} 
                        onClaim={triggerConfetti}
                    />
                )}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AdventureMap;
