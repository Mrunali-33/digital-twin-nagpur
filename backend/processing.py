# backend/processing.py

from services.risk_engine import calculate_risk_score
from services.alert_engine import generate_alerts
from services.analytics_engine import generate_analytics
from services.prediction_engine import generate_predictions

def process_environmental_data(data):

    aqi = data["aqi"]
    rain = data["rain"]
    water_level = data["water_level"]

    # Pollution Classification

    if aqi <= 50:
        pollution_status = "GOOD"

    elif aqi <= 100:
        pollution_status = "MODERATE"

    elif aqi <= 200:
        pollution_status = "UNHEALTHY"

    else:
        pollution_status = "HAZARDOUS"

    # Flood Score

    flood_score = round(
        (rain * 0.4) + (water_level * 10),
        2
    )

    # Flood Classification

    if flood_score < 40:
        flood_risk = "LOW"

    elif flood_score < 70:
        flood_risk = "MODERATE"

    else:
        flood_risk = "HIGH"

    # NEW RISK ENGINE

    risk_data = calculate_risk_score(
        aqi=aqi,
        rain=rain,
        water_level=water_level,
        flood_score=flood_score
    )

    alerts = generate_alerts(
     aqi=aqi,
     rain=rain,
     water_level=water_level,
     flood_score=flood_score,
     risk_level=risk_data["risk_level"]
    )

    analytics = generate_analytics(
     aqi=aqi,
     rain=rain,
     water_level=water_level,
     risk_score=risk_data["risk_score"]
    )

    predictions = generate_predictions(
     aqi=aqi,
     rain=rain,
     water_level=water_level,
     risk_score=risk_data["risk_score"]
    )

    processed_data = {

        "zone": data["zone"],

        "aqi": aqi,

        "rain": rain,

        "water_level": water_level,

        "pollution_status": pollution_status,

        "flood_score": flood_score,

        "flood_risk": flood_risk,

        "risk_score": risk_data["risk_score"],

        "risk_level": risk_data["risk_level"],

        "health_score": analytics["health_score"],

        "pollution_severity": analytics["pollution_severity"],

        "environment_status": analytics["environment_status"],
        
        "predicted_aqi": predictions["predicted_aqi"],

        "predicted_water_level": predictions["predicted_water_level"],

        "flood_probability": predictions["flood_probability"],

        "trend": predictions["trend"],

        "alerts": alerts
        
    }

    return processed_data