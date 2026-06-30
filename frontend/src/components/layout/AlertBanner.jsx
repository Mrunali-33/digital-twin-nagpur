import { motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";
import GlassCard from "../common/GlassCard";

function AlertBanner({ data }) {

  const isCritical =

    data?.aqi > 200 ||
    data?.flood_risk === "HIGH";

  if (!isCritical) return null;

return (
  <motion.div
    initial={{ opacity: 0, y: -12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
    className="px-3 pt-1"
  >
    <GlassCard
      hover={false}
      className="border-red-500/30 bg-red-500/5 px-4 py-2"
    >
      <div className="flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div className="rounded-lg bg-red-500/15 p-2">
            <TriangleAlert
              size={18}
              className="text-red-400"
            />
          </div>

          <div>

            <h3 className="text-[13px] font-semibold text-red-300">
              Critical Environmental Alert
            </h3>

            <p className="text-sm text-slate-300">

              {data?.aqi > 200 &&
                "Hazardous AQI detected"}

              {data?.aqi > 200 &&
               data?.flood_risk === "HIGH" &&
                " • "}

              {data?.flood_risk === "HIGH" &&
                "High flood probability detected"}

            </p>

          </div>

        </div>

        {/* Right */}

        <div
          className="
          rounded-full
          border
          border-red-500/40
          bg-red-500/10
          px-4
          py-1.5
          text-xs
          font-semibold
          tracking-widest
          text-red-300
          animate-pulse
          "
        >
          ACTIVE
        </div>

      </div>
    </GlassCard>
  </motion.div>
);}

export default AlertBanner;