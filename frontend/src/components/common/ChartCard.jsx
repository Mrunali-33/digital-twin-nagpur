import GlassCard from "./GlassCard";
import { motion } from "framer-motion";

function ChartCard({
  title,
  status = "LIVE",
  children,
}) {
  return (
    <GlassCard
      className="
      h-full
      p-3
      flex
      flex-col
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">

        <motion.h2
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-semibold tracking-wide text-slate-200"
        >
          {title}
        </motion.h2>

        <div className="flex items-center gap-2">

          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

          <span className="text-[10px] uppercase tracking-widest text-emerald-300">
            {status}
          </span>

        </div>

      </div>

      <div className="flex-1 min-h-0">
        {children}
      </div>

    </GlassCard>
  );
}

export default ChartCard;