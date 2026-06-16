import { Polygon, Tooltip } from "react-leaflet";

function FloodZones() {
  const lowRisk = [
    [21.1308, 79.0758],
    [21.1309, 79.0748],
    [21.1298, 79.0744],
    [21.1295, 79.0755],
  ];

  const mediumRisk = [
    [21.1297, 79.0742],
    [21.1299, 79.0733],
    [21.1289, 79.0731],
    [21.1284, 79.0740],
  ];

  const highRisk = [
    [21.1287, 79.0754],
    [21.1289, 79.0745],
    [21.1279, 79.0743],
    [21.1277, 79.0752],
  ];

  return (
    <>
      <Polygon
        positions={lowRisk}
        pathOptions={{
          color: "#22c55e",
          fillColor: "#22c55e",
          fillOpacity: 0.25,
          weight: 2,
        }}
      >
        <Tooltip>
          Low Flood Risk
        </Tooltip>
      </Polygon>

      <Polygon
        positions={mediumRisk}
        pathOptions={{
          color: "#eab308",
          fillColor: "#eab308",
          fillOpacity: 0.25,
          weight: 2,
        }}
      >
        <Tooltip>
          Medium Flood Risk
        </Tooltip>
      </Polygon>

      <Polygon
        positions={highRisk}
        pathOptions={{
          color: "#ef4444",
          fillColor: "#ef4444",
          fillOpacity: 0.25,
          weight: 2,
        }}
      >
        <Tooltip>
          High Flood Risk
        </Tooltip>
      </Polygon>
    </>
  );
}

export default FloodZones;