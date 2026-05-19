import { useEffect, useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";
import MapDashboard from "./components/MapDashboard";
import ChartsPanel from "./components/ChartsPanel";

function App() {

  const [data, setData] = useState(null);

  // Fetch latest backend data
  const fetchData = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/latest-data"
      );

      const result = await response.json();

      setData(result);

    } catch (error) {

      console.log("Error fetching data:", error);
    }
  };

  // Auto refresh every 5 seconds
  useEffect(() => {

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="main-layout">

      {/* LEFT SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className="content-area">

        <h1>🌍 Environmental Digital Twin</h1>

        <h2>
          NEERI + Rahate Colony Smart Monitoring System
        </h2>

        {/* LOADING */}

        {!data ? (

          <p className="loading-text">
            Loading Live Environmental Data...
          </p>

        ) : (

          <>

            {/* TOP LIVE DATA CARDS */}

            <div className="dashboard">

              <div className="card">
                <h3>📍 Zone</h3>
                <p>{data.zone}</p>
              </div>

              <div className="card">
                <h3>🌫 AQI</h3>
                <p>{data.aqi}</p>
              </div>

              <div className="card">
                <h3>🌧 Rain</h3>
                <p>{data.rain}</p>
              </div>

              <div className="card">
                <h3>🌊 Water Level</h3>
                <p>{data.water_level}</p>
              </div>

              <div className="card">
                <h3>⚠ Pollution</h3>
                <p>{data.pollution_status}</p>
              </div>

              <div className="card">
                <h3>🚨 Flood Risk</h3>
                <p>{data.flood_risk}</p>
              </div>

            </div>

            {/* MAP SECTION */}

            <div className="map-section">

              <MapDashboard data={data} />

            </div>
            
            <ChartsPanel data={data} />

          </>

        )}

      </div>

    </div>
  );
}

export default App;