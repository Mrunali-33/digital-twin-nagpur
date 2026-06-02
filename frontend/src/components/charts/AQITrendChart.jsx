import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [

  { time: "1PM", aqi: 72 },
  { time: "2PM", aqi: 81 },
  { time: "3PM", aqi: 76 },
  { time: "4PM", aqi: 90 },
  { time: "5PM", aqi: 85 },
];

function AQITrendChart() {

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-2xl p-4 h-full">

      <h2 className="text-cyan-400 font-bold mb-4">
        AQI Trend
      </h2>

      <ResponsiveContainer width="100%" height={220}>

        <LineChart data={data}>

          <XAxis dataKey="time" stroke="#888" />

          <YAxis stroke="#888" />

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