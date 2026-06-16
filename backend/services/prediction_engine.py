# backend/services/prediction_engine.py

def generate_predictions(
    aqi,
    rain,
    water_level,
    risk_score
):
    """
    Rule-based prediction engine.
    Later replaced by ML models.
    """

    # Future AQI Prediction

    predicted_aqi = round(
        aqi + (rain * 0.15) + (risk_score * 0.25),
        2
    )

    # Future Water Level Prediction

    predicted_water_level = round(
        water_level + (rain * 0.03),
        2
    )

    # Flood Probability

    flood_probability = min(
        100,
        round(
            (rain * 0.5)
            + (water_level * 5)
            + (risk_score * 0.3),
            2
        )
    )

    # Environmental Trend

    if risk_score < 40:
        trend = "IMPROVING"

    elif risk_score < 70:
        trend = "STABLE"

    else:
        trend = "DETERIORATING"

    return {
        "predicted_aqi": predicted_aqi,
        "predicted_water_level": predicted_water_level,
        "flood_probability": flood_probability,
        "trend": trend
    }