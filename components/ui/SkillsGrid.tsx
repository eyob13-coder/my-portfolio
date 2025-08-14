"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../../data/index";

const SkillsGrid = () => {
  return (
    <div className="section-padding" id="skills">
      <motion.h1 
        className="heading text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical <span className="text-purple-300">Expertise</span>
      </motion.h1>
      
      <div className="grid-responsive container-max">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            <h2 className="category-title">
              {category.category}
            </h2>
            
            <div className="skills-container">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="group relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="skill-card">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`
                          skill-icon bg-gradient-to-br ${skill.color}
                        `}>
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-6 h-6"
                          />
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-purple-300 font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="skill-progress">
                      <motion.div
                        className={`skill-progress-bar bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`
                    skill-hover-glow bg-gradient-to-r ${skill.color}
                  `} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Floating achievement badges */}
      <div className="resume-section">
        <motion.div
          className="achievement-badge"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <div className="achievement-number text-purple-300">50+</div>
            <div className="achievement-label">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="achievement-number text-blue-300">3+</div>
            <div className="achievement-label">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="achievement-number text-cyan-300">100%</div>
            <div className="achievement-label">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsGrid; 