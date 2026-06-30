import PanelCard from "../common/PanelCard";
import MetricRow from "../common/MetricRow";
import { Activity, CloudRain } from "lucide-react";

function LeftSidebar({ data }) {
  return (
    <div className="h-full overflow-y-auto space-y-3 pr-1">

      {/* Environment Status */}

      <PanelCard
        title="Environment Monitoring"
        icon={<Activity size={16} className="text-cyan-300" />}
      >
        <div className="mb-3 flex items-center gap-2">

          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>

          <span className="text-xs tracking-wider text-green-400">
            LIVE SYSTEM
          </span>

        </div>

        <MetricRow
          label="AQI"
          value={data?.aqi ?? "--"}
          color="text-red-400"
        />

        <MetricRow
          label="PM2.5"
          value="62"
          unit="µg/m³"
          color="text-orange-400"
        />

        <MetricRow
          label="PM10"
          value="94"
          unit="µg/m³"
          color="text-yellow-400"
        />

        <MetricRow
          label="Temperature"
          value="31"
          unit="°C"
          color="text-cyan-400"
        />

        <MetricRow
          label="Humidity"
          value="68"
          unit="%"
          color="text-blue-400"
        />

      </PanelCard>

      {/* Weather */}

      <PanelCard
        title="Weather & Water"
        icon={<CloudRain size={16} className="text-cyan-300" />}
      >
        <MetricRow
          label="Rainfall"
          value={data?.rain ?? 0}
          unit="mm"
          color="text-indigo-400"
        />

        <MetricRow
          label="Water Level"
          value={data?.water_level ?? 0}
          unit="m"
          color="text-green-400"
        />

        <MetricRow
          label="Wind Speed"
          value="12"
          unit="km/h"
          color="text-purple-400"
        />
      </PanelCard>

    </div>
  );
}

export default LeftSidebar;