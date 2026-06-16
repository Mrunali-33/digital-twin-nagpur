# backend/services/alert_engine.py

def generate_alerts(
    aqi,
    rain,
    water_level,
    flood_score,
    risk_level
):
    alerts = []

    # AQI Alerts

    if aqi > 200:
        alerts.append({
            "type": "AQI",
            "severity": "CRITICAL",
            "message": "Hazardous air quality detected"
        })

    elif aqi > 100:
        alerts.append({
            "type": "AQI",
            "severity": "WARNING",
            "message": "Air quality unhealthy"
        })

    # Rainfall Alerts

    if rain >= 80:
        alerts.append({
            "type": "RAIN",
            "severity": "WARNING",
            "message": "Heavy rainfall detected"
        })

    # Water Level Alerts

    if water_level >= 8:
        alerts.append({
            "type": "WATER",
            "severity": "CRITICAL",
            "message": "Water level critical"
        })

    elif water_level >= 5:
        alerts.append({
            "type": "WATER",
            "severity": "WARNING",
            "message": "Water level rising"
        })

    # Flood Alerts

    if flood_score >= 70:
        alerts.append({
            "type": "FLOOD",
            "severity": "CRITICAL",
            "message": "High flood risk detected"
        })

    elif flood_score >= 40:
        alerts.append({
            "type": "FLOOD",
            "severity": "WARNING",
            "message": "Moderate flood risk"
        })

    # Overall Environmental Alert

    if risk_level == "CRITICAL":
        alerts.append({
            "type": "SYSTEM",
            "severity": "CRITICAL",
            "message": "Environmental conditions critical"
        })

    return alerts