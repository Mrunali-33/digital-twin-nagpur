import AQITrendChart from "../charts/AQITrendChart";
import RainfallBarChart from "../charts/RainfallBarChart";
import PollutionPieChart from "../charts/PollutionPieChart";
import EnvironmentalMetrics from "../charts/EnvironmentalMetrics";
import RiskTrendChart from "../charts/RiskTrendChart";
import ZoneComparisonChart
from "../charts/ZoneComparisonChart";

function BottomAnalytics({
  data,
  history,
  aqiTrend,
  riskTrend,
  zoneComparison,
}) {

  return (

    <div className="h-full grid grid-cols-4 gap-3">

      <PollutionPieChart
        data={data}
      />

      <AQITrendChart
        history={aqiTrend}
      />

      <RiskTrendChart
       riskTrend={riskTrend}
     />

      <ZoneComparisonChart
  data={zoneComparison}
/>

    </div>

  );
}

export default BottomAnalytics;