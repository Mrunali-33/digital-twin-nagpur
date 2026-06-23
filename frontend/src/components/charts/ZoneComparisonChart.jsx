import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function ZoneComparisonChart({ data }) {

  if (!data) return null;

  const chartData = [
    {
      metric: "AQI",
      NEERI: data?.neeri?.aqi || 0,
      RAHATE: data?.rahate?.aqi || 0,
    },
    {
      metric: "Risk",
      NEERI: data?.neeri?.risk_score || 0,
      RAHATE: data?.rahate?.risk_score || 0,
    },
    {
      metric: "Health",
      NEERI: data?.neeri?.health_score || 0,
      RAHATE: data?.rahate?.health_score || 0,
    },
  ];

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-2xl p-4 h-full">

      <h2 className="text-cyan-400 font-bold mb-4">
        Zone Comparison
      </h2>

      <ResponsiveContainer width="100%" height={220}>

        <BarChart data={chartData}>

          <XAxis dataKey="metric" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="NEERI"
            fill="#00D1FF"
          />

          <Bar
            dataKey="RAHATE"
            fill="#22c55e"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default ZoneComparisonChart;