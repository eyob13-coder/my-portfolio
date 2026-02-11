"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const CodeBeam = ({
    className,
    reverse = false,
    duration = 5,
}: {
    className?: string;
    reverse?: boolean;
    duration?: number;
}) => {
    return (
        <div className={cn("absolute inset-0 w-full h-full pointer-events-none overflow-hidden", className)}>
            <svg
                className="w-full h-full block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M50 0 V100"
                    stroke="url(#gradient-beam)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                />
                <defs>
                    <linearGradient id="gradient-beam" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EF4444" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#EF4444" />
                        <stop offset="1" stopColor="#EF4444" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export const TracingBeam = ({
    className,
    reverse = false,
}: {
    className?: string;
    reverse?: boolean;
}) => {
    return (
        <div className={cn("absolute w-1 h-full bg-slate-800/50", className)}>
            <motion.div
                className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-red-500 to-transparent"
                animate={{
                    top: ["0%", "100%"]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    )
}
