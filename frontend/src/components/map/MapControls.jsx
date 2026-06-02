import { useState } from "react";
import {
  Layers,
  CloudRain,
  Wind,
  Activity
} from "lucide-react";

function MapControls() {

  const [showLayers, setShowLayers] = useState(false);
  const [showAQI, setShowAQI] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  return (

    <div className="absolute top-15 right-3 z-[1000] flex flex-col gap-2">

      {/* LAYERS */}

      <button
        onClick={() => setShowLayers(!showLayers)}
        className="
          bg-[#071018]/90
          border
          border-cyan-500/30
          p-3
          rounded-xl
          backdrop-blur-md
          hover:border-cyan-400
          transition-all
        "
      >
        <Layers size={22} />
      </button>

      {/* AQI */}

      <button
        onClick={() => setShowAQI(!showAQI)}
        className="
          bg-[#071018]/90
          border
          border-cyan-500/30
          p-3
          rounded-xl
          backdrop-blur-md
          hover:border-cyan-400
          transition-all
        "
      >
        <Activity size={22} />
      </button>

      {/* WEATHER */}

      <button
        onClick={() => setShowWeather(!showWeather)}
        className="
          bg-[#071018]/90
          border
          border-cyan-500/30
          p-3
          rounded-xl
          backdrop-blur-md
          hover:border-cyan-400
          transition-all
        "
      >
        <CloudRain size={22} />
      </button>

      {/* ANALYTICS */}

      <button
        onClick={() => setShowAnalytics(!showAnalytics)}
        className="
          bg-[#071018]/90
          border
          border-cyan-500/30
          p-3
          rounded-xl
          backdrop-blur-md
          hover:border-cyan-400
          transition-all
        "
      >
        <Wind size={22} />
      </button>

      {/* MAP LAYERS */}

      {showLayers && (
        <div className="
          absolute right-16 top-0
          bg-[#071018]/95
          border border-cyan-500/30
          rounded-xl
          p-4
          w-56
          backdrop-blur-md
        ">
          <h2 className="text-cyan-400 font-bold mb-3">
            Map Layers
          </h2>

          <div className="space-y-2 text-sm">

            <label className="flex gap-2">
              <input type="checkbox" defaultChecked />
              AQI Layer
            </label>

            <label className="flex gap-2">
              <input type="checkbox" defaultChecked />
              Flood Layer
            </label>

            <label className="flex gap-2">
              <input type="checkbox" defaultChecked />
              Sensors
            </label>

            <label className="flex gap-2">
              <input type="checkbox" defaultChecked />
              Risk Zones
            </label>

          </div>
        </div>
      )}

      {/* AQI LEGEND */}

      {showAQI && (
        <div className="
          absolute right-16 top-16
          bg-[#071018]/95
          border border-cyan-500/30
          rounded-xl
          p-4
          w-56
          backdrop-blur-md
        ">
          <h2 className="text-cyan-400 font-bold mb-3">
            AQI Legend
          </h2>

          <div className="space-y-2 text-sm">

            <p>🟢 Good</p>

            <p>🟡 Moderate</p>

            <p>🟠 Poor</p>

            <p>🔴 Hazardous</p>

          </div>
        </div>
      )}

      {/* WEATHER */}

      {showWeather && (
        <div className="
          absolute right-16 top-32
          bg-[#071018]/95
          border border-cyan-500/30
          rounded-xl
          p-4
          w-56
          backdrop-blur-md
        ">
          <h2 className="text-cyan-400 font-bold mb-3">
            Weather
          </h2>

          <div className="space-y-2 text-sm">

            <p>🌡 Temperature: 31°C</p>

            <p>💧 Humidity: 68%</p>

            <p>🌧 Rainfall: 12 mm</p>

            <p>💨 Wind: 12 km/h</p>

          </div>
        </div>
      )}

      {/* ANALYTICS */}

      {showAnalytics && (
        <div className="
          absolute right-16 top-48
          bg-[#071018]/95
          border border-cyan-500/30
          rounded-xl
          p-4
          w-56
          backdrop-blur-md
        ">
          <h2 className="text-cyan-400 font-bold mb-3">
            Environmental Analytics
          </h2>

          <div className="space-y-2 text-sm">

            <p>📡 Sensors Online: 12</p>

            <p>🛰 Active Nodes: 8</p>

            <p>💚 Health Score: 78%</p>

            <p>🗺 Coverage: 84%</p>

          </div>
        </div>
      )}

    </div>

  );
}

export default MapControls;