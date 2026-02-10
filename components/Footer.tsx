import React from 'react'
import { socialMedia } from '@/data';
import { motion } from "framer-motion";


const Fotter = () => {
  return (
    <footer className="w-full mb[100px] pb-10 md:mb-5" id="contact">
        <div className="flex flex-col items-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent mb-16" />
        </div>
       
        {/* Social Links */}
        <motion.div 
              className="flex justify-center gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
             {socialMedia.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-black/60 backdrop-blur-sm border border-red-500/20 
                             flex items-center justify-center text-red-500 hover:text-white hover:bg-red-600/20 
                             hover:border-red-500 transition-all duration-300 group shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="text-xl group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}

            </motion.div>
            <div className='flex mt-16 md:flex-row flex-col justify-center items-center'>
                <p className='md:text-base text-sm font-mono text-white/40'> [ SYSTEM READY ] Copyright © 2026 EYOB_GEREMEW.LOG</p>
            </div>
       
    </footer>
  )
}

export default Fotter