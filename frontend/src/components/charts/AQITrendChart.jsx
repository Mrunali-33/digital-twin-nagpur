import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import ChartCard from "../common/ChartCard";

function AQITrendChart({ history }) {

  return (

    <ChartCard title="AQI Trend">

      <ResponsiveContainer
  width="100%"
  height="92%"
>

        <LineChart
          data={history}
          margin={{
            top: 10,
            right: 15,
            left: 12,
            bottom: 5,
          }}
        >

          <CartesianGrid
            stroke="#1F3447"
            strokeDasharray="3 3"
            opacity={0.35}
          />

          <XAxis
  dataKey="time"
  tick={{
    fill: "#64748B",
    fontSize: 10,
  }}
  tickLine={false}
  axisLine={false}
  minTickGap={35}
/>

          <YAxis
  stroke="#6B7280"
  width={34}
  tick={{
    fill: "#94A3B8",
    fontSize: 11,
  }}
/>

          <Tooltip
            contentStyle={{
              background: "#071018",
              border: "1px solid rgba(34,211,238,.25)",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Line
  type="monotone"
  isAnimationActive
  animationDuration={900}
            dataKey="aqi"
            stroke="#22D3EE"
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              r: 5,
            }}
          />

        </LineChart>

      </ResponsiveContainer>

    </ChartCard>

  );
}

export default AQITrendChart;