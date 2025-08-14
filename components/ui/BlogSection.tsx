"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import {blogPosts} from '../../data/index';
const BlogSection = () => {
  return (
    <div className="py-20" id="blog">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="heading text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest <span className="text-purple-300">Insights</span>
        </motion.h1>
        
        {/* Featured Article */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group cursor-pointer">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                         rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl border border-white/10 
                           p-8 hover:border-white/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                      Featured
                    </span>
                    <span className="text-white/50 text-sm">Latest Article</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    Join My Tech Journey on Telegram
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    I share updates from my journey in tech-side projects, personal insights, thoughts, 
                    and latest trends on my Telegram channel called night_code_vibe. As a life-long learner, 
                    I&#39;m constantly growing and evolving. Feel free to join the conversation! 💥
                  </p>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href="https://t.me/night_code_vibe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 
                                 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 
                                 hover:to-blue-600 transition-all duration-300 group/btn"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaTelegram className="text-xl group-hover/btn:scale-110 transition-transform duration-300" />
                      Join Channel
                      <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                    <div className="text-white/50 text-sm">2.5k+ members</div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                                 rounded-2xl border border-white/10 flex items-center justify-center">
                    <FaTelegram className="text-8xl text-white/30" />
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 
                               rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    💻
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 
                               rounded-xl flex items-center justify-center text-white text-xl font-bold"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    🚀
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${post.color} 
                             rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 
                               p-6 hover:border-white/20 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.color} 
                                 flex items-center justify-center text-white mb-4 group-hover:scale-110 
                                 transition-transform duration-300`}>
                    <post.icon className="text-xl" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 bg-gradient-to-r ${post.color} bg-opacity-20 
                                   text-white text-xs rounded-full border border-white/20`}>
                      {post.category}
                    </span>
                    <span className="text-white/50 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 
                               transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">{post.date}</span>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center
                                 group-hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaArrowRight className="text-white/70 text-sm group-hover:text-white 
                                            group-hover:translate-x-0.5 transition-all duration-300" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 
                         backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-white/70">
              Want to stay updated with the latest tech trends?
            </div>
            <motion.a
              href="https://t.me/night_code_vibe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 
                         text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 
                         hover:to-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTelegram />
              Join Now
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogSection; 