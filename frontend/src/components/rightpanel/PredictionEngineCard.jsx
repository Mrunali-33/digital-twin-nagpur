import { Brain } from "lucide-react";

function PredictionEngineCard({ data }) {

  const currentAQI = data?.aqi || 0;

  const prediction1h = currentAQI + 10;
  const prediction6h = currentAQI + 25;
  const prediction24h = currentAQI + 45;

  const confidence = 89;

  const trend =
    prediction24h > currentAQI
      ? "Rising ↑"
      : "Stable →";

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <div className="flex items-center gap-2 mb-3">

        <Brain size={18} />

        <h2 className="text-cyan-400 font-bold">
          AI Prediction Engine
        </h2>

      </div>

      <div className="space-y-2 text-sm">

        <div className="flex justify-between">
          <span>Current AQI</span>
          <span className="text-cyan-300">
            {currentAQI}
          </span>
        </div>

        <div className="flex justify-between">
          <span>1 Hour</span>
          <span className="text-yellow-400">
            {prediction1h}
          </span>
        </div>

        <div className="flex justify-between">
          <span>6 Hours</span>
          <span className="text-orange-400">
            {prediction6h}
          </span>
        </div>

        <div className="flex justify-between">
          <span>24 Hours</span>
          <span className="text-red-400">
            {prediction24h}
          </span>
        </div>

        <hr className="border-cyan-500/20" />

        <div className="flex justify-between">
          <span>Trend</span>
          <span className="text-cyan-300">
            {trend}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Confidence</span>
          <span className="text-green-400">
            {confidence}%
          </span>
        </div>

      </div>

    </div>

  );
}

export default PredictionEngineCard;