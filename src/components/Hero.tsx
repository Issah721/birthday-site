"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const headingText = "Happy Birthday, Babe!";
const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const images = [
  "/images/birth1.png",
  "/images/birth2.png",
  "/images/photo5.png",
  "/images/photo3.png",
  "/images/birth1.png", // Repeated to make 5 images for the carousel
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden text-center bg-cream">
      <div className="z-10 relative">
        <motion.h1
          className="font-heading text-6xl md:text-8xl text-slate-blue mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
            hidden: {},
          }}
        >
          {headingText.split("").map((char, i) => (
            <motion.span key={i} variants={textVariants} custom={i}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="relative w-[250px] h-[350px] md:w-[300px] md:h-[420px] mx-auto">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="absolute w-full h-full"
              initial={{ scale: 0.8, rotate: 0, y: 0, opacity: 0 }}
              animate={{
                scale: index === current ? 1 : 0.8,
                rotate: (index - current) * 5,
                y: (index - current) * -10,
                opacity: index === current ? 1 : 0,
                zIndex: images.length - Math.abs(index - current),
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <Image
                src={src}
                alt={`Birthday photo ${index + 1}`}
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>
      </div>



      <motion.div
        className="absolute bottom-8 z-10 flex flex-col items-center text-slate-blue"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <span>Scroll for surprises</span>
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
