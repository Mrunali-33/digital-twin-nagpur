function KPICard({
  title,
  value,
  color,
  icon,
}) {

  const valueText = String(value);

  let glowClass =
    "hover:border-cyan-400/50";

  let statusText = "NORMAL";

  if (
    valueText.includes("HIGH") ||
    valueText.includes("HAZARDOUS") ||
    Number(value) > 200
  ) {
    glowClass =
      "border-red-500/50 shadow-[0_0_25px_rgba(239,68,68,0.35)]";

    statusText = "CRITICAL";
  }

  else if (
    valueText.includes("MODERATE") ||
    valueText.includes("UNHEALTHY") ||
    Number(value) > 100
  ) {
    glowClass =
      "border-yellow-500/50 shadow-[0_0_25px_rgba(234,179,8,0.30)]";

    statusText = "WARNING";
  }

  return (
    <div
      className={`
      bg-[#0B1622]/80
      border
      rounded-2xl
      p-2
      backdrop-blur-md
      transition-all
      duration-300
      hover:scale-[1.02]
      ${glowClass}
      `}
    >

      <div className="flex justify-between items-start">

        <div>

          <p className="text-gray-400 text-xs">
            {title}
          </p>

          <h1
            className={`text-xl font-bold mt-2 ${color}`}
          >
            {value}
          </h1>

          <p className="text-[10px] text-gray-500 mt-1">
            {statusText}
          </p>

        </div>

        <div className="text-xl">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default KPICard;