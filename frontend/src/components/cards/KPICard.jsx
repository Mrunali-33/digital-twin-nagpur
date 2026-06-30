import { motion } from "framer-motion";
import GlassCard from "../common/GlassCard";

import {
  Wind,
  Waves,
  CloudRain,
  Droplets,
  TriangleAlert,
} from "lucide-react";

function KPICard({
  title,
  value,
  color,
  icon,
}) {

  const valueText = String(value);

  let status = "NORMAL";

  let border = "border-cyan-500/20";

  let badge =
    "bg-cyan-500/10 text-cyan-300";

  if (
    valueText.includes("HIGH") ||
    valueText.includes("HAZARDOUS") ||
    Number(value) > 200
  ) {

    status = "CRITICAL";

    border = "border-red-500/40";

    badge =
      "bg-red-500/15 text-red-300";

  }

  else if (
    valueText.includes("MODERATE") ||
    valueText.includes("UNHEALTHY") ||
    Number(value) > 100
  ) {

    status = "WARNING";

    border =
      "border-yellow-500/40";

    badge =
      "bg-yellow-500/15 text-yellow-300";

  }

  const icons = {

    "🌫": Wind,

    "🌊": Waves,

    "🌧": CloudRain,

    "💧": Droplets,

    "⚠": TriangleAlert,

  };

  const Icon =
    icons[icon] || Wind;

  return (

    <GlassCard
      className={`px-4 py-3 ${border}`}
    >

      <div className="flex items-start justify-between">

        <div>

          <p className="text-[11px] uppercase tracking-[2px] text-slate-500">

            {title}

          </p>

          <motion.h2

            initial={{
              opacity: 0,
              y: 5,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: .3
            }}

            className={`mt-2 text-[26px] font-bold leading-none ${color}`}

          >

            {value}

          </motion.h2>

        </div>

        <div className="rounded-lg bg-cyan-500/10 p-2">

          <Icon
            size={18}
            className="text-cyan-300"
          />

        </div>

      </div>

      <div className="mt-3 flex items-center justify-between">

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wider ${badge}`}
        >
          {status}
        </span>

        <span className="text-[10px] text-slate-500">
          LIVE
        </span>

      </div>

    </GlassCard>

  );

}

export default KPICard;