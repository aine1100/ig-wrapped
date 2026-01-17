import React from "react";
import { motion } from "framer-motion";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import CountUp from "react-countup";

function Emojis({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer bg="gradient-orange-pink" text="text-white">
      <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
        {/* Context */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/80 font-medium text-center"
        >
          You used the emoji
        </motion.p>

        {/* Giant emoji with bounce */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
          className="text-9xl md:text-[12rem] lg:text-[14rem] my-8"
        >
          {statistics.emoji.mostUsedEmoji.emoji}
        </motion.div>

        {/* Count */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.5,
          }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white  leading-none mb-2">
            <CountUp end={statistics.emoji.mostUsedEmoji.count} duration={2.5} />
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-white/90">times</p>
        </motion.div>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-lg md:text-xl text-white/70 font-semibold text-center max-w-lg"
        >
          and used {statistics.emoji.emojisUsed.toLocaleString()} different
          emojis in total
        </motion.p>
      </div>
    </WrappedContainer>
  );
}

export default Emojis;
