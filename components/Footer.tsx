import React from 'react'
import { socialMedia } from '@/data';
import { motion } from "framer-motion";


const Fotter = () => {
  return (
    <footer className="w-full mb[100px] pb-10 md:mb-5" id="contact">
       
       
        {/* Social Links */}
        <motion.div 
              className="flex justify-center gap-4 mt-8"
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
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
                             flex items-center justify-center text-white hover:bg-white/20 
                             hover:border-white/40 transition-all duration-300 group"
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
                <p className='md:text-base text-sm md:font-normal font-light'> Copyright © 2025 Eyob. G</p>
            </div>
       
    </footer>
  )
}

export default Fotter