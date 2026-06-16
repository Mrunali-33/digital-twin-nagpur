function SensorStatusCard({ data }) {

  const sensors = [

    {
      name: "AQI Sensor",
      status:
        data.aqi > 220
          ? "WARNING"
          : "ONLINE",
    },

    {
      name: "Weather Station",
      status:
        data.rain > 80
          ? "WARNING"
          : "ONLINE",
    },

    {
      name: "Water Sensor",
      status:
        data.water_level > 8
          ? "WARNING"
          : "ONLINE",
    },

    {
      name: "Flood Sensor",
      status:
        data.flood_risk === "HIGH"
          ? "WARNING"
          : "ONLINE",
    },

  ];

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <h2 className="text-cyan-400 font-bold mb-3">
        Sensor Network
      </h2>

      <div className="space-y-2">

        {sensors.map((sensor, index) => (

          <div
            key={index}
            className="flex justify-between text-sm"
          >

            <span>{sensor.name}</span>

            <span
              className={
                sensor.status === "ONLINE"
                  ? "text-green-400"
                  : "text-yellow-400"
              }
            >
              {sensor.status}
            </span>

          </div>

        ))}

      </div>

    </div>

  );
}

export default SensorStatusCard;