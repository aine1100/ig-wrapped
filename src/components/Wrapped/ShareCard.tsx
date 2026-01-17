import React from "react";
import { Statistics } from "@/lib/Wrapped";
import formatTimeLength from "@/lib/utils/formatTimeLength";
import Image from "next/image";

function ShareCard({
  statistics,
  forwardedRef,
}: {
  statistics: Statistics;
  forwardedRef: React.Ref<HTMLDivElement>;
}) {
  const { amount: totalWatchTimeAmount, unit: totalWatchTimeUnit } =
    formatTimeLength(statistics.useTime.totalUsageTimeSec);

  return (
    <div
      ref={forwardedRef}
      style={{
        width: 1080,
        height: 1920,
      }}
      className="bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 text-white p-16 flex flex-col justify-between relative overflow-hidden font-sans"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/30 opacity-50"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="z-10">
        <h1 className="text-8xl font-black mb-6 leading-none">
          My Instagram
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
            Wrapped
          </span>
        </h1>
        <p className="text-white/70 text-4xl font-bold">2025 Edition</p>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center z-10 my-16">
        <div className="relative mb-8">
          <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl backdrop-blur-sm">
            {statistics.profilePicture ? (
              <Image
                src={statistics.profilePicture}
                alt={statistics.name}
                width={320}
                height={320}
                className="w-full h-full object-cover"
                unoptimized
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                <span className="text-9xl font-black text-white/60">
                  {statistics.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>
        <h2 className="text-6xl font-black text-white mb-3">{statistics.name}</h2>
        <div className="bg-white/20 backdrop-blur-md px-8 py-3 rounded-full">
          <p className="text-white/90 text-3xl font-bold">Top Fan 2025</p>
        </div>
      </div>

      {/* Stats - Simple Grid with 4 Key Stats */}
      <div className="grid grid-cols-2 gap-6 z-10 mb-12">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border-2 border-white/20">
          <p className="text-white/70 text-2xl font-bold uppercase tracking-wider mb-3">
            Time Spent
          </p>
          <p className="text-7xl font-black text-white leading-none">
            {totalWatchTimeAmount}
          </p>
          <p className="text-4xl font-bold text-white/60 mt-2">
            {totalWatchTimeUnit}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border-2 border-white/20">
          <p className="text-white/70 text-2xl font-bold uppercase tracking-wider mb-3">
            DMs Sent
          </p>
          <p className="text-7xl font-black text-white leading-none">
            {statistics.directMessages.dmSent.toLocaleString()}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border-2 border-white/20">
          <p className="text-white/70 text-2xl font-bold uppercase tracking-wider mb-3">
            Stories
          </p>
          <p className="text-7xl font-black text-white leading-none">
            {statistics.activity.storiesPosted.toLocaleString()}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border-2 border-white/20 flex flex-col items-center justify-center">
          <p className="text-white/70 text-2xl font-bold uppercase tracking-wider mb-4">
            Top Emoji
          </p>
          <p className="text-9xl">
            {statistics.emoji.mostUsedEmoji.emoji}
          </p>
          <p className="text-3xl font-bold text-white/60 mt-3">
            ×{statistics.emoji.mostUsedEmoji.count}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="z-10 flex justify-between items-center border-t-2 border-white/20 pt-8">
        <div>
          <p className="text-3xl font-black text-white">IG Wrapped</p>
          <p className="text-white/60 text-2xl mt-1">Privacy-first analytics</p>
        </div>
        <div className="text-right">
          <p className="text-white/60 text-2xl">Get yours at</p>
          <p className="text-yellow-300 text-3xl font-black mt-1">
            wrapped.vantezzen.io
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShareCard;
