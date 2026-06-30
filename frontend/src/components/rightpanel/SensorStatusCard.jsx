import { motion } from "framer-motion";
import {
  Radio,
  CircleCheck,
  TriangleAlert,
} from "lucide-react";

import PanelCard from "../common/PanelCard";

function SensorStatusCard({ data }) {
  const sensors = [
    {
      name: "AQI Sensor",
      status:
        data.aqi > 220
          ? "WARNING"
          : "ONLINE",
    },

    {
      name: "Weather Station",
      status:
        data.rain > 80
          ? "WARNING"
          : "ONLINE",
    },

    {
      name: "Water Sensor",
      status:
        data.water_level > 8
          ? "WARNING"
          : "ONLINE",
    },

    {
      name: "Flood Sensor",
      status:
        data.flood_risk === "HIGH"
          ? "WARNING"
          : "ONLINE",
    },
  ];

  return (
    <PanelCard
      title="Live Sensor Status"
      icon={<Radio size={16} className="text-cyan-300" />}
    >
      <div className="space-y-2">

        {sensors.map((sensor, index) => {

          const online =
            sensor.status === "ONLINE";

          return (

            <motion.div
              key={index}
              whileHover={{ x: 2 }}
              className="
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-cyan-500/10
                bg-cyan-500/5
                px-3
                py-2
              "
            >

              <div className="flex items-center gap-2">

                {online ? (

                  <CircleCheck
                    size={14}
                    className="text-emerald-400"
                  />

                ) : (

                  <TriangleAlert
                    size={14}
                    className="text-amber-400"
                  />

                )}

                <span className="text-sm text-slate-300">

                  {sensor.name}

                </span>

              </div>

              <span
                className={
                  online
                    ? "text-xs font-semibold tracking-wide text-emerald-400"
                    : "text-xs font-semibold tracking-wide text-amber-400"
                }
              >

                {sensor.status}

              </span>

            </motion.div>

          );

        })}

      </div>
    </PanelCard>
  );
}

export default SensorStatusCard;