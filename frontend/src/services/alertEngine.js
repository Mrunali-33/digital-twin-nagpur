export function generateAlerts(data) {

  const alerts = [];

  if (!data) return alerts;

  // AQI

  if (data.aqi > 150) {

    alerts.push({
      type: "AQI",
      area: data.zone || "NEERI",
      message: `AQI reached ${data.aqi}`,
    });

  }

  // Rain

  if (data.rain > 60) {

    alerts.push({
      type: "RAIN",
      area: data.zone || "NEERI",
      message: `Heavy rainfall ${data.rain} mm`,
    });

  }

  // Water

  if (data.water_level > 6) {

    alerts.push({
      type: "WATER",
      area: data.zone || "NEERI",
      message: `Water level ${data.water_level} m`,
    });

  }

  // Flood

  if (data.flood_risk === "HIGH") {

    alerts.push({
      type: "FLOOD",
      area: data.zone || "NEERI",
      message: "Flood risk high",
    });

  }

  return alerts;
}