# backend/services/risk_engine.py

def calculate_risk_score(
    aqi,
    rain,
    water_level,
    flood_score
):
    """
    Generate unified environmental risk score.
    Returns:
    {
        "risk_score": 78,
        "risk_level": "CRITICAL"
    }
    """

    # AQI Risk Component
    if aqi <= 50:
        aqi_risk = 10
    elif aqi <= 100:
        aqi_risk = 30
    elif aqi <= 200:
        aqi_risk = 70
    else:
        aqi_risk = 100

    # Rainfall Risk Component
    if rain < 20:
        rain_risk = 10
    elif rain < 50:
        rain_risk = 40
    elif rain < 80:
        rain_risk = 70
    else:
        rain_risk = 100

    # Water Level Risk Component
    if water_level < 2:
        water_risk = 10
    elif water_level < 5:
        water_risk = 50
    elif water_level < 8:
        water_risk = 80
    else:
        water_risk = 100

    risk_score = round(
        (
            aqi_risk * 0.35
            + rain_risk * 0.20
            + water_risk * 0.25
            + flood_score * 0.20
        ),
        2,
    )

    if risk_score < 40:
        risk_level = "NORMAL"

    elif risk_score < 70:
        risk_level = "WARNING"

    else:
        risk_level = "CRITICAL"

    return {
        "risk_score": risk_score,
        "risk_level": risk_level
    }