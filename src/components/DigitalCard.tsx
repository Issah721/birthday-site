"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BIRTHDAY_CONTENT } from "@/lib/birthdayData";

const DigitalCard = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };

  return (
    <section className="py-20 bg-blush-pink relative z-0">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-5xl text-gray-800 mb-8">Your Special Gift</h2>
        <p className="mb-12 max-w-prose mx-auto text-gray-600">
          A little something just for you, hidden inside this digital envelope. Click to reveal!
        </p>

        <div className="relative w-72 h-48 mx-auto [perspective:1000px] cursor-pointer" onClick={handleOpen}>
          {/* Envelope Base */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-600 rounded-lg shadow-xl"
            style={{ zIndex: 10 }}
          />

          {/* Envelope Flap */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-red-500 to-pink-700 rounded-t-lg origin-bottom transform-gpu"
            animate={{ rotateX: isOpened ? -180 : 0 }}
            transition={{ duration: 0.8 }}
            style={{ zIndex: 20, backfaceVisibility: isOpened ? 'hidden' : 'visible' }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-pink-700 to-red-500 rounded-t-lg origin-bottom transform-gpu"
            animate={{ rotateX: isOpened ? -180 : 0 }}
            transition={{ duration: 0.8 }}
            style={{ zIndex: 20, backfaceVisibility: isOpened ? 'hidden' : 'visible' }}
          />

          {/* Card Inside */}
          <motion.div
            className="absolute inset-0 p-4 bg-cream rounded-lg text-gray-800 flex flex-col items-center justify-center overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: isOpened ? "0%" : "100%" }}
            transition={{ delay: isOpened ? 0.4 : 0, duration: 0.8 }}
            style={{ zIndex: isOpened ? 15 : 5 }}
          >
            <h3 className="font-heading text-3xl mb-4 text-slate-blue">Your Real World Gift!</h3>
            <p className="text-sm mb-4 text-center">
              Check this QR code for details on your surprise:
            </p>
            {/* Placeholder for QR Code */}
            <Image
              src="/images/birth1.png"
              alt="QR Code Placeholder"
              width={100}
              height={100}
              className="rounded-md"
            />
            <p className="mt-4 text-center">
              (Or solve this riddle: {BIRTHDAY_CONTENT.finalReveal.riddle})
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalCard;
