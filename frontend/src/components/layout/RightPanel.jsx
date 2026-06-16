import SystemHealthCard from "../rightpanel/SystemHealthCard";
import ActiveAlertsCard from "../rightpanel/ActiveAlertsCard";
import ForecastCard from "../rightpanel/ForecastCard";
import AIInsightsCard from "../rightpanel/AIInsightsCard";
import LiveEventFeed from "../rightpanel/LiveEventFeed";
import RecommendedActions from "../rightpanel/RecommendedActions";
import SensorStatusCard from "../rightpanel/SensorStatusCard";
import PredictionEngineCard from "../rightpanel/PredictionEngineCard";
import SensorHealthCard from "../rightpanel/SensorHealthCard";
import FloodPredictionCard from "../rightpanel/FloodPredictionCard";
import EnvironmentalTrendCard from "../rightpanel/EnvironmentalTrendCard";
function RightPanel({ data }) {

  if (!data) {
    return (
      <div className="text-cyan-400">
        Loading...
      </div>
    );
  }


  
  return (

    <div
      className="
      h-full
      flex
      flex-col
      gap-3
      overflow-y-auto
      pr-1
      "
    >

      <SystemHealthCard data={data} />

      <SensorHealthCard />

      <SensorStatusCard data={data} />

      <ActiveAlertsCard />

      <ForecastCard data={data} />

      <PredictionEngineCard data={data} />

      <FloodPredictionCard data={data} />

      <EnvironmentalTrendCard data={data} />

      <LiveEventFeed data={data} />

      <AIInsightsCard />

      <RecommendedActions />

    </div>

  );
}

export default RightPanel;