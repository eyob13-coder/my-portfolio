"use client";

import React from "react";
import { motion } from "framer-motion";
import { workExperience } from "@/data";
import Image from "next/image";

const InteractiveTimeline = () => {
  return (
    <div className="py-20" id="experience">
      <motion.h1 
        className="heading text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional <span className="text-purple-300">Journey</span>
      </motion.h1>
      
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500" />
        
        {/* Timeline items */}
        <div className="space-y-16">
          {workExperience.map(( {id, thumbnail, title, desc}, index) => (
            <motion.div
              key={id}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
             {/* Content */}
<div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
  <motion.div
    className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 
               hover:border-white/20 transition-all duration-300 group cursor-pointer break-words overflow-hidden"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
    }}
  >
    <div className="flex flex-col md:flex-row items-start gap-4">
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 
                    flex items-center justify-center text-white text-2xl font-bold
                    group-hover:scale-110 transition-transform duration-300">

        <Image src={thumbnail} 
        alt="experience thumbnail"
        width={48}
        height={48}
        className="w-12 h-12 object-contain" />

      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 
                     transition-colors duration-300 break-words">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed break-words">
          {desc}
        </p>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full
                       border border-purple-500/30 break-words"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
</div>

              
              {/* Timeline dot */}
              <div className="relative z-10">
                <motion.div
                  className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full 
                             border-4 border-black shadow-lg"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
              </div>
              
              {/* Spacer for odd items */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
        
        {/* Floating achievements */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 
                         backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center group">
              <motion.div 
                className="text-4xl font-bold text-purple-300 mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                2+
              </motion.div>
              <div className="text-white/70">Years Learning</div>
            </div>
            <div className="text-center group">
              <motion.div 
                className="text-4xl font-bold text-blue-300 mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                15+
              </motion.div>
              <div className="text-white/70">Technologies</div>
            </div>
            <div className="text-center group">
              <motion.div 
                className="text-4xl font-bold text-cyan-300 mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                100%
              </motion.div>
              <div className="text-white/70">Dedication</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;