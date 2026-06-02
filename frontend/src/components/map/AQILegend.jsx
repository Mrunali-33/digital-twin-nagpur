function AQILegend() {

  const levels = [

    {
      color: "bg-green-500",
      label: "Good",
    },

    {
      color: "bg-yellow-500",
      label: "Moderate",
    },

    {
      color: "bg-orange-500",
      label: "Poor",
    },

    {
      color: "bg-red-500",
      label: "Hazardous",
    },

  ];

  return (

    <div className="absolute bottom-4 left-4 z-[1000]">

      <div className="bg-[#071018]/95 border border-cyan-500/30 rounded-xl p-4 backdrop-blur-md">

        <h2 className="text-cyan-400 font-bold mb-3">
          AQI Legend
        </h2>

        <div className="space-y-2">

          {levels.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-2"
            >

              <div
                className={`w-3 h-3 rounded-full ${item.color}`}
              />

              <span className="text-sm">
                {item.label}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default AQILegend;