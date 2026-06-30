import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

import PanelCard from "../common/PanelCard";

import { areaStatus } from "../../data/areaStatus";

function ActiveAlertsCard() {

  const activeAlerts = [];

  Object.values(areaStatus).forEach((area) => {

    area.alerts.forEach((alert) => {

      activeAlerts.push({
        area: area.name,
        message: alert,
      });

    });

  });

  return (

    <PanelCard
      title="Active Alerts"
      icon={<AlertTriangle size={16} className="text-amber-400" />}
    >

      <div className="space-y-2">

        {activeAlerts.length === 0 ? (

          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">

            ✓ No active alerts

          </div>

        ) : (

          activeAlerts.map((alert, index) => (

            <motion.div
              key={index}
              whileHover={{ x: 2 }}
              className="
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-red-500/20
                bg-red-500/10
                px-3
                py-2
              "
            >

              <div>

                <p className="text-[11px] font-semibold text-red-300">

                  {alert.area}

                </p>

                <p className="text-xs text-slate-300">

                  {alert.message}

                </p>

              </div>

              <AlertTriangle
                size={14}
                className="text-red-400 flex-shrink-0"
              />

            </motion.div>

          ))

        )}

      </div>

    </PanelCard>

  );

}

export default ActiveAlertsCard;