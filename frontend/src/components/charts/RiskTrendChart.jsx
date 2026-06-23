import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function RiskTrendChart({ riskTrend }) {

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-2xl p-4 h-full">

      <h2 className="text-cyan-400 font-bold mb-4">
        Risk Trend
      </h2>

      <ResponsiveContainer width="100%" height={220}>

        <LineChart data={riskTrend}>

          <XAxis
            dataKey="time"
            tick={false}
            stroke="#888"
          />

          <YAxis
            stroke="#888"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="risk_score"
            stroke="#ff6b6b"
            strokeWidth={3}
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}

export default RiskTrendChart;