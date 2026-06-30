import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import AnalyticsCard from "../common/AnalyticsCard";

function PollutionPieChart({ data }) {
  const aqi = data?.aqi || 0;

  let chartData = [];

  if (aqi <= 100) {
    chartData = [
      { name: "Good", value: 70 },
      { name: "Moderate", value: 20 },
      { name: "Poor", value: 10 },
    ];
  } else if (aqi <= 200) {
    chartData = [
      { name: "Good", value: 20 },
      { name: "Moderate", value: 50 },
      { name: "Poor", value: 30 },
    ];
  } else {
    chartData = [
      { name: "Good", value: 10 },
      { name: "Moderate", value: 20 },
      { name: "Poor", value: 70 },
    ];
  }

  const COLORS = [
    "#22C55E",
    "#EAB308",
    "#EF4444",
  ];

  return (
    <AnalyticsCard title="Pollution Distribution">

      <div className="h-full flex flex-col">

        {/* Chart */}

        <div className="flex-1 min-h-0">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={42}
                outerRadius={58}
                paddingAngle={3}
                stroke="none"
              >

                {chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}

              </Pie>

              <text
                x="50%"
                y="48%"
                textAnchor="middle"
                fill="#E2E8F0"
                fontSize="20"
                fontWeight="700"
              >
                {aqi}
              </text>

              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                fill="#64748B"
                fontSize="10"
              >
                AQI
              </text>

              <Tooltip
                contentStyle={{
                  background: "#071018",
                  border: "1px solid rgba(34,211,238,.2)",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Legend */}

        <div className="mt-2 grid grid-cols-3 gap-2">

          {chartData.map((item, index) => (

            <div
              key={item.name}
              className="
              rounded-lg
              border
              border-cyan-500/10
              bg-white/5
              px-2
              py-2
              text-center
              "
            >

              <div
                className="mx-auto mb-1 h-2 w-2 rounded-full"
                style={{
                  background: COLORS[index],
                }}
              />

              <p className="text-[10px] text-slate-400">
                {item.name}
              </p>

              <p className="text-xs font-semibold text-white">
                {item.value}%
              </p>

            </div>

          ))}

        </div>

      </div>

    </AnalyticsCard>
  );
}

export default PollutionPieChart;