import React from "react";
import { motion } from "framer-motion";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";

function Intro({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer bg="gradient-mesh-purple" text="text-white">
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 px-4">
        {/* Main greeting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2,
          }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4">
            Hey {statistics.name}! 👋
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-semibold">
            Ready for your Instagram Wrapped?
          </p>
        </motion.div>

        {/* Floating decorative emoji */}
        <motion.div
          className="absolute top-10 right-10 md:top-20 md:right-20 text-5xl md:text-7xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>

        {/* Another floating emoji */}
        <motion.div
          className="absolute bottom-20 left-10 md:bottom-32 md:left-20 text-4xl md:text-6xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          📸
        </motion.div>
      </div>
    </WrappedContainer>
  );
}

export default Intro;
