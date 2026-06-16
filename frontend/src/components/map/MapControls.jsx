import { useState } from "react";
import {
  Layers,
  CloudRain,
  Wind,
  Activity,
} from "lucide-react";

function MapControls({
  layers,
  setLayers,
}) {  const [showLayers, setShowLayers] = useState(false);
  const [showAQI, setShowAQI] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const closeOthers = () => {
    setShowLayers(false);
    setShowAQI(false);
    setShowWeather(false);
    setShowAnalytics(false);
  };

  const buttonStyle = `
    w-10
    h-10
    rounded-xl
    bg-[#102235]
    backdrop-blur-md
    border
    border-cyan-500/20
    text-cyan-300
    hover:bg-cyan-500/10
    hover:border-cyan-400
    transition-all
    duration-300
    flex
    items-center
    justify-center
  `;

  return (
    <div
      className="
      absolute
      top-3
      left-1/2
      -translate-x-1/2
      z-[99999]
      flex
      flex-row
      gap-2
      "
    >

      <button
        onClick={() => {
          closeOthers();
          setShowLayers(true);
        }}
        className={buttonStyle}
      >
        <Layers size={20} />
      </button>

      <button
        onClick={() => {
          closeOthers();
          setShowAQI(true);
        }}
        className={buttonStyle}
      >
        <Activity size={20} />
      </button>

      <button
        onClick={() => {
          closeOthers();
          setShowWeather(true);
        }}
        className={buttonStyle}
      >
        <CloudRain size={20} />
      </button>

      <button
        onClick={() => {
          closeOthers();
          setShowAnalytics(true);
        }}
        className={buttonStyle}
      >
        <Wind size={20} />
      </button>

      {(showLayers || showAQI || showWeather || showAnalytics) && (
        <div
          className="
          absolute
          top-14
          left-1/2
          -translate-x-1/2
          w-72
          bg-[#071018]/95
          border
          border-cyan-500/30
          rounded-xl
          p-4
          backdrop-blur-md
          shadow-[0_0_20px_rgba(0,255,255,0.15)]
          z-[99999]
          "
        >

          {showLayers && (
            <>
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
            </>
          )}

       {showAQI && (
         <>
         <h2 className="text-cyan-400 font-bold mb-3">
          Environmental Status
         </h2>

         <div className="space-y-3 text-sm">

         <div className="flex items-center gap-2">
         <span>🟢</span>
         <span>Normal</span>
         </div>

         <div className="flex items-center gap-2">
         <span>🔴</span>
         <span>AQI Alert</span>
         </div>

         <div className="flex items-center gap-2">
         <span>🟡</span>
         <span>Rain Alert</span>
         </div>

         <div className="flex items-center gap-2">
         <span>🔵</span>
         <span>Flood Alert</span>
         </div>

         <div className="flex items-center gap-2">
         <span>🟣</span>
         <span>Water Level Alert</span>
         </div>

         </div>
         </>
        )}
          {showWeather && (
            <>
              <h2 className="text-cyan-400 font-bold mb-3">
                Weather
              </h2>

              <div className="space-y-2 text-sm">
                <p>🌡 Temperature: 31°C</p>
                <p>💧 Humidity: 68%</p>
                <p>🌧 Rainfall: 12 mm</p>
                <p>💨 Wind: 12 km/h</p>
              </div>
            </>
          )}

          {showAnalytics && (
            <>
              <h2 className="text-cyan-400 font-bold mb-3">
                Environmental Analytics
              </h2>

              <div className="space-y-2 text-sm">
                <p>📡 Sensors Online: 12</p>
                <p>🛰 Active Nodes: 8</p>
                <p>💚 Health Score: 78%</p>
                <p>🗺 Coverage: 84%</p>
              </div>
            </>
          )}

        </div>
      )}
    </div>
  );
}

export default MapControls;