export const areaStatus = {

  neeri: {
    name: "NEERI",

    aqi: 178,
    rainfall: 46,
    waterLevel: 4.3,

    riskScore: 62,
    riskLevel: "WARNING",

    alerts: ["AQI"],
  },

  rahate: {
    name: "RAHATE",

    aqi: 296,
    rainfall: 84,
    waterLevel: 8.7,

    riskScore: 91,
    riskLevel: "CRITICAL",

    alerts: ["AQI", "FLOOD"],
  },

};

export function getAreaStatus(area) {

  if (area.riskLevel === "CRITICAL") {
    return "CRITICAL";
  }

  if (area.riskLevel === "WARNING") {
    return "WARNING";
  }

  return "NORMAL";
}