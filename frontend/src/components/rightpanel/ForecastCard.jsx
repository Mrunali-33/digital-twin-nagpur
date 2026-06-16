import { TrendingUp } from "lucide-react";

function ForecastCard({ data }) {

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <div className="flex items-center gap-2 mb-3">

        <TrendingUp size={18} />

        <h2 className="text-cyan-400 font-bold">
          24 Hour Forecast
        </h2>

      </div>

      <div className="space-y-2 text-sm">

        <div className="flex justify-between">

          <span>Current AQI</span>

          <span className="text-cyan-300">
            {data.aqi}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Predicted AQI</span>

          <span className="text-red-400">
            {(data?.aqi ?? 0) + 15}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Flood Probability</span>

          <span className="text-blue-400">

            {Math.min(
              (data?.rain ?? 0) +
              (data?.water_level ?? 0),
              100
            )}
            %

          </span>

        </div>

      </div>

    </div>

  );
}

export default ForecastCard;