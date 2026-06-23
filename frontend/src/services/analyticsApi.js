const BASE_URL = "http://127.0.0.1:8000";

export async function getAQITrend() {
  const response = await fetch(
    `${BASE_URL}/analytics/aqi-trend`
  );

  return await response.json();
}

export async function getRiskTrend() {
  const response = await fetch(
    `${BASE_URL}/analytics/risk-trend`
  );

  return await response.json();
}

export async function getFloodTrend() {
  const response = await fetch(
    `${BASE_URL}/analytics/flood-trend`
  );

  return await response.json();
}

export async function getEnvironmentHealth() {
  const response = await fetch(
    `${BASE_URL}/analytics/environment-health`
  );

  return await response.json();
}

export async function getZoneComparison() {
  const response = await fetch(
    `${BASE_URL}/analytics/zone-comparison`
  );

  return await response.json();
}
