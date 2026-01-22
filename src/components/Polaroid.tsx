"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PolaroidItem } from "@/data/reasons";

interface PolaroidProps {
  item: PolaroidItem;
}

const Polaroid = ({ item }: PolaroidProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Generate random rotation only on the client side
    setRotation(Math.random() * 10 - 5); // -5 to 5 degrees
  }, []);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="relative w-48 h-64 sm:w-56 sm:h-72 bg-cream shadow-lg group cursor-pointer rounded-sm"
      style={{ rotate: rotation }}
      whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
      onClick={handleClick}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of the Polaroid */}
        <div className="absolute w-full h-full p-2 bg-white rounded-sm backface-hidden">
          <div className="relative w-full h-4/5 bg-gray-200">
                          <Image
                            src={item.imageUrl}
                            alt={item.caption}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                          />          </div>
          <p className="font-heading text-lg text-center text-gray-800 mt-2">
            {item.caption}
          </p>
        </div>

        {/* Back of the Polaroid */}
        <div className="absolute w-full h-full p-4 bg-white rounded-sm rotate-y-180 backface-hidden flex items-center justify-center">
          <p className="font-sans text-sm text-gray-700 text-center">
            {item.longNote}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Polaroid;
