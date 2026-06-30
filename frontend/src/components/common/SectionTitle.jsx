import { motion } from "framer-motion";

function SectionTitle({
  title,
  subtitle = "",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`mb-4 ${className}`}
    >
      <h2 className="text-[15px] font-semibold tracking-wide text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-1 text-xs text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;