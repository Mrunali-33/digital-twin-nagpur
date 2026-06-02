function RightPanel({ data }) {

  if (!data) {
    return (
      <div className="text-cyan-400">
        Loading AI Analytics...
      </div>
    );
  }

  const alerts = [];

  if (data.aqi > 150) {
    alerts.push("High Pollution Alert");
  }

  if (data.flood_risk === "HIGH") {
    alerts.push("Flood Risk Alert");
  }

  if (data.rain > 50) {
    alerts.push("Heavy Rainfall Alert");
  }

  return (

    <div className="h-full flex flex-col gap-3 overflow-y-auto pr-1">

      {/* AI RISK PREDICTION */}

      <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

        <h2 className="text-cyan-400 font-bold text-lg mb-3">
          AI Risk Prediction
        </h2>

        <div className="space-y-3">

          <div>
            <p className="text-gray-400 text-sm">
              Air Quality Risk
            </p>

            <h3 className="text-red-400 font-bold text-xl">
              {data.pollution_status}
            </h3>
          </div>

          <div>
            <p className="text-gray-400 text-sm">
              Flood Risk
            </p>

            <h3 className="text-yellow-400 font-bold text-xl">
              {data.flood_risk}
            </h3>
          </div>

        </div>

      </div>

      {/* LIVE ALERTS */}

      <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

        <h2 className="text-cyan-400 font-bold text-lg mb-3">
          Live Alerts
        </h2>

        {alerts.length === 0 ? (

          <p className="text-green-400">
            No Active Alerts
          </p>

        ) : (

          alerts.map((alert, index) => (

            <div
              key={index}
              className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 mb-2"
            >
              {alert}
            </div>

          ))

        )}

      </div>

      {/* FORECAST */}

      <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

        <h2 className="text-cyan-400 font-bold text-lg mb-3">
          Forecast Trends
        </h2>

        <div className="space-y-2">

          <div>
            Next Hour Rain:
            <span className="text-blue-400 ml-2">
              {data.rain + 5} mm
            </span>
          </div>

          <div>
            Flood Probability:
            <span className="text-red-400 ml-2">
              {Math.min(data.rain + data.water_level, 100)}%
            </span>
          </div>

        </div>

      </div>

      {/* ENVIRONMENT SCORE */}

      <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

        <h2 className="text-cyan-400 font-bold text-lg mb-3">
          Environmental Intelligence
        </h2>

        <div className="space-y-3">

          <div>
            <p className="text-gray-400">
              Environmental Score
            </p>

            <h2 className="text-green-400 text-3xl font-bold">
              {Math.max(100 - data.aqi, 0)}
            </h2>
          </div>

          <div>
            <p className="text-gray-400">
              Zone
            </p>

            <h2 className="text-cyan-400 text-xl font-bold">
              {data.zone}
            </h2>
          </div>

        </div>

      </div>

    </div>

  );
}

export default RightPanel;