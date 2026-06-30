import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
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
    <div
      className="
      h-full
      rounded-2xl
      border border-cyan-500/20
      bg-[#0B1622]/70
      backdrop-blur-xl
      p-4
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-3">

        <h2 className="text-sm font-semibold tracking-wide text-cyan-300">
          Zone Comparison
        </h2>

        <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold text-cyan-300">
          LIVE
        </span>

      </div>

      <ResponsiveContainer
        width="100%"
        height="88%"
      >
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 12,
            left: -15,
            bottom: 0,
          }}
        >
          <CartesianGrid
            stroke="#1e3a4a"
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="metric"
            tick={{
              fill: "#94A3B8",
              fontSize: 11,
            }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tick={{
              fill: "#94A3B8",
              fontSize: 10,
            }}
            tickLine={false}
            axisLine={false}
            width={30}
          />

          <Tooltip
            contentStyle={{
              background: "#071018",
              border: "1px solid rgba(34,211,238,.25)",
              borderRadius: "12px",
              color: "white",
            }}
          />

          <Legend
            wrapperStyle={{
              fontSize: 11,
            }}
          />

          <Bar
            dataKey="NEERI"
            fill="#22d3ee"
            radius={[6, 6, 0, 0]}
            maxBarSize={20}
          />

          <Bar
            dataKey="RAHATE"
            fill="#34d399"
            radius={[6, 6, 0, 0]}
            maxBarSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ZoneComparisonChart;