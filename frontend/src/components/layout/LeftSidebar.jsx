function LeftSidebar({ data }) {

  const metrics = [

    {
      label: "AQI",
      value: data?.aqi || "--",
      color: "text-red-400",
      unit: "",
    },

    {
      label: "PM2.5",
      value: 62,
      color: "text-orange-400",
      unit: "µg/m³",
    },

    {
      label: "PM10",
      value: 94,
      color: "text-yellow-400",
      unit: "µg/m³",
    },

    {
      label: "Temperature",
      value: 31,
      color: "text-cyan-400",
      unit: "°C",
    },

    {
      label: "Humidity",
      value: 68,
      color: "text-blue-400",
      unit: "%",
    },

    {
      label: "Rainfall",
      value: data?.rain || 0,
      color: "text-indigo-400",
      unit: "mm",
    },

    {
      label: "Water Level",
      value: data?.water_level || 0,
      color: "text-green-400",
      unit: "m",
    },

    {
      label: "Wind Speed",
      value: 12,
      color: "text-purple-400",
      unit: "km/h",
    },

  ];

  return (

    <div className="h-full flex flex-col gap-3 overflow-y-auto">

      {/* HEADER */}

      <div className="bg-[#0B1622]/80 border border-cyan-500/30 rounded-2xl p-4 backdrop-blur-md">

        <h2 className="text-cyan-400 font-bold text-lg">
          Environment Monitoring
        </h2>

        <div className="flex items-center gap-2 mt-2">

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

          <span className="text-xs text-green-400">
            LIVE SYSTEM
          </span>

        </div>

      </div>

      {/* Future Backend-Driven Intelligence */}

       {/* <AreaIntelligencePanel /> */}

       {/* <RegionalRankingPanel /> */}

       {/* <AIRecommendedActionsPanel /> */}


      {/* METRICS */}

      {metrics.map((metric, index) => (

        <div
          key={index}
          className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4 backdrop-blur-md hover:border-cyan-400 transition-all"
        >

          <p className="text-gray-400 text-sm">
            {metric.label}
          </p>

          <div className="flex items-end justify-between mt-1">

            <h2 className={`text-2xl font-bold ${metric.color}`}>

              {metric.value}

            </h2>

            <span className="text-xs text-gray-500">

              {metric.unit}

            </span>

          </div>

        </div>

      ))}

    </div>

  );
}

export default LeftSidebar;