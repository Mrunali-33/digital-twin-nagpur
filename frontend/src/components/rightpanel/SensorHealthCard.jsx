import { motion } from "framer-motion";
import { Cpu, Wifi, AlertTriangle, WifiOff } from "lucide-react";

import PanelCard from "../common/PanelCard";
import { sensors } from "../../data/sensors";

function SensorHealthCard() {
  const online = sensors.filter(
    (s) => s.status === "ONLINE"
  ).length;

  const warning = sensors.filter(
    (s) => s.status === "WARNING"
  ).length;

  const offline = sensors.filter(
    (s) => s.status === "OFFLINE"
  ).length;

  const healthScore = Math.round(
    (online / sensors.length) * 100
  );

  return (
    <PanelCard
      title="Sensor Network"
      icon={<Cpu size={16} className="text-cyan-300" />}
    >
      {/* Status Rows */}

      <div className="space-y-2">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 text-sm text-slate-300">

            <Wifi
              size={14}
              className="text-emerald-400"
            />

            Online

          </div>

          <span className="font-semibold text-emerald-400">

            {online}

          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 text-sm text-slate-300">

            <AlertTriangle
              size={14}
              className="text-amber-400"
            />

            Warning

          </div>

          <span className="font-semibold text-amber-400">

            {warning}

          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 text-sm text-slate-300">

            <WifiOff
              size={14}
              className="text-red-400"
            />

            Offline

          </div>

          <span className="font-semibold text-red-400">

            {offline}

          </span>

        </div>

      </div>

      {/* Divider */}

      <div className="my-3 h-px bg-cyan-500/10" />

      {/* Bottom */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs text-slate-400">

            Network Health

          </p>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-emerald-400"
          >
            {healthScore}%
          </motion.h2>

        </div>

        <div
          className="
            h-10
            w-10
            rounded-lg
            bg-emerald-500/10
            flex
            items-center
            justify-center
          "
        >
          <Cpu
            size={18}
            className="text-emerald-400"
          />
        </div>

      </div>

    </PanelCard>
  );
}

export default SensorHealthCard;