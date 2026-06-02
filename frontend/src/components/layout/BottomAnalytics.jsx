import AQITrendChart from "../charts/AQITrendChart";
import RainfallBarChart from "../charts/RainfallBarChart";
import PollutionPieChart from "../charts/PollutionPieChart";
import EnvironmentalMetrics from "../charts/EnvironmentalMetrics";

function BottomAnalytics() {
  return (
    <div className="h-full grid grid-cols-4 gap-3">

      <PollutionPieChart />

      <AQITrendChart />

      <RainfallBarChart />

      <EnvironmentalMetrics />

    </div>
  );
}

export default BottomAnalytics;