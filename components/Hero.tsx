import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamWithCollision";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import React, { useState } from "react";
import ResumeDialog from "./ui/ResumeDialog";
import { motion } from "framer-motion";

const Hero = () => {
  const [openResume, setOpenResume] = useState(false);

  return (
    <div id="hero" className="relative pb-8 pt-24 md:pb-20 md:pt-36 w-full overflow-hidden min-h-[100svh] flex items-center bg-[rgba(12,14,35,1)]">
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-0"
          fill="red"
        />
        <Spotlight
          className="right-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
        {/* Rotated spotlight for opposite direction */}
        <Spotlight
          className="bottom-0 right-0 h-[80vh] w-[50vw] rotate-180"
          fill="#ef4444"
        />
      </div>

      <BackgroundBeamsWithCollision className="flex items-center justify-center">
        <div className="relative z-50 w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] px-4">
          <div className="text-center">

            <motion.h2
              className="uppercase tracking-[0.3em] text-xs text-white/50 mb-2 md:mb-4 font-mono animate-pulse"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              System Offline - Access Restricted
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TextGenerateEffect
                className="text-center text-[32px] md:text-5xl lg:text-6xl font-bold tracking-tighter"
                words="You've Entered The Locked Chamber"
              />
            </motion.div>

            <motion.p
              className="mt-3 md:mt-6 text-center md:tracking-wider text-sm md:text-lg lg:text-xl font-mono text-neutral-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Decrypt the experience to find the exit. I&#39;m Eyob, the Architect of this puzzle.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#about" className="block w-full sm:w-auto">
                <MagicButton
                  title="Start the Challenge"
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="bg-red-950/30 border-red-500/50 text-red-100 hover:bg-red-900/50 transition-colors"
                />
              </a>
              <button onClick={() => setOpenResume(true)} className="block w-full sm:w-auto">
                <MagicButton
                  title="Examine Blueprint"
                  icon={<FaLocationArrow />}
                  position="left"
                  otherClasses="bg-slate-950/50 border-slate-700 text-slate-200 hover:bg-slate-900/50 transition-colors"
                />
              </button>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 bg-transparent flex items-center justify-center">
          <div
            className={cn(
              "absolute inset-0 [background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]" />
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
