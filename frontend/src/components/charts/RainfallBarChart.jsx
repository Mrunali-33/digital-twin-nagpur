import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [

  { day: "Mon", rain: 12 },
  { day: "Tue", rain: 18 },
  { day: "Wed", rain: 9 },
  { day: "Thu", rain: 22 },
  { day: "Fri", rain: 15 },
];

function RainfallBarChart() {

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-2xl p-4 h-full">

      <h2 className="text-cyan-400 font-bold mb-4">
        Rainfall Analytics
      </h2>

      <ResponsiveContainer width="100%" height={220}>

        <BarChart data={data}>

          <XAxis dataKey="day" stroke="#888" />

          <YAxis stroke="#888" />

          <Tooltip />

          <Bar dataKey="rain" fill="#00D1FF" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RainfallBarChart;