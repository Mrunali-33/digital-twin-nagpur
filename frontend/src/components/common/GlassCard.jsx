import { motion } from "framer-motion";

function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={`
        rounded-2xl
        border
        border-white/8
        bg-[rgba(12,23,36,0.72)]
        backdrop-blur-xl
        shadow-[0_10px_35px_rgba(0,0,0,0.28)]
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default GlassCard;