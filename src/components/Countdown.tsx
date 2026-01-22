"use client";

import React, { useState, useEffect } from "react";
import { BIRTHDAY_CONTENT } from "@/lib/birthdayData";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const Countdown = () => {
  const targetDate = BIRTHDAY_CONTENT.countdown.targetDate;
  const dailyClues = BIRTHDAY_CONTENT.countdown.dailyClues;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));
  const [clueIndex, setClueIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false); // New state for client-side mounting

  useEffect(() => {
    setMounted(true); // Component has mounted on the client
  }, []);

  useEffect(() => {
    if (!mounted) return; // Only run on client after mounted

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, mounted]);

  useEffect(() => {
    if (!mounted) return; // Only run on client after mounted

    // Calculate daily clue
    const daysRemaining = timeLeft.days;
    // Ensure we only show clues if the birthday hasn't passed and within the clue range
    if (daysRemaining < dailyClues.length && daysRemaining >= 0 && daysRemaining > 0) {
      setClueIndex(dailyClues.length - daysRemaining); // Day 1 clue is 8 days away, etc.
    } else if (daysRemaining === 0) {
        setClueIndex(dailyClues.length - 1); // Last clue on the birthday
    } else {
      setClueIndex(null);
    }
  }, [timeLeft, mounted, dailyClues.length]);


  const timerComponents: React.ReactElement[] = [];

  // Only render timer components if mounted and time is left
  if (mounted && (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0)) {
    Object.keys(timeLeft).forEach((interval) => {
      const key = interval as keyof TimeLeft;
      if (timeLeft[key] !== undefined) {
        timerComponents.push(
          <span key={key} className="flex flex-col items-center mx-2 md:mx-4">
            <span className="font-bold text-4xl md:text-6xl text-slate-blue">
              {String(timeLeft[key]).padStart(2, "0")}
            </span>
            <span className="text-lg md:text-xl text-gray-700 capitalize">
              {interval}
            </span>
          </span>
        );
      }
    });
  }


  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-5xl text-gray-800 mb-8">
          The Big Day Approaches!
        </h2>
        {!mounted ? ( // Render a placeholder on server, or while not mounted
            <div className="flex justify-center mb-12">
                <span className="text-4xl text-slate-blue">Loading...</span>
            </div>
        ) : (
            timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds <= 0 ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="font-heading text-6xl text-blush-pink"
                >
                    It's Party Time!
                </motion.div>
            ) : (
                <div className="flex justify-center mb-12">{timerComponents}</div>
            )
        )}

        <AnimatePresence mode="wait">
          {mounted && clueIndex !== null && ( // Only show clue if mounted and clue is available
            <motion.div
              key={clueIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/70 p-6 rounded-lg max-w-lg mx-auto shadow-xl"
            >
              <h3 className="font-heading text-3xl text-blush-pink mb-3">
                Daily Clue: Day {clueIndex + 1}
              </h3>
              <p className="font-sans text-lg text-gray-700">
                {dailyClues[clueIndex]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Countdown;
