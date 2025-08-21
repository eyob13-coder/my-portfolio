"use client";

import React from "react";
import { IoClose } from "react-icons/io5";
// import Image from "next/image";

type ResumeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  fileName?: string;
};

const ResumeDialog = ({ open, onOpenChange, src, fileName }: ResumeDialogProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-5xl h-[85vh] rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-black/60">
          <button
            aria-label="Close resume"
            onClick={() => onOpenChange(false)}
            className="absolute top-3 right-3 z-10 inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white p-2"
          >
            <IoClose className="h-5 w-5" />
          </button>

          <div className="w-full h-full bg-black">
            <object data={src} type="application/pdf" className="w-full h-full">
              <img
                src={src}
                alt="Resume preview"
                
                className="object-contain"
                
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </object>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between bg-gradient-to-t from-black/70 to-transparent">
            <div className="text-white/80 text-xs sm:text-sm px-1">
              {fileName || "Resume"}
            </div>
            <div className="flex items-center gap-2">
              <a
                href={src}
                download={fileName || true}
                className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium"
              >
                Download
              </a>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/10"
              >
                Open in new tab
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDialog; 