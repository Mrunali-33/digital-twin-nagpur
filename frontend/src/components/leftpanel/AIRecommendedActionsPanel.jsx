function AIRecommendedActionsPanel() {
  return (
    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <h2 className="text-cyan-400 font-bold mb-3">
        AI Recommended Actions
      </h2>

      <div className="space-y-3 text-sm">

        <div className="bg-[#102235] rounded-lg p-3 border border-red-500/20">

          <div className="font-semibold text-red-400 mb-1">
            🔴 RAHATE
          </div>

          <ul className="space-y-1 text-gray-300">

            <li>
              • Activate flood monitoring team
            </li>

            <li>
              • Inspect nearby drainage channels
            </li>

            <li>
              • Increase sensor sampling frequency
            </li>

          </ul>

        </div>

        <div className="bg-[#102235] rounded-lg p-3 border border-yellow-500/20">

          <div className="font-semibold text-yellow-400 mb-1">
            🟠 NEERI
          </div>

          <ul className="space-y-1 text-gray-300">

            <li>
              • Issue AQI health advisory
            </li>

            <li>
              • Monitor PM2.5 concentration
            </li>

            <li>
              • Verify air sensor calibration
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default AIRecommendedActionsPanel;