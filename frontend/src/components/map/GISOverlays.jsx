import { Circle } from "react-leaflet";

function GISOverlays() {
  const zones = [
    {
      center: [21.1458, 79.0882],
      radius: 500,
      color: "#22c55e",
    },
    {
      center: [21.1425, 79.095],
      radius: 500,
      color: "#eab308",
    },
    {
      center: [21.139, 79.102],
      radius: 500,
      color: "#ef4444",
    },
  ];

  return (
    <>
      {zones.map((zone, index) => (
        <Circle
          key={index}
          center={zone.center}
          radius={zone.radius}
          pathOptions={{
            color: zone.color,
            fillColor: zone.color,
            fillOpacity: 0.15,
            weight: 3,
          }}
        />
      ))}
    </>
  );
}

export default GISOverlays;