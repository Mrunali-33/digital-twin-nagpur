# backend/crud.py

from models import SensorReading


def save_sensor_reading(
    db,
    data
):

    reading = SensorReading(

        sensor_id=data.get("sensor_id"),

        zone=data["zone"],

        aqi=data["aqi"],

        rain=data["rain"],

        water_level=data["water_level"],

        risk_score=data["risk_score"],

        risk_level=data["risk_level"],

        health_score=data["health_score"],

        pollution_severity=data["pollution_severity"],

        flood_probability=data["flood_probability"],

        trend=data["trend"]
    )

    db.add(reading)

    db.commit()

    db.refresh(reading)

    return reading