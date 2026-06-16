import { Circle } from "react-leaflet";

function AreaDangerAura({
  center,
  riskLevel,
  riskScore,
}) {

  const color =
    riskLevel === "CRITICAL"
      ? "#ef4444"
      : riskLevel === "WARNING"
      ? "#facc15"
      : "#22c55e";

  const radius =
    80 + riskScore * 2;

  return (
    <>
      <Circle
        center={center}
        interactive={false}
        radius={radius}
        pathOptions={{
          color,
          fillColor: color,
          fillOpacity: 0.08,
          weight: 2,
        }}
      />

      <Circle
        center={center}
        interactive={false}
        radius={radius + 120}
        pathOptions={{
          color,
          fillOpacity: 0,
          opacity: 0.3,
          weight: 2,
        }}
      />

      <Circle
        center={center}
        interactive={false}
        radius={radius + 240}
        pathOptions={{
          color,
          fillOpacity: 0,
          opacity: 0.15,
          weight: 1,
        }}
      />
    </>
  );
}

export default AreaDangerAura;