"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const MovingDotBeam = ({
    className,
    orientation = "vertical",
    duration = 3,
    delay = 0,
}: {
    className?: string;
    orientation?: "vertical" | "horizontal";
    duration?: number;
    delay?: number;
}) => {
    const isVertical = orientation === "vertical";

    return (
        <div
            className={cn(
                "relative overflow-hidden bg-white/5",
                isVertical ? "w-[2px] h-full" : "w-full h-[2px]",
                className
            )}
        >
            <motion.div
                className={cn(
                    "absolute bg-red-500 rounded-full z-10 box-content shadow-[0_0_10px_2px_rgba(239,68,68,0.5)]",
                    isVertical ? "left-[-1px] w-1 h-2" : "top-[-1px] w-2 h-1"
                )}
                initial={isVertical ? { top: "-10%" } : { left: "-10%" }}
                animate={isVertical ? { top: "110%" } : { left: "110%" }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay,
                }}
            />
        </div>
    );
};
