def process_environmental_data(data):

    aqi = data["aqi"]
    rain = data["rain"]
    water_level = data["water_level"]

    # AQI Classification
    if aqi <= 50:
        pollution_status = "GOOD"

    elif aqi <= 100:
        pollution_status = "MODERATE"

    elif aqi <= 200:
        pollution_status = "UNHEALTHY"

    else:
        pollution_status = "HAZARDOUS"

    # Flood Risk Calculation
    flood_score = (rain * 0.4) + (water_level * 10)

    # Flood Classification
    if flood_score < 40:
        flood_risk = "LOW"

    elif flood_score < 70:
        flood_risk = "MODERATE"

    else:
        flood_risk = "HIGH"

    # Final Processed Data
    processed_data = {
        "zone": data["zone"],
        "aqi": aqi,
        "rain": rain,
        "water_level": water_level,
        "pollution_status": pollution_status,
        "flood_score": round(flood_score, 2),
        "flood_risk": flood_risk
    }

    return processed_data