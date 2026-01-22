"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Music, Play, Pause, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Unmute when user explicitly hits play
        if (isMuted) {
          audioRef.current.muted = false;
          setIsMuted(false);
        }
        audioRef.current.play().catch((e) => console.error("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      // If muted, ensure it's not "playing" in the background
      if (!isMuted === true) {
          audioRef.current.pause();
          setIsPlaying(false);
      }
    }
  };


  return (
    <>
      <audio ref={audioRef} src="/birthday-song.mp3" loop muted />
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <motion.button
          onClick={toggleMute}
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center text-white transition-colors",
            isMuted ? "bg-gray-600/50" : "bg-green-500/80"
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <VolumeX size={24} />
        </motion.button>
        <motion.button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full bg-pink-500/80 text-white flex items-center justify-center backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </motion.button>
      </div>
    </>
  );
};

export default AudioPlayer;
