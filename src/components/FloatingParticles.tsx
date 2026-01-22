"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingParticles = () => {
  const [particles, setParticles] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 20 }).map((_, i) => {
        const xStart = Math.random() * 100;
        const xEnd = Math.random() * 100;
        const yStart = 100 + Math.random() * 20;
        const yEnd = -20 - Math.random() * 20;
        const scale = 0.5 + Math.random() * 1;
        const duration = 15 + Math.random() * 10;
        const delay = Math.random() * 15;
        const opacity = 0.2 + Math.random() * 0.5;

        return (
          <motion.div
            key={i}
            className="absolute text-blush-pink"
            style={{
              left: `${xStart}vw`,
              top: `${yStart}vh`,
              scale,
              opacity,
            }}
            animate={{
              x: [`${xStart}vw`, `${xEnd}vw`],
              y: [`${yStart}vh`, `${yEnd}vh`],
            }}
            transition={{
              duration,
              delay,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            ♥
          </motion.div>
        );
      });
    };
    setParticles(generateParticles());
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {particles}
    </div>
  );
};

export default FloatingParticles;
