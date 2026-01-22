"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  isVaultUnlocked: boolean;
  unlockVault: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isVaultUnlocked, setIsVaultUnlocked] = useState(false);

  const unlockVault = () => {
    setIsVaultUnlocked(true);
  };

  return (
    <AppContext.Provider value={{ isVaultUnlocked, unlockVault }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
