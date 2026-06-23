function EnvironmentalMetrics({
  data,
  environmentHealth,
}) {

  const latestHealthScore =
    environmentHealth?.length > 0
      ? environmentHealth[
          environmentHealth.length - 1
        ].health_score
      : 0;

  const floodProbability =
    data?.flood_probability || 0;

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-2xl p-4 h-full">

      <h2 className="text-cyan-400 font-bold mb-4">
        AI Environmental Analytics
      </h2>

      <div className="space-y-4">

        <div className="bg-[#071018] p-3 rounded-xl">

          <p className="text-gray-400">
            Flood Probability
          </p>

          <h1 className="text-red-400 text-3xl font-bold">
            {Math.round(floodProbability)}%
          </h1>

        </div>

        <div className="bg-[#071018] p-3 rounded-xl">

          <p className="text-gray-400">
            Pollution Severity
          </p>

          <h1 className="text-yellow-400 text-3xl font-bold">
            {data?.pollution_status}
          </h1>

        </div>

        <div className="bg-[#071018] p-3 rounded-xl">

          <p className="text-gray-400">
            Health Score
          </p>

          <h1 className="text-green-400 text-3xl font-bold">

            {Math.round(
              latestHealthScore
            )}

          </h1>

        </div>

      </div>

    </div>

  );
}

export default EnvironmentalMetrics;