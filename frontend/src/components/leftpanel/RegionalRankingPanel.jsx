import { areaStatus } from "../../data/areaStatus";

function RegionalRankingPanel() {

  const areas = [
    areaStatus.neeri,
    areaStatus.rahate,
  ];

  const rankedAreas = [...areas].sort(
    (a, b) => b.riskScore - a.riskScore
  );

  const getRankColor = (index) => {

    if (index === 0)
      return "text-red-400";

    if (index === 1)
      return "text-yellow-400";

    return "text-green-400";
  };

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <h2 className="text-cyan-400 font-bold mb-3">
        Regional Ranking
      </h2>

      <div className="space-y-3">

        {rankedAreas.map((area, index) => (

          <div
            key={area.name}
            className="bg-[#102235] rounded-lg p-3"
          >

            <div className="flex justify-between">

              <div>

                <span
                  className={`font-bold ${getRankColor(index)}`}
                >
                  #{index + 1}
                </span>

                <span className="ml-2 font-semibold">
                  {area.name}
                </span>

              </div>

              <span className="text-cyan-300">
                {area.riskScore}/100
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default RegionalRankingPanel;