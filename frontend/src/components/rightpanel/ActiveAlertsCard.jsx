import { AlertTriangle } from "lucide-react";

import {
  areaStatus,
} from "../../data/areaStatus";

function ActiveAlertsCard() {

const activeAlerts = [];

Object.values(areaStatus).forEach(area => {

  area.alerts.forEach(alert => {

    activeAlerts.push(
      `${area.name} • ${alert}`
    );

  });

});

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <div className="flex items-center gap-2 mb-3">

        <AlertTriangle size={18} />

        <h2 className="text-cyan-400 font-bold">
          Active Alerts
        </h2>

      </div>

      <div className="space-y-2">

        {activeAlerts.map((alert, index) => (

          <div
            key={index}
            className="
            bg-red-500/10
            border
            border-red-500/20
            rounded-lg
            p-2
            text-sm
            "
          >
            {alert}
          </div>

        ))}

      </div>

    </div>

  );
}

export default ActiveAlertsCard;