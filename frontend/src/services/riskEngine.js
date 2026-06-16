export function calculateRiskScore(area) {

  let score = 0;

  // AQI contribution

  score += Math.min(area.aqi / 3, 35);

  // Rainfall contribution

  score += Math.min(area.rainfall / 2, 20);

  // Water level contribution

  score += Math.min(area.waterLevel * 4, 20);

  // Flood contribution

  if (area.floodRisk === "HIGH") {
    score += 25;
  }

  if (area.floodRisk === "MODERATE") {
    score += 12;
  }

  return Math.min(
    Math.round(score),
    100
  );
}

export function getRiskLevel(score) {

  if (score >= 80)
    return "CRITICAL";

  if (score >= 60)
    return "HIGH";

  if (score >= 40)
    return "MODERATE";

  return "LOW";
}