import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

function EnvironmentalMetrics({
  data,
  environmentHealth,
}) {
  const latestHealthScore =
    environmentHealth?.length > 0
      ? environmentHealth[
          environmentHealth.length - 1
        ].health_score
      : 0;

  const floodProbability =
    data?.flood_probability || 0;

  const pollution =
    data?.pollution_status || "NORMAL";

  const healthColor =
    latestHealthScore > 80
      ? "text-emerald-400"
      : latestHealthScore > 60
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <div
      className="
      h-full
      rounded-2xl
      border border-cyan-500/20
      bg-[#0B1622]/70
      backdrop-blur-xl
      p-4
      flex
      flex-col
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <h2 className="text-sm font-semibold tracking-wide text-cyan-300">
          AI Environmental
        </h2>

        <BrainCircuit
          size={18}
          className="text-cyan-400"
        />

      </div>

      {/* Health Score */}

      <div className="mt-3">

        <p className="text-[11px] uppercase tracking-wider text-slate-500">
          HEALTH SCORE
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-1 text-3xl font-bold ${healthColor}`}
        >
          {Math.round(latestHealthScore)}%
        </motion.h2>

      </div>

      {/* Progress */}

      <div className="mt-3 h-2 rounded-full bg-slate-800 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${latestHealthScore}%`,
          }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full bg-cyan-400"
        />

      </div>

      {/* Metrics */}

      <div className="mt-4 space-y-2 text-sm">

        <div className="flex justify-between">
          <span className="text-slate-400">
            Flood Risk
          </span>

          <span className="text-red-300 font-semibold">
            {Math.round(floodProbability)}%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Pollution
          </span>

          <span className="text-yellow-300 font-semibold">
            {pollution}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            AI Status
          </span>

          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
            ACTIVE
          </span>
        </div>

      </div>

      {/* Footer */}

      <div className="mt-auto pt-3">

        <div
          className="
          rounded-xl
          border border-cyan-500/15
          bg-cyan-500/5
          px-3
          py-2
          text-center
          text-[11px]
          text-cyan-300
          tracking-wider
          "
        >
          AI MODEL RUNNING
        </div>

      </div>

    </div>
  );
}

export default EnvironmentalMetrics;