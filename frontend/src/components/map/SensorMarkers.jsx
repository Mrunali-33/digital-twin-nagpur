import {
  Circle,
  CircleMarker,
  Popup,
} from "react-leaflet";
import React from "react";
import { sensors } from "../../data/sensors";

function SensorMarkers({ data }) {

    const getSensorColor = (type) => {
    switch (type) {
      case "AQI":
        return "#ef4444";

      case "WEATHER":
        return "#eab308";

      case "WATER":
        return "#a855f7";

      case "FLOOD":
        return "#3b82f6";

      default:
        return "#22c55e";
    }
  };


  const getSensorIcon = (type) => {
    switch (type) {
      case "AQI":
        return "🌫";

      case "WEATHER":
        return "🌧";

      case "WATER":
        return "💧";

      case "FLOOD":
        return "🌊";

      default:
        return "📡";
    }
  };

  const getSensorStatus = (sensor) => {

  if (
    sensor.type === "AQI" &&
    data?.aqi > 220
  ) {
    return "WARNING";
  }

  if (
    sensor.type === "WEATHER" &&
    data?.rain > 80
  ) {
    return "WARNING";
  }

  if (
    sensor.type === "WATER" &&
    data?.water_level > 8
  ) {
    return "WARNING";
  }

  if (
    sensor.type === "FLOOD" &&
    data?.flood_risk === "HIGH"
  ) {
    return "WARNING";
  }

  return "ONLINE";
};


const getStatusColor = (status) => {

  switch (status) {

    case "ONLINE":
      return "#22c55e";

    case "WARNING":
      return "#eab308";

    case "OFFLINE":
      return "#ef4444";

    default:
      return "#22c55e";
  }
};

return (
  <>
    {sensors.map((sensor) => {
      const status = getSensorStatus(sensor);

      return (
        <div key={sensor.id}>

          <Circle
            center={sensor.position}
            radius={
              status === "ONLINE"
                ? 90
                : status === "WARNING"
                ? 120
                : 150
            }
            pathOptions={{
              color: getStatusColor(status),
              fillColor: getStatusColor(status),
              fillOpacity: 0.04,
              weight: 0.8,
            }}
          />

          <Circle
            center={sensor.position}
            radius={
              status === "ONLINE"
                ? 140
                : status === "WARNING"
                ? 180
                : 220
            }
            pathOptions={{
              color: getStatusColor(status),
              fillOpacity: 0,
              opacity:
                status === "ONLINE"
                  ? 0.35
                  : status === "WARNING"
                  ? 0.6
                  : 0.85,
              weight: 1.5,
            }}
          />
          <Circle
  center={sensor.position}
  radius={55}
  className="sensor-pulse"
  pathOptions={{
    color: getSensorColor(sensor.type),
    fillColor: getSensorColor(sensor.type),
    fillOpacity: 0.15,
    weight: 1,
  }}
/>
<CircleMarker
  key={sensor.id}
  center={sensor.position}
    radius={
  status === "ONLINE"
    ? 8
    : status === "WARNING"
    ? 9
    : 10
}
    pathOptions={{
      color:"#dff9ff",
      fillColor: getSensorColor(sensor.type),
      fillOpacity: 1,
      weight:
       sensor.status === "OFFLINE"
       ? 4
       : 2,
       }}
  >

<Popup>

  <div className="min-w-[250px] rounded-xl bg-slate-900 text-slate-200 p-3">

    <h2 className="text-cyan-300 text-lg font-semibold mb-4">
      {sensor.name}
    </h2>

    <div className="space-y-2 text-sm text-slate-300">

      <div className="flex justify-between">
        <span>Type</span>
        <span className="font-semibold">
          {sensor.type}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Status</span>
        <span
          className={`font-semibold ${
            sensor.status === "ONLINE"
              ? "text-green-600"
              : sensor.status === "WARNING"
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          <span className="flex items-center gap-2">

            <span
              className={`
                w-2
                h-2
                rounded-full
                animate-ping
                ${
                 sensor.status === "ONLINE"
                 ? "bg-green-500"
                 : sensor.status === "WARNING"
                 ? "bg-yellow-500"
                 : "bg-red-500"
                }
             `}
           />
 
           {sensor.status}

          </span>
        </span>
      </div>

      <div className="flex justify-between">
        <span>Battery</span>
        <span className="font-semibold">
          {sensor.battery}%
        </span>
      </div>

      <div className="flex justify-between">
        <span>Signal</span>
        <span className="font-semibold">
          {sensor.signal}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Last Update</span>
        <span className="font-semibold">
          {sensor.lastUpdate}
        </span>
      </div>

      <div className="my-3 border-t border-slate-700" />

      <div className="flex justify-between">
        <span>AQI</span>
        <span className="font-semibold text-cyan-300">
          {data?.aqi}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Rainfall</span>
        <span>{data?.rain} mm</span>
      </div>

      <div className="flex justify-between">
        <span>Water Level</span>
        <span>{data?.water_level} m</span>
      </div>

      <div className="flex justify-between">
        <span>Flood Risk</span>
        <span>{data?.flood_risk}</span>
      </div>

    </div>

  </div>

</Popup>

</CircleMarker>
</div>
  );
})} 
  </>
 );
}

export default SensorMarkers;