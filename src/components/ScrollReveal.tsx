import React from "react";
import { motion } from "framer-motion";

export const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initial = { 
    opacity: 0, 
    ...directions[direction] 
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1], // Custom ease out cubic
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = "", delayChildren = 0 }: { children: React.ReactNode, className?: string, delayChildren?: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren
          }
        },
        hidden: {}
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
