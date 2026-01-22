"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Lock, Heart, Map } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "vault", icon: Lock, label: "Vault" },
  { id: "memory-jar", icon: Heart, label: "Memories" },
  { id: "adventure-map", icon: Map, label: "Adventures" },
  { id: "polaroid-gallery", icon: Heart, label: "Reasons" }, // Reusing Heart icon
  { id: "countdown", icon: Home, label: "Countdown" }, // Reusing Home icon
  { id: "digital-card", icon: Lock, label: "Gift" }, // Reusing Lock icon
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <motion.button
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-cream/80 backdrop-blur-md md:hidden shadow-lg"
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu size={28} className="text-slate-blue" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] md:hidden"
            onClick={toggleMenu} // Close when clicking outside
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-cream p-6 shadow-xl flex flex-col items-start"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside drawer
            >
              <button onClick={toggleMenu} className="self-end p-2 mb-8 text-slate-blue">
                <X size={28} />
              </button>
              <nav>
                <ul className="space-y-6">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={toggleMenu} // Close menu on link click
                        className="flex items-center text-slate-blue text-3xl font-heading hover:text-blush-pink transition-colors"
                      >
                        <item.icon size={32} className="mr-4" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;