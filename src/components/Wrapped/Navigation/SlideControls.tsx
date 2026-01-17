"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideControlsProps {
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  className?: string;
}

export default function SlideControls({
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  className,
}: SlideControlsProps) {
  const [showHint, setShowHint] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Tap zones for navigation */}
      <div className={cn("fixed inset-0 z-40 flex", className)}>
        {/* Left tap zone - Previous */}
        {canGoPrevious && (
          <button
            onClick={onPrevious}
            className="flex-[3] cursor-w-resize group"
            aria-label="Previous slide"
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <motion.div
                initial={{ x: 10 }}
                whileHover={{ x: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-full p-3"
              >
                <ChevronLeft size={32} className="text-white" />
              </motion.div>
            </div>
          </button>
        )}

        {/* Right tap zone - Next */}
        {canGoNext && (
          <button
            onClick={onNext}
            className="flex-[7] cursor-e-resize group"
            aria-label="Next slide"
          >
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <motion.div
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-full p-3"
              >
                <ChevronRight size={32} className="text-white" />
              </motion.div>
            </div>
          </button>
        )}
      </div>

      {/* Hint overlay */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white text-sm font-medium">
              Tap or swipe to navigate →
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
