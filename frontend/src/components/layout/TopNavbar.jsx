import logo from "../../assets/neeri-logo.png";
import { motion } from "framer-motion";
import { Bell, Activity } from "lucide-react";
import GlassCard from "../common/GlassCard";

function TopNavbar() {
  return (
    <div className="px-3 pt-2">
      <GlassCard
        hover={false}
        className="h-[80px] px-6 flex items-center justify-between"
      >
        {/* Left Spacer */}
        <div className="w-20" />

{/* Center Logo + Title */}
<div className="flex-1 flex justify-center">
  <div className="flex items-center gap-5">

    <img
      src={logo}
      alt="CSIR NEERI"
      className="h-18 w-auto object-contain"
    />

    <div className="flex items-center">

      <h1
        className="
          text-4xl
          font-extrabold
          tracking-[0.12em]
          uppercase
          text-cyan-300
          whitespace-nowrap
          drop-shadow-[0_0_18px_rgba(34,211,238,.35)]
        "
        style={{
          fontFamily: "Montserrat",
        }}
      >
        CSIR – NEERI Environmental Digital Twin
      </h1>

    </div>

  </div>
</div>
        {/* Right Side */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5">
            <Activity
              size={14}
              className="text-emerald-400 animate-pulse"
            />

            <span className="text-sm font-semibold text-emerald-300">
              LIVE
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-2"
          >
            <Bell
              size={18}
              className="text-cyan-300"
            />
          </motion.button>
        </div>
      </GlassCard>
    </div>
  );
}

export default TopNavbar;