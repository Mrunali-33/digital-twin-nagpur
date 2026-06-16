import { Activity } from "lucide-react";

function RecommendedActions() {

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <div className="flex items-center gap-2 mb-3">

        <Activity size={18} />

        <h2 className="text-cyan-400 font-bold">
          Recommended Actions
        </h2>

      </div>

      <div className="space-y-2 text-sm">

        <div>
          • Monitor AQI hotspots
        </div>

        <div>
          • Inspect drainage channels
        </div>

        <div>
          • Increase sensor frequency
        </div>

        <div>
          • Prepare emergency response team
        </div>

      </div>

    </div>

  );
}

export default RecommendedActions;