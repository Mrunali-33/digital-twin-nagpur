import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [

  { name: "Good", value: 35 },
  { name: "Moderate", value: 45 },
  { name: "Poor", value: 20 },
];

const COLORS = ["#22c55e", "#eab308", "#ef4444"];

function PollutionPieChart() {

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-2xl p-4 h-full">

      <h2 className="text-cyan-400 font-bold mb-4">
        Pollution Distribution
      </h2>

      <ResponsiveContainer width="100%" height={220}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
          >

            {data.map((entry, index) => (

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