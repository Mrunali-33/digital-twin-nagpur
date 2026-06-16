# backend/models.py

from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import String
from sqlalchemy import DateTime

from datetime import datetime

from database import Base


class SensorReading(Base):

    __tablename__ = "sensor_readings"

    id = Column(Integer, primary_key=True, index=True)

    timestamp = Column(
        DateTime,
        default=datetime.utcnow
    )

    zone = Column(String)

    aqi = Column(Integer)

    rain = Column(Integer)

    water_level = Column(Float)

    risk_score = Column(Float)

    risk_level = Column(String)

    health_score = Column(Float)

    flood_probability = Column(Float)