import React from "react";
import { Statistics } from "@/lib/Wrapped";
import formatTimeLength from "@/lib/utils/formatTimeLength";

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
      className="bg-zinc-950 text-white p-16 flex flex-col justify-between relative overflow-hidden font-sans"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-starship-500 rounded-full blur-[200px] opacity-20 -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500 rounded-full blur-[150px] opacity-20 -ml-20 -mb-20"></div>

      {/* Header */}
      <div className="z-10">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">
          Wrapped for
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-starship-400 to-pink-500">
            Instagram
          </span>
        </h1>
        <p className="text-zinc-400 text-3xl font-medium">2025 Edition</p>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center z-10 my-10">
        <div className="relative">
          <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-zinc-800 shadow-2xl mb-8">
            {statistics.profilePicture ? (
              <img
                src={statistics.profilePicture}
                alt={statistics.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <span className="text-8xl font-black text-zinc-700">
                  {statistics.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
          <div className="absolute -bottom-4 right-10 bg-starship-400 text-zinc-900 font-bold px-6 py-2 rounded-full text-2xl shadow-lg transform rotate-[-6deg]">
            Top 1% Fan
          </div>
        </div>
        <h2 className="text-5xl font-bold mt-4">{statistics.name}</h2>
        <p className="text-zinc-400 text-2xl mt-2">@instagram_user</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-8 z-10">
        <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800/50">
          <p className="text-zinc-400 text-xl font-medium uppercase tracking-wide mb-2">
            Time Wasted
          </p>
          <p className="text-5xl font-black text-white">
            {totalWatchTimeAmount}
            <span className="text-3xl font-bold text-zinc-500 ml-2">
              {totalWatchTimeUnit}
            </span>
          </p>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800/50">
          <p className="text-zinc-400 text-xl font-medium uppercase tracking-wide mb-2">
            Stories Posted
          </p>
          <p className="text-5xl font-black text-white">
            {statistics.activity.storiesPosted.toLocaleString()}
          </p>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800/50">
          <p className="text-zinc-400 text-xl font-medium uppercase tracking-wide mb-2">
            DMs Received
          </p>
          <p className="text-5xl font-black text-white">
            {statistics.directMessages.dmReceived.toLocaleString()}
          </p>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800/50">
          <p className="text-zinc-400 text-xl font-medium uppercase tracking-wide mb-2">
            Top Emoji
          </p>
          <p className="text-6xl">
            {statistics.emoji.mostUsedEmoji.emoji}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="z-10 mt-12 flex justify-between items-end border-t border-zinc-800 pt-8">
        <div>
          <p className="text-2xl font-bold text-white">ig-wrapped</p>
          <p className="text-zinc-500 text-xl">Privacy-first analysis</p>
        </div>
        <div className="text-right">
          <p className="text-zinc-400 text-xl">Get yours at</p>
          <p className="text-starship-400 text-2xl font-bold">
            wrapped.vantezzen.io
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShareCard;
