function KPISection({ data }) {

  if (!data) return null;

  const cards = [
    {
      title: "AQI Tracking",
      value: data.aqi,
      color: "text-cyan-400",
    },
    {
      title: "Flood Risk",
      value: data.flood_risk,
      color: "text-red-400",
    },
    {
      title: "Pollution",
      value: data.pollution_status,
      color: "text-yellow-400",
    },
    {
      title: "Rainfall",
      value: `${data.rain} mm`,
      color: "text-blue-400",
    },
    {
      title: "Water Level",
      value: `${data.water_level} m`,
      color: "text-green-400",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-3 px-3 pt-3">

      {cards.map((card, index) => (

        <div
          key={index}
          className="
            bg-[#0B1622]/80
            border
            border-cyan-500/20
            rounded-2xl
            p-4
            backdrop-blur-md
            shadow-lg
            hover:border-cyan-400/50
            transition-all
          "
        >

          <p className="text-gray-400 text-sm">
            {card.title}
          </p>

          <h1 className={`text-3xl font-bold mt-2 ${card.color}`}>
            {card.value}
          </h1>

        </div>

      ))}

    </div>
  );
}

export default KPISection;