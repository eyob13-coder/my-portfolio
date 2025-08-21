"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { techIcons } from '../../data/index';

const FloatingTechIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-black/20 to-purple-900/20 border border-white/10"
    >
      {techIcons.map(({name, icon, color}, index) => {
        // Handle both JSX elements and component references
        const IconElement = typeof icon === 'function' 
          ? React.createElement(icon) 
          : icon;
        
        return (
          <motion.div
            key={name}
            className="absolute"
            initial={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 300 - 150,
              scale: 0,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: [
                Math.random() * 400 - 200,
                Math.random() * 400 - 200,
                Math.random() * 400 - 200,
              ],
              y: [
                Math.random() * 300 - 150,
                Math.random() * 300 - 150,
                Math.random() * 300 - 150,
              ],
              scale: [0, 1, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            whileHover={{
              scale: 1.2,
              rotate: 0,
              z: 50,
            }}
          >
            <div className="group relative">
              <div className={`
                w-16 h-16 rounded-2xl bg-gradient-to-br ${color} 
                flex items-center justify-center text-white font-bold text-lg
                shadow-lg backdrop-blur-sm border border-white/20
                transition-all duration-300 group-hover:shadow-2xl
                group-hover:scale-110 group-hover:rotate-12
              `}>
                {IconElement}
              </div>
              
              {/* Glow effect */}
              <div className={`
                absolute inset-0 rounded-2xl bg-gradient-to-br ${color} 
                opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300
              `} />
              
              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 
                            bg-black/80 text-white px-3 py-1 rounded-lg text-sm
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            pointer-events-none whitespace-nowrap z-50">
                {name}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 
                              w-2 h-2 bg-black/80 rotate-45"></div>
              </div>
            </div>
          </motion.div>
        );
      })}
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          initial={{
            x: Math.random() * 400,
            y: Math.random() * 300,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * 400,
            y: Math.random() * 300,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingTechIcons;