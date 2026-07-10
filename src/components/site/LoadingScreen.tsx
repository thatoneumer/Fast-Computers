import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const duration = 2000; // 2 seconds total
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/60 backdrop-blur-md overflow-hidden">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Spinning loading ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-r-primary shadow-[0_0_20px_rgba(196,30,58,0.4)]"
        />
        
        {/* Static inner ring */}
        <div className="absolute inset-3 rounded-full border border-primary/20" />

        {/* Logo in the center */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center mt-1">
          <span className="font-display font-bold text-3xl tracking-widest uppercase text-white drop-shadow-md">
            F<span className="text-primary animate-glow-pulse">/</span>AST
          </span>
        </div>
      </div>
    </div>
  );
}
