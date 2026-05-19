import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

import "../styles/charts.css";

function ChartsPanel({ data }) {

  // AQI Pie Data
  const aqiData = [
    { name: "AQI", value: data?.aqi || 0 },
    { name: "Remaining", value: 500 - (data?.aqi || 0) }
  ];

  // Rainfall Trend Data
  const rainData = [
    { time: "1PM", rain: 20 },
    { time: "2PM", rain: 35 },
    { time: "3PM", rain: 50 },
    { time: "4PM", rain: data?.rain || 0 }
  ];

  // Water Level Data
  const waterData = [
    { time: "1PM", level: 2 },
    { time: "2PM", level: 4 },
    { time: "3PM", level: 6 },
    { time: "4PM", level: data?.water_level || 0 }
  ];

  const COLORS = ["#ff3b30", "#1e293b"];

  return (

    <div className="charts-grid">

      {/* AQI PIE CHART */}

      <div className="chart-card">

        <h3>🌫 AQI Index</h3>

        <ResponsiveContainer width="100%" height={250}>

          <PieChart>

            <Pie
              data={aqiData}
              dataKey="value"
              outerRadius={80}
            >

              {aqiData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* RAIN GRAPH */}

      <div className="chart-card">

        <h3>🌧 Rainfall Trend</h3>

        <ResponsiveContainer width="100%" height={250}>

          <LineChart data={rainData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="rain"
              stroke="#38bdf8"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* WATER LEVEL GRAPH */}

      <div className="chart-card">

        <h3>🌊 Water Level</h3>

        <ResponsiveContainer width="100%" height={250}>

          <LineChart data={waterData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="level"
              stroke="#34c759"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ChartsPanel;