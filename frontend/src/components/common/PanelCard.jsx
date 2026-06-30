import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

function PanelCard({
  title,
  icon,
  children,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -10,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      whileHover={{
        y: -2,
      }}
      className="
        rounded-2xl
        border
        border-cyan-500/15
        bg-[#0B1622]/70
        backdrop-blur-xl
        shadow-[0_0_20px_rgba(0,255,255,0.05)]
        p-4
      "
    >
      <SectionTitle
        title={title}
        icon={icon}
      />

      <div className="mt-3">
        {children}
      </div>
    </motion.div>
  );
}

export default PanelCard;