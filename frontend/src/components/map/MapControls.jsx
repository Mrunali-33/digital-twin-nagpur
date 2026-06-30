import { useState } from "react";
import {
  Layers3,
  CloudRain,
  Activity,
  ChartNoAxesCombined,
  X,
} from "lucide-react";

function MapControls({ layers, setLayers }) {
  const [showLayers, setShowLayers] = useState(false);
  const [showAQI, setShowAQI] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const closeAll = () => {
    setShowLayers(false);
    setShowAQI(false);
    setShowWeather(false);
    setShowAnalytics(false);
  };

  const buttonStyle = `
    h-11
    w-11
    rounded-2xl
    border
    border-cyan-500/20
    bg-slate-900/75
    backdrop-blur-xl
    text-cyan-300
    shadow-[0_8px_25px_rgba(0,255,255,0.08)]
    flex
    items-center
    justify-center
    transition-all
    duration-300

    hover:-translate-y-1
    hover:scale-105
    hover:border-cyan-400/50
    hover:bg-cyan-500/10
    hover:shadow-[0_12px_35px_rgba(0,255,255,0.18)]

    active:scale-95
  `;

  const popupClass = `
    absolute
    top-0
    left-16
    w-72
    rounded-2xl
    border
    border-cyan-500/20
    bg-slate-900/90
    backdrop-blur-2xl
    p-5
    shadow-[0_20px_45px_rgba(0,0,0,.45)]
  `;

  return (
    <div
      className="
        absolute
        top-25
        left-4
        z-[9999]
        flex
        flex-col
        gap-3
      "
    >
      {/* Layers */}

      <button
        onClick={() => {
          closeAll();
          setShowLayers(true);
        }}
        className={`${buttonStyle} ${
          showLayers
            ? "border-cyan-400 bg-cyan-500/15 shadow-[0_0_25px_rgba(34,211,238,.30)]"
            : ""
        }`}
      >
        <Layers3 size={18} />
      </button>

      {/* AQI */}

      <button
        onClick={() => {
          closeAll();
          setShowAQI(true);
        }}
        className={`${buttonStyle} ${
          showAQI
            ? "border-cyan-400 bg-cyan-500/15 shadow-[0_0_25px_rgba(34,211,238,.30)]"
            : ""
        }`}
      >
        <Activity size={18} />
      </button>

      {/* Weather */}

      <button
        onClick={() => {
          closeAll();
          setShowWeather(true);
        }}
        className={`${buttonStyle} ${
          showWeather
            ? "border-cyan-400 bg-cyan-500/15 shadow-[0_0_25px_rgba(34,211,238,.30)]"
            : ""
        }`}
      >
        <CloudRain size={18} />
      </button>

      {/* Analytics */}

      <button
        onClick={() => {
          closeAll();
          setShowAnalytics(true);
        }}
        className={`${buttonStyle} ${
          showAnalytics
            ? "border-cyan-400 bg-cyan-500/15 shadow-[0_0_25px_rgba(34,211,238,.30)]"
            : ""
        }`}
      >
        <ChartNoAxesCombined size={18} />
      </button>

      {/* Popup */}

      {(showLayers ||
        showAQI ||
        showWeather ||
        showAnalytics) && (
        <div className={popupClass}>
          {/* Header */}

          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-cyan-300 tracking-wide">
              {showLayers && "Map Layers"}
              {showAQI && "Environmental Status"}
              {showWeather && "Weather Information"}
              {showAnalytics && "Analytics"}
            </h2>

            <button
              onClick={closeAll}
              className="text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Layers */}

          {showLayers && (
            <div className="space-y-3 text-sm">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={layers.heatmap}
                  onChange={() =>
                    setLayers({
                      ...layers,
                      heatmap: !layers.heatmap,
                    })
                  }
                  className="accent-cyan-400"
                />
                AQI Heatmap
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={layers.neeri}
                  onChange={() =>
                    setLayers({
                      ...layers,
                      neeri: !layers.neeri,
                    })
                  }
                  className="accent-cyan-400"
                />
                NEERI Boundary
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={layers.rahate}
                  onChange={() =>
                    setLayers({
                      ...layers,
                      rahate: !layers.rahate,
                    })
                  }
                  className="accent-cyan-400"
                />
                Rahate Boundary
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={layers.sensors}
                  onChange={() =>
                    setLayers({
                      ...layers,
                      sensors: !layers.sensors,
                    })
                  }
                  className="accent-cyan-400"
                />
                Sensor Network
              </label>
            </div>
          )}

          {/* AQI */}

          {showAQI && (
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>🟢 Normal</span>
                <span>0–100</span>
              </div>

              <div className="flex justify-between">
                <span>🟡 Moderate</span>
                <span>101–200</span>
              </div>

              <div className="flex justify-between">
                <span>🔴 Hazardous</span>
                <span>200+</span>
              </div>

              <div className="mt-4 rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-3 text-xs text-slate-300">
                Live environmental conditions are continuously updated via WebSocket.
              </div>
            </div>
          )}

          {/* Weather */}

          {showWeather && (
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Temperature</span>
                <span>31°C</span>
              </div>

              <div className="flex justify-between">
                <span>Humidity</span>
                <span>68%</span>
              </div>

              <div className="flex justify-between">
                <span>Rainfall</span>
                <span>12 mm</span>
              </div>

              <div className="flex justify-between">
                <span>Wind Speed</span>
                <span>12 km/h</span>
              </div>
            </div>
          )}

          {/* Analytics */}

          {showAnalytics && (
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Sensors Online</span>
                <span className="text-emerald-400">12</span>
              </div>

              <div className="flex justify-between">
                <span>Coverage</span>
                <span>94%</span>
              </div>

              <div className="flex justify-between">
                <span>Health Score</span>
                <span className="text-cyan-300">82%</span>
              </div>

              <div className="flex justify-between">
                <span>Active Zones</span>
                <span>2</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MapControls;