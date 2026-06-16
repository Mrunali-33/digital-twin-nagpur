import KPICard from "../cards/KPICard";

function KPISection({ data }) {

  if (!data) return null;

const cards = [
  {
    title: "AQI Tracking",
    value: data.aqi,
    color: data.aqi > 200
      ? "text-red-400"
      : "text-cyan-400",
    icon: "🌫",
  },

  {
    title: "Flood Risk",
    value: data.flood_risk,
    color:
      data.flood_risk === "HIGH"
        ? "text-red-400"
        : "text-green-400",
    icon: "🌊",
  },

  {
    title: "Pollution",
    value: data.pollution_status,
    color:
      data.pollution_status === "HAZARDOUS"
        ? "text-red-400"
        : "text-yellow-400",
    icon: "⚠",
  },

  {
    title: "Rainfall",
    value: `${data.rain} mm`,
    color: "text-blue-400",
    icon: "🌧",
  },

  {
    title: "Water Level",
    value: `${data.water_level} m`,
    color:
      data.water_level > 8
        ? "text-purple-400"
        : "text-green-400",
    icon: "💧",
  },
];
  return (
    <div className="grid grid-cols-5 gap-2 px-3 pt-2">

      {cards.map((card, index) => (
        <KPICard
          key={index}
          title={card.title}
          value={card.value}
          color={card.color}
          icon={card.icon}
        />
      ))}

    </div>
  );
}

export default KPISection;