import { Activity } from "lucide-react";

function EnvironmentalTrendCard({ data }) {

  const getAQITrend = () => {

    if (data?.aqi > 200)
      return "↑ Rising";

    if (data?.aqi > 120)
      return "→ Stable";

    return "↓ Improving";
  };

  const getFloodTrend = () => {

    if (data?.flood_risk === "HIGH")
      return "↑ Rising";

    if (data?.flood_risk === "MODERATE")
      return "→ Stable";

    return "↓ Low";
  };

  const getWaterTrend = () => {

    if (data?.water_level > 6)
      return "↑ Rising";

    if (data?.water_level > 3)
      return "→ Stable";

    return "↓ Low";
  };

  const getRainTrend = () => {

    if (data?.rain > 60)
      return "↑ Rising";

    if (data?.rain > 20)
      return "→ Stable";

    return "↓ Low";
  };

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <div className="flex items-center gap-2 mb-3">

        <Activity size={18} />

        <h2 className="text-cyan-400 font-bold">
          Environmental Trends
        </h2>

      </div>

      <div className="space-y-2 text-sm">

        <div className="flex justify-between">
          <span>Air Quality</span>
          <span className="text-red-400">
            {getAQITrend()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Flood Risk</span>
          <span className="text-blue-400">
            {getFloodTrend()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Water Level</span>
          <span className="text-cyan-400">
            {getWaterTrend()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Rainfall</span>
          <span className="text-yellow-400">
            {getRainTrend()}
          </span>
        </div>

        <hr className="border-cyan-500/20" />

        <div className="flex justify-between">

          <span>AI Confidence</span>

          <span className="text-green-400 font-semibold">
            89%
          </span>

        </div>

      </div>

    </div>

  );
}

export default EnvironmentalTrendCard;