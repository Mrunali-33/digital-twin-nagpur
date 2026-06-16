import { areaStatus } from "../../data/areaStatus";

function AreaIntelligencePanel() {

  const areas = [
    areaStatus.neeri,
    areaStatus.rahate,
  ];

  const getStatusColor = (riskLevel) => {

    switch (riskLevel) {

      case "CRITICAL":
        return "text-red-400";

      case "WARNING":
        return "text-yellow-400";

      default:
        return "text-green-400";
    }
  };

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <h2 className="text-cyan-400 font-bold mb-3">
        Area Intelligence
      </h2>

      <div className="space-y-3">

        {areas.map((area) => (

          <div
            key={area.name}
            className="bg-[#102235] rounded-lg p-3"
          >

            <div className="flex justify-between items-center">

              <span className="font-semibold text-white">
                {area.name}
              </span>

              <span
                className={`font-bold ${getStatusColor(
                  area.riskLevel
                )}`}
              >
                {area.riskLevel}
              </span>

            </div>

            <div className="mt-3 text-sm space-y-2">

              <div className="flex justify-between">
                <span className="text-gray-400">
                  AQI
                </span>

                <span>
                  {area.aqi}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Rainfall
                </span>

                <span>
                  {area.rainfall} mm
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Water Level
                </span>

                <span>
                  {area.waterLevel} m
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Risk Score
                </span>

                <span>
                  {area.riskScore}/100
                </span>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default AreaIntelligencePanel;