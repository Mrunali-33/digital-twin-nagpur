import { Waves } from "lucide-react";

function FloodPredictionCard({ data }) {

  const currentRisk =
    data?.flood_risk || "LOW";

  let risk1h = currentRisk;
  let risk6h = currentRisk;
  let risk24h = currentRisk;

  if (
    data?.rain > 60 ||
    data?.water_level > 6
  ) {
    risk6h = "HIGH";
    risk24h = "HIGH";
  }

  const getColor = (risk) => {

    switch (risk) {

      case "HIGH":
        return "text-red-400";

      case "MODERATE":
        return "text-yellow-400";

      default:
        return "text-green-400";
    }
  };

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <div className="flex items-center gap-2 mb-3">

        <Waves size={18} />

        <h2 className="text-cyan-400 font-bold">
          Flood Prediction
        </h2>

      </div>

      <div className="space-y-2 text-sm">

        <div className="flex justify-between">

          <span>Current</span>

          <span className={getColor(currentRisk)}>
            {currentRisk}
          </span>

        </div>

        <div className="flex justify-between">

          <span>1 Hour</span>

          <span className={getColor(risk1h)}>
            {risk1h}
          </span>

        </div>

        <div className="flex justify-between">

          <span>6 Hours</span>

          <span className={getColor(risk6h)}>
            {risk6h}
          </span>

        </div>

        <div className="flex justify-between">

          <span>24 Hours</span>

          <span className={getColor(risk24h)}>
            {risk24h}
          </span>

        </div>

      </div>

    </div>

  );
}

export default FloodPredictionCard;