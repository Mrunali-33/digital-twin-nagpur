import { Brain } from "lucide-react";

function AIInsightsCard() {

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <div className="flex items-center gap-2 mb-3">

        <Brain size={18} />

        <h2 className="text-cyan-400 font-bold">
          AI Insights
        </h2>

      </div>

      <div className="space-y-2 text-sm">

        <div>
          • AQI expected to rise by 12%
        </div>

        <div>
          • Flood risk remains stable
        </div>

        <div>
          • Water level within safe range
        </div>

        <div className="text-cyan-300 pt-2">
          Confidence: 89%
        </div>

      </div>

    </div>

  );
}

export default AIInsightsCard;