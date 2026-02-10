"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../../data/index";
import Image from 'next/image';

const SkillsGrid = () => {
  return (
    <div className="section-padding" id="skills">
      <motion.h1 
        className="heading text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mastery <span className="text-red-500 font-mono">Protocol</span>
      </motion.h1>
      
      <div className="grid-responsive container-max">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            className="space-y-6 puzzle-border p-6 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h2 className="category-title border-b border-red-500/30 pb-2">
              {category.category}
            </h2>
            
            <div className="skills-container space-y-4">
              {category.skills.map(({color, icon, name, level} ,skillIndex) => (
                <motion.div
                  key={name}
                  className="group relative"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                >
                  <div className="bg-black/40 border border-white/5 p-3 rounded-lg group-hover:border-red-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                          <Image
                            src={icon} 
                            alt={name} 
                            width={20}
                            height={20}
                          />
                        </div>
                        <span className="text-white/80 font-mono text-sm">{name}</span>
                      </div>
                      <span className="text-red-500 font-mono text-xs font-bold">{level}%</span>
                    </div>
                    
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="resume-section mt-16">
        <motion.div
          className="achievement-badge puzzle-border !bg-black/60 border-red-500/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center px-8 border-r border-red-500/20">
            <div className="achievement-number text-red-500 font-mono">50+</div>
            <div className="achievement-label font-mono text-xs">Files Decrypted</div>
          </div>
          <div className="text-center px-8 border-r border-red-500/20">
            <div className="achievement-number text-red-500 font-mono">2+</div>
            <div className="achievement-label font-mono text-xs">Years In Field</div>
          </div>
          <div className="text-center px-8">
            <div className="achievement-number text-red-500 font-mono">100%</div>
            <div className="achievement-label font-mono text-xs">Protocol Success</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsGrid; 