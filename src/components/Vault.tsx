"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Lock, X } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import Letter from "./Letter";
import { BIRTHDAY_CONTENT } from "@/lib/birthdayData";

const CORRECT_PIN = BIRTHDAY_CONTENT.vault.password;

const PinInputDisplay = ({ pin }: { pin: string }) => (
  <div className="flex justify-center items-center space-x-2 mb-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <div
        key={i}
        className="w-8 h-10 bg-white/20 backdrop-blur-sm rounded-md flex items-center justify-center text-2xl font-bold"
      >
        {pin[i] || ""}
      </div>
    ))}
  </div>
);

const PinPad = ({ onPinChange, onClear, onSubmit }: any) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div className="grid grid-cols-3 gap-2">
        {numbers.map((num) => (
          <motion.button
            key={num}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPinChange(num.toString())}
            className="text-2xl font-bold rounded-full bg-white/20 backdrop-blur-sm aspect-square"
          >
            {num}
          </motion.button>
        ))}
        <motion.button whileTap={{ scale: 0.95 }} onClick={onClear} className="rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <X size={24}/>
        </motion.button>
        <motion.button whileTap={{ scale: 0.95 }} onClick={() => onPinChange("0")} className="text-2xl font-bold rounded-full bg-white/20 backdrop-blur-sm">
          0
        </motion.button>
        <motion.button whileTap={{ scale: 0.95 }} onClick={onSubmit} className="rounded-full bg-green-500/50 backdrop-blur-sm flex items-center justify-center">
            <Lock size={24}/>
        </motion.button>
      </div>
    );
  };
  

const Vault = () => {
  const { isVaultUnlocked, unlockVault } = useAppContext();
  const [pin, setPin] = useState("");
  const controls = useAnimation();

  const handlePinChange = (digit: string) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  const handleClear = () => {
    setPin("");
  };

  const handleSubmit = async () => {
    if (pin === CORRECT_PIN) {
      unlockVault();
    } else {
      await controls.start({
        x: [-10, 10, -10, 10, 0],
        transition: { duration: 0.4 },
      });
      setPin("");
    }
  };

  useEffect(() => {
    if(pin.length === 4) {
        handleSubmit();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin]);

  return (
    <section className="relative flex flex-col items-center justify-center py-20 bg-slate-blue text-white">
      <h2 className="font-heading text-5xl mb-4">The Love Letter Vault</h2>
      <p className="mb-8 max-w-prose text-center">
        {BIRTHDAY_CONTENT.vault.hint}
      </p>

      <motion.div animate={controls} className="w-[300px]">
        <div className="relative h-[400px] [transform-style:preserve-3d]">
          {/* Vault content that gets revealed */}
          {isVaultUnlocked && <Letter letterContent={BIRTHDAY_CONTENT.vault.letter} />}

          {/* Vault Door */}
          <motion.div
            className="absolute w-full h-full bg-gray-700/50 rounded-lg shadow-2xl p-4 flex flex-col justify-between [backface-visibility:hidden]"
            animate={{
              rotateY: isVaultUnlocked ? -120 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          >
            <div>
              <PinInputDisplay pin={pin} />
            </div>
            <PinPad
              onPinChange={handlePinChange}
              onClear={handleClear}
              onSubmit={handleSubmit}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Vault;
