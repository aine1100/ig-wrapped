import React from "react";
import { motion } from "framer-motion";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import CountUp from "react-countup";
import formatTimeLength from "@/lib/utils/formatTimeLength";

function TotalWatchTime({ statistics }: WrappedSlideProps) {
  const { amount, unit } = formatTimeLength(
    statistics.useTime.totalUsageTimeSec
  );
  const watchTimeMins = Math.round(statistics.useTime.totalUsageTimeSec / 60);

  return (
    <WrappedContainer bg="gradient-blue-green" text="text-white">
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        {/* Context label */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/80 font-medium"
        >
          You used Instagram for
        </motion.p>

        {/* Huge number */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.4,
          }}
          className="text-center"
        >
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-black text-white leading-none mb-4">
            <CountUp end={watchTimeMins} duration={2.5} />
          </h1>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/90">
            minutes
          </p>
        </motion.div>

        {/* Additional context */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-xl md:text-2xl text-white/70 font-semibold"
        >
          That's {amount} {unit}!
        </motion.p>
      </div>
    </WrappedContainer>
  );
}

export default TotalWatchTime;
