import AQITrendChart from "../charts/AQITrendChart";
import RainfallBarChart from "../charts/RainfallBarChart";
import PollutionPieChart from "../charts/PollutionPieChart";
import EnvironmentalMetrics from "../charts/EnvironmentalMetrics";

function BottomAnalytics({
  data,
  history,
}) {

  return (

    <div className="h-full grid grid-cols-4 gap-3">

      <PollutionPieChart
        data={data}
      />

      <AQITrendChart
        history={history}
      />

      <RainfallBarChart
        history={history}
      />

      <EnvironmentalMetrics
        data={data}
      />

    </div>

  );
}

export default BottomAnalytics;