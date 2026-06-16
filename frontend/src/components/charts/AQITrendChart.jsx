import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function AQITrendChart({
  history,
}) {

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-2xl p-4 h-full">

      <h2 className="text-cyan-400 font-bold mb-4">
        AQI Trend
      </h2>

      <ResponsiveContainer width="100%" height={220}>

        <LineChart data={history}>

          <XAxis
            dataKey="time"
            stroke="#888"
          />

          <YAxis
            stroke="#888"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="aqi"
            stroke="#00D1FF"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}

export default AQITrendChart;