import { motion } from "framer-motion";

function MetricRow({
  label,
  value,
  unit = "",
  color = "text-cyan-300",
}) {
  return (
    <motion.div
      whileHover={{ x: 3 }}
      className="
        flex
        items-center
        justify-between
        py-2
        border-b
        border-cyan-500/10
        last:border-b-0
      "
    >
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <div className="flex items-baseline gap-1">
        <span className={`text-lg font-semibold ${color}`}>
          {value}
        </span>

        {unit && (
          <span className="text-xs text-slate-500">
            {unit}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default MetricRow;