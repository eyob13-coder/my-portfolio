import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamWithCollision";
import MagicButton from "./ui/MagicButton";

import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import ResumeDialog from "./ui/ResumeDialog";
import { motion } from "framer-motion";

const Hero = () => {
  const [openResume, setOpenResume] = React.useState(false);

  return (
    <div className="relative pb-8 pt-20 md:pb-20 md:pt-36 w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spotlight 
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" 
          fill="white" 
        />
        <Spotlight 
          className="h-[80vh] w-[50vw] top-10 left-full" 
          fill="purple" 
        />
        <Spotlight 
          className="left-80 top-28 h-[80vh] w-[50vw]" 
          fill="blue" 
        />
      </div>

      <BackgroundBeamsWithCollision className="flex items-center justify-center">
        <div className="relative z-50 w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] px-4">
          <div className="text-center">
            {/* Animated Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                         backdrop-blur-sm rounded-full border border-white/10 mb-6"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">Available for new opportunities</span>
            </motion.div>

            <motion.h2 
              className="uppercase tracking-widest text-xs text-blue-100 mb-2 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Dynamic Web Magic with Next.js
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TextGenerateEffect
                className="text-center text-[32px] md:text-5xl lg:text-6xl font-bold"
                words="Transforming Concepts into Seamless User Experiences"
              />
            </motion.div>
            
            <motion.p 
              className="mt-3 md:mt-6 text-center md:tracking-wider text-sm md:text-lg lg:text-xl bg-gradient-to-r from-purple-300 via-violet-300 to-blue-300 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hi, I&#39;m Eyob, a full-stack <span className="font-bold">{"( MERN )"}</span> Developer based in Ethiopia.
            </motion.p>
            
            {/* Enhanced Buttons */}
            <motion.div 
              className="mt-3 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#about" className="block">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
              <button onClick={() => setOpenResume(true)} className="block">
                <MagicButton
                  title="See Resume"
                  icon={<FaLocationArrow />}
                  position="left"
                  otherClasses=""
                />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {[
                { number: "2+", label: "Years Learning" },
                { number: "50+", label: "Projects" },
                { number: "100%", label: "Dedication" },
              ].map((stat) => (
                <div key={stat.label} className="text-center group">
                  <motion.div 
                    className="text-2xl font-bold text-purple-300 mb-1"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 dark:bg-black-100 bg-dark flex items-center justify-center">
          <div 
            className={cn(
              "absolute inset-0 [background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )} 
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
        </div>
      </BackgroundBeamsWithCollision>

      <ResumeDialog
        open={openResume}
        onOpenChange={setOpenResume}
        src="/resume.pdf"
        fileName="Eyob-Resume"
      />
    </div>
  );
};

export default Hero;