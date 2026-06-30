import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import AnalyticsCard from "../common/AnalyticsCard";

function RiskTrendChart({ riskTrend }) {
  return (
    <AnalyticsCard title="Risk Trend">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={riskTrend}
          margin={{
            top: 8,
            right: 18,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            stroke="#1f3545"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="time"
            tick={{
              fill: "#94a3b8",
              fontSize: 10,
            }}
            axisLine={false}
            tickLine={false}
            minTickGap={20}
          />

          <YAxis
            width={34}
            tick={{
              fill: "#94a3b8",
              fontSize: 10,
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#08131D",
              border: "1px solid rgba(34,211,238,.2)",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Line
            type="monotone"
            dataKey="risk_score"
            stroke="#ff5f7a"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 5,
              fill: "#ff5f7a",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </AnalyticsCard>
  );
}

export default RiskTrendChart;