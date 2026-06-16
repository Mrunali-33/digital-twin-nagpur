# backend/services/analytics_engine.py

def generate_analytics(
    aqi,
    rain,
    water_level,
    risk_score
):
    """
    Generate environmental analytics.
    """

    # Environmental Health Score
    health_score = max(
        0,
        round(
            100
            - (aqi * 0.25)
            - (water_level * 3)
            - (risk_score * 0.2),
            2
        )
    )

    # Pollution Severity

    if aqi <= 50:
        pollution_severity = "LOW"

    elif aqi <= 100:
        pollution_severity = "MODERATE"

    elif aqi <= 200:
        pollution_severity = "HIGH"

    else:
        pollution_severity = "EXTREME"

    # Environment Status

    if health_score >= 75:
        environment_status = "HEALTHY"

    elif health_score >= 50:
        environment_status = "STABLE"

    else:
        environment_status = "DETERIORATING"

    return {
        "health_score": health_score,
        "pollution_severity": pollution_severity,
        "environment_status": environment_status
    }