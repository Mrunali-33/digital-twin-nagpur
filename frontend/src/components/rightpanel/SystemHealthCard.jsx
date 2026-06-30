import { motion } from "framer-motion";
import { Shield, Cpu, RadioTower } from "lucide-react";

import PanelCard from "../common/PanelCard";

function SystemHealthCard({ data }) {
  const healthScore = Math.max(
    100 - Math.floor(data.aqi / 2),
    0
  );

  const sensorsHealthy =
    data.aqi > 220 ||
    data.water_level > 8 ||
    data.flood_risk === "HIGH"
      ? "10 / 12"
      : "12 / 12";

  return (
    <PanelCard
      title="System Health"
      icon={<Shield size={16} className="text-cyan-300" />}
    >
      {/* Score */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs text-slate-400">
            Environmental Score
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-emerald-400"
          >
            {healthScore}%
          </motion.h2>

        </div>

        <div
          className="
          h-12
          w-12
          rounded-xl
          bg-emerald-500/10
          flex
          items-center
          justify-center
          "
        >
          <Shield
            size={24}
            className="text-emerald-400"
          />
        </div>

      </div>

      {/* Bottom */}

      <div className="mt-4 grid grid-cols-2 gap-2">

        <div
          className="
          rounded-xl
          border
          border-cyan-500/10
          bg-cyan-500/5
          px-3
          py-2
          "
        >
          <div className="flex items-center gap-1 text-slate-400 text-[11px]">

            <Cpu size={12} />

            Sensors

          </div>

          <div className="mt-1 text-sm font-semibold text-cyan-300">

            {sensorsHealthy}

          </div>

        </div>

        <div
          className="
          rounded-xl
          border
          border-cyan-500/10
          bg-cyan-500/5
          px-3
          py-2
          "
        >
          <div className="flex items-center gap-1 text-slate-400 text-[11px]">

            <RadioTower size={12} />

            Coverage

          </div>

          <div className="mt-1 text-sm font-semibold text-cyan-300">

            94%

          </div>

        </div>

      </div>
    </PanelCard>
  );
}

export default SystemHealthCard;