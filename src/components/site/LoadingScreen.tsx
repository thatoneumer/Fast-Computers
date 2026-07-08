import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Cpu, Zap } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-3xl rounded-full animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-float-slow" style={{ animationDelay: "2s" }} />
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(oklch(0.62_0.24_25/0.05)_1px,transparent_1px),linear-gradient(90deg,oklch(0.62_0.24_25/0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Animated red streaks */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{ top: `${20 + i * 20}%`, left: 0, right: 0 }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: [0, 1, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-primary rounded-full flex items-center justify-center red-border-glow"
            >
              <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-widest uppercase"
          >
            F<span className="text-primary animate-glow-pulse">/</span>AST
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-2 text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase"
          >
            Computers
          </motion.p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="relative h-1 sm:h-2 bg-border overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary red-glow"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs sm:text-sm uppercase tracking-widest">
            <span className="text-muted-foreground">Loading</span>
            <span className="text-primary font-bold">{Math.round(progress)}%</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 text-xs sm:text-sm text-muted-foreground tracking-wide"
        >
          Building Your Dream Gaming Rig
        </motion.p>

        {/* Power indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-primary"
        >
          <Zap className="w-4 h-4 animate-pulse" />
          <span>System Initializing</span>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/50" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-primary/50" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary/50" />
    </div>
  );
}
