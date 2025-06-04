import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamWithCollision";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 h-screen w-full overflow-hidden">
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
        <div className="relative z-50 w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <div className="text-center">
            <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-4">
              Dynamic Web Magic with Next.js
            </h2>
            
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold"
              words="Transforming Concepts into Seamless User Experiences"
            />
            
            <p className="mt-6 text-center md:tracking-wider text-sm md:text-lg lg:text-xl bg-gradient-to-r from-purple-300 via-violet-300 to-blue-300 text-transparent bg-clip-text">
              Hi, I'm Eyob, a full-stack <span className="font-bold">MERN</span> Developer based in Ethiopia.
            </p>
            
            <a href="#about" className="sm:mt-3">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
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
    </div>
  );
};

export default Hero;