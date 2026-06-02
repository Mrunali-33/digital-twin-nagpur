import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Circle,
  LayersControl,
  Popup,
  useMapEvents,
} from "react-leaflet";
import GISOverlays from "./GISOverlays";

import PollutionHeatmap from "./PollutionHeatmap";
import FloodZones from "./FloodZones";
import WeatherWidget from "./WeatherWidget";
import SensorStatus from "./SensorStatus";

import { useState } from "react";

import AQILegend from "./AQILegend";

import EnvironmentalHealthScore from "./EnvironmentalHealthScore";

import "leaflet/dist/leaflet.css";

import "../../styles/map.css";

import { environmentalZones } from "../../data/environmentZones";

import MapControls from "./MapControls";

function LocationMarkers({ liveData }) {

  const [positions, setPositions] = useState([]);

  useMapEvents({
    click(e) {

      const newPoint = {
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      };

      setPositions((prev) => [...prev, newPoint]);
    },
  });

  const getAQIColor = (aqi) => {

    if (aqi <= 50) return "#22c55e";

    if (aqi <= 100) return "#eab308";

    if (aqi <= 150) return "#f97316";

    return "#ef4444";
  };

  return (
    <>
      {positions.map((position, index) => (

        <CircleMarker
          key={index}
          center={position}
          radius={12}
          pathOptions={{
            color: getAQIColor(liveData?.aqi || 0),
            fillColor: getAQIColor(liveData?.aqi || 0),
            fillOpacity: 0.9,
          }}
        >

          <Popup>

            <div className="text-black">

              <h2 className="font-bold mb-2">
                Environmental Sensor
              </h2>

              <p>
                AQI: {liveData?.aqi ?? "N/A"}
              </p>

              <p>
                Rainfall: {liveData?.rain ?? "N/A"}
              </p>

              <p>
                Water Level: {liveData?.water_level ?? "N/A"}
              </p>

              <p>
                Flood Risk: {liveData?.flood_risk ?? "N/A"}
              </p>

              <p>
                Pollution: {liveData?.pollution_status ?? "N/A"}
              </p>

              <p>
                Zone: {liveData?.zone ?? "N/A"}
              </p>

            </div>

          </Popup>

        </CircleMarker>

      ))}
    </>
  );
}

function DigitalTwinMap({ data }) {

  return  (
  <div className="h-full bg-[#0B1622]/70 border border-cyan-500/20 rounded-2xl overflow-hidden">

    <div className="relative h-full w-full">

      <MapControls />

      <PollutionHeatmap />

      <FloodZones />

      <MapContainer
        center={[21.1458, 79.0882]}
        zoom={14}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />        
        <LocationMarkers liveData={data} />
        
        <LayersControl position="topright">

  <LayersControl.Overlay checked name="AQI Zones">

    <>
      {environmentalZones
        .filter(zone => zone.type === "aqi")
        .map(zone => (

          <Circle
            key={zone.id}
            center={[zone.lat, zone.lng]}
            radius={zone.radius}
            pathOptions={{
              color: zone.color,
              fillColor: zone.color,
              fillOpacity: 0.25,
            }}
          />

      ))}
    </>

  </LayersControl.Overlay>

  <LayersControl.Overlay checked name="Flood Zones">

    <>
      {environmentalZones
        .filter(zone => zone.type === "flood")
        .map(zone => (

          <Circle
            key={zone.id}
            center={[zone.lat, zone.lng]}
            radius={zone.radius}
            pathOptions={{
              color: zone.color,
              fillColor: zone.color,
              fillOpacity: 0.25,
            }}
          />

      ))}
    </>

  </LayersControl.Overlay>

  <LayersControl.Overlay checked name="Rainfall Zones">

    <>
      {environmentalZones
        .filter(zone => zone.type === "rain")
        .map(zone => (

          <Circle
            key={zone.id}
            center={[zone.lat, zone.lng]}
            radius={zone.radius}
            pathOptions={{
              color: zone.color,
              fillColor: zone.color,
              fillOpacity: 0.25,
            }}
          />

      ))}
    </>

  </LayersControl.Overlay>

</LayersControl>


      </MapContainer>

    </div>

  </div>
);
}

export default DigitalTwinMap;