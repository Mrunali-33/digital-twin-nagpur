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
      {sensors.map((sensor) => (

       
<div key={sensor.id}>
  
<Circle
  center={sensor.position}
  radius={
    sensor.status === "ONLINE"
      ? 90
      : sensor.status === "WARNING"
      ? 120
      : 150
  }
  pathOptions={{
    color: getStatusColor(sensor.status),
    fillColor: getStatusColor(sensor.status),
    fillOpacity: 0.06,
    weight: 1,
  }}
/>

<Circle
  center={sensor.position}
  radius={
    sensor.status === "ONLINE"
      ? 140
      : sensor.status === "WARNING"
      ? 180
      : 220
  }
  pathOptions={{
    color: getStatusColor(sensor.status),
    fillOpacity: 0,
    opacity:
      sensor.status === "ONLINE"
        ? 0.35
        : sensor.status === "WARNING"
        ? 0.6
        : 0.85,
    weight: 2,
  }}
/>
<CircleMarker
  key={sensor.id}
  center={sensor.position}
    radius={
      sensor.status === "ONLINE"
      ? 9
      : sensor.status === "WARNING"
      ? 11
      : 13
    }
    pathOptions={{
      color: "#ffffff",
      fillColor: getSensorColor(sensor.type),
      fillOpacity: 1,
      weight:
       sensor.status === "OFFLINE"
       ? 4
       : 2,
       }}
  >

<Popup>

  <div className="text-black min-w-[240px]">

    <h2 className="font-bold text-lg mb-3">
      {sensor.name}
    </h2>

    <div className="space-y-2 text-sm">

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

      <hr />

      <div className="flex justify-between">
        <span>AQI</span>
        <span>{data?.aqi}</span>
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
   ))}
  </>
 );
}

export default SensorMarkers;