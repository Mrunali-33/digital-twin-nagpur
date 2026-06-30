import { motion } from "framer-motion";

function AnalyticsCard({
  title,
  children,
  live = true,
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
      h-full
      rounded-2xl
      border
      border-cyan-500/15
      bg-[#091521]/92
      backdrop-blur-xl
      shadow-[0_0_25px_rgba(0,255,255,0.05)]
      overflow-hidden
      "
    >
      {/* Header */}

      <div
        className="
        flex
        items-center
        justify-between
        px-4
        pt-3
        pb-2
        border-b
        border-cyan-500/10
        "
      >
        <h2
          className="
          text-cyan-300
          font-semibold
          text-[15px]
          tracking-wide
          "
        >
          {title}
        </h2>

        {live && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-[10px] text-emerald-300">
              LIVE
            </span>
          </div>
        )}
      </div>

      <div className="h-[calc(100%-50px)] p-3">
        {children}
      </div>
    </motion.div>
  );
}

export default AnalyticsCard;