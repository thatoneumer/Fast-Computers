import { motion, useMotionValue, useSpring } from "motion/react";
import React, { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Tilt3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number; // Maximum tilt rotation in degrees
  scale?: number;   // Scale on hover
  perspective?: number;
  disabled?: boolean;
}

export function Tilt3D({
  children,
  maxTilt = 8,
  scale = 1.04,
  perspective = 1000,
  className,
  style,
  disabled = false,
  ...props
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion values using springs
  const rotateX = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 200, damping: 20 });
  const scaleSpring = useSpring(1, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative position from center (-0.5 to 0.5)
    const relX = (e.clientX - rect.left) / width - 0.5;
    const relY = (e.clientY - rect.top) / height - 0.5;
    
    // Calculate rotation: moving right rotates positive on Y-axis, moving down rotates negative on X-axis
    // Max tilt at bounds is maxTilt degrees
    x.set(relX * maxTilt);
    y.set(-relY * maxTilt);
  };

  const handleMouseEnter = () => {
    if (disabled || isMobile) return;
    scaleSpring.set(scale);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scaleSpring.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: perspective,
        rotateX: disabled || isMobile ? 0 : rotateX,
        rotateY: disabled || isMobile ? 0 : rotateY,
        scale: disabled || isMobile ? 1 : scaleSpring,
        ...style
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
