import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
    "#22c55e",
    "#eab308",
    "#ef4444",
  ];

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-2xl p-4 h-full">

      <h2 className="text-cyan-400 font-bold mb-4">
        Pollution Distribution
      </h2>

      <ResponsiveContainer
        width="100%"
        height={220}
      >

        <PieChart>

          <Pie
            data={chartData}
            dataKey="value"
            outerRadius={80}
          >

            {chartData.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );
}

export default PollutionPieChart;