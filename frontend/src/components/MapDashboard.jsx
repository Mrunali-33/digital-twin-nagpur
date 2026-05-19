import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup
} from "react-leaflet";

import { zones } from "../data/zoneData";

import "../styles/map.css";

function MapDashboard({ data }) {

  const getColor = (risk) => {

    if (risk === "HIGH") return "#ff3b30";

    if (risk === "MODERATE") return "#ffd60a";

    return "#34c759";
  };

  return (

    <div className="map-wrapper">

      <MapContainer
        center={[21.1235, 79.0472]}
        zoom={16}
        className="map-container"
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {zones.map((zone) => (

          <CircleMarker
            key={zone.id}
            center={zone.position}
            radius={30}
            pathOptions={{
              color: getColor(zone.risk),
              fillColor: getColor(zone.risk),
              fillOpacity: 0.6,
            }}
          >

            <Popup>

              <div>

                <h3>{zone.name}</h3>

                <p>Risk: {zone.risk}</p>

                {data && (
                  <>
                    <p>AQI: {data.aqi}</p>
                    <p>Flood Risk: {data.flood_risk}</p>
                    <p>Water Level: {data.water_level}</p>
                  </>
                )}

              </div>

            </Popup>

          </CircleMarker>
        ))}

      </MapContainer>

    </div>
  );
}

export default MapDashboard;