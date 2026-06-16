import { Shield } from "lucide-react";

function SystemHealthCard({ data }) {

  const healthScore = Math.max(
    100 - Math.floor(data.aqi / 2),
    0
  );

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <div className="flex items-center gap-2 mb-3">
        <Shield size={18} />

        <h2 className="text-cyan-400 font-bold">
          System Health
        </h2>
      </div>

      <div className="space-y-3">

        <div>

          <p className="text-gray-400 text-sm">
            Environmental Score
          </p>

          <h2 className="text-green-400 text-3xl font-bold">
            {healthScore}%
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">

          <div className="bg-[#102235] p-2 rounded-lg">

            Sensors

            <div className="text-cyan-300 font-bold">
              {data.aqi > 220 ||
               data.water_level > 8 ||
               data.flood_risk === "HIGH"
                ? "10 / 12"
                : "12 / 12"}
            </div>

          </div>

          <div className="bg-[#102235] p-2 rounded-lg">

            Coverage

            <div className="text-cyan-300 font-bold">
              94%
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default SystemHealthCard;