"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from 'next/dynamic';

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["Node.js", "Mongo DB", "NEXT.js"];

  const [copied, setCopied] = useState(false);
  const [puzzleAnswer, setPuzzleAnswer] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [glitch, setGlitch] = useState(false);

  const handlePuzzleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (puzzleAnswer.toLowerCase() === "keyboard") {
      setGlitch(true);
      setTimeout(() => {
        setIsUnlocked(true);
        setGlitch(false);
      }, 500);
    } else {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 300);
      alert("CRITICAL ERROR: ACCESS DENIED");
    }
  };

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "eyobgeremew618@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 font-mono puzzle-border",
        glitch && "animate-pulse border-red-500",
        className
      )}
      style={{
        backgroundColor: "rgba(12,14,35,1)",
      }}
    >
      {/* Riddle Logic for ID 1 */}
      {id === 1 && !isUnlocked && (
        <div className="absolute inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center border-2 border-red-500/20">
          <div className="absolute top-2 left-2 flex gap-1">
            <div className="w-1 h-1 bg-red-500 rounded-full animate-ping" />
            <div className="text-[10px] text-red-500/50 font-mono">SEC_LOG_v4.2</div>
          </div>
          <h3 className="text-xl font-mono text-red-500 mb-2 tracking-tighter">PHASE 1: AUTHENTICATION</h3>
          <div className="w-full h-[1px] bg-red-500/20 mb-4" />
          <p className="text-gray-400 mb-6 font-mono text-xs leading-relaxed max-w-[250px]">
            "I have keys but no locks. I have a space but no room. You can enter, but never leave."
          </p>
          <form onSubmit={handlePuzzleSubmit} className="flex flex-col gap-3 w-full max-w-[220px]">
            <div className="relative">
              <input
                type="text"
                placeholder="[INPUT COMMAND]"
                value={puzzleAnswer}
                onChange={(e) => setPuzzleAnswer(e.target.value)}
                className="w-full bg-black border-b border-red-500/50 px-3 py-2 text-red-500 font-mono text-center outline-none focus:border-red-500 placeholder:text-red-900/50 text-sm"
              />
            </div>
            <button type="submit" className="group relative px-4 py-2 font-mono text-sm overflow-hidden">
              <span className="relative z-10 text-red-500 group-hover:text-white transition-colors duration-300">EXECUTE DECRYPTION</span>
              <div className="absolute inset-0 bg-red-500/10 group-hover:bg-red-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left" />
              <div className="absolute inset-0 border border-red-500/50" />
            </button>
          </form>
          <div className="mt-8 flex flex-col items-center opacity-30">
            <div className="text-[10px] text-gray-500 font-mono">HINT_BUFFER_OVERFLOW:</div>
            <div className="text-[10px] text-gray-500 font-mono italic">Physical input device required.</div>
          </div>
        </div>
      )}

      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-top ")}
            />
          )}
        </div>
        {/* Dark overlay for better text readability on light images */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[5]" />

        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div className="absolute -bottom-5 right-0">
                {/* Render Lottie only when copied to avoid null destroy errors */}
                {copied ? (
                  <Lottie options={defaultOptions} height={200} width={400} />
                ) : null}
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};