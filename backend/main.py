from database import get_db
from database import SessionLocal
from sqlalchemy.orm import Session
from services.analytics_api_service import (
    get_aqi_trend,
    get_risk_trend,
    get_flood_trend,
    get_environment_health,
    get_zone_comparison
)
from models import SensorReading

from services.history_service import (
    get_latest_history,
    get_zone_history
)
from fastapi import (
    FastAPI,
    Depends,
    WebSocket
)
import asyncio
from websocket_manager import manager
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from services.area_engine import (
    update_area_data,
    get_all_areas
)
from processing import process_environmental_data


from crud import save_sensor_reading

# CREATE FASTAPI APP

app = FastAPI()

# ENABLE CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# STORE LATEST ENVIRONMENTAL DATA

latest_data = {}

# SENSOR DATA MODEL

class SensorData(BaseModel):

    zone: str
    aqi: int
    rain: int
    water_level: int

# HOME ROUTE

@app.get("/")
def home():

    return {
        "message": "Integrated Environmental Digital Twin Backend Running"
    }

# SENSOR DATA API

@app.post("/sensor-data")
async def receive_sensor_data(
    data: SensorData,
    db: Session = Depends(get_db)
):

    raw_data = data.dict()



    processed_data = process_environmental_data(raw_data)

    save_sensor_reading(
        db=db,
        data=processed_data
    )

    global latest_data

    latest_data = processed_data

    await manager.broadcast(
    processed_data
)
    
    print("\n===== PROCESSED ENVIRONMENT DATA =====")

    for key, value in processed_data.items():

        print(f"{key}: {value}")

    return {
        "status": "success",
        "processed_data": processed_data
    }
    # GET LATEST LIVE DATA

@app.get("/latest-data")
def get_latest_data():

    return latest_data

@app.get("/areas")
def get_area_data():

    return get_all_areas()


@app.get("/history")
def history(
    db: Session = Depends(get_db)
):

    rows = get_latest_history(
        db,
        limit=100
    )

    return [

        {
            "timestamp": row.timestamp,
            "zone": row.zone,
            "aqi": row.aqi,
            "rain": row.rain,
            "water_level": row.water_level,
            "risk_score": row.risk_score
        }

        for row in rows
    ]

@app.get("/history/neeri")
def neeri_history(
    db: Session = Depends(get_db)
):

    rows = get_zone_history(
        db,
        "NEERI",
        100
    )

    return rows

@app.get("/history/rahate")
def rahate_history(
    db: Session = Depends(get_db)
):

    rows = get_zone_history(
        db,
        "RAHATE",
        100
    )

    return rows

# ==========================
# ZONE API - NEERI
# ==========================

@app.get("/zone/neeri")
def get_neeri_data():

    db = SessionLocal()

    latest = (
        db.query(SensorReading)
        .filter(SensorReading.zone == "NEERI")
        .order_by(SensorReading.timestamp.desc())
        .first()
    )

    db.close()

    if not latest:
        return {"message": "No NEERI data found"}

    return {
        "zone": latest.zone,
        "aqi": latest.aqi,
        "rain": latest.rain,
        "water_level": latest.water_level,
        "risk_score": latest.risk_score,
        "risk_level": latest.risk_level,
        "health_score": latest.health_score,
        "pollution_severity": latest.pollution_severity,
        "flood_probability": latest.flood_probability,
        "trend": latest.trend
    }


# ==========================
# ZONE API - RAHATE
# ==========================

@app.get("/zone/rahate")
def get_rahate_data():

    db = SessionLocal()

    latest = (
        db.query(SensorReading)
        .filter(SensorReading.zone == "RAHATE")
        .order_by(SensorReading.timestamp.desc())
        .first()
    )

    db.close()

    if not latest:
        return {"message": "No RAHATE data found"}

    return {
        "zone": latest.zone,
        "aqi": latest.aqi,
        "rain": latest.rain,
        "water_level": latest.water_level,
        "risk_score": latest.risk_score,
        "risk_level": latest.risk_level,
        "health_score": latest.health_score,
        "pollution_severity": latest.pollution_severity,
        "flood_probability": latest.flood_probability,
        "trend": latest.trend
    }

    # ==================================
# ANALYTICS APIs
# ==================================

@app.get("/analytics/aqi-trend")
def aqi_trend(
    db: Session = Depends(get_db)
):

    return get_aqi_trend(db)


@app.get("/analytics/risk-trend")
def risk_trend(
    db: Session = Depends(get_db)
):

    return get_risk_trend(db)


@app.get("/analytics/flood-trend")
def flood_trend(
    db: Session = Depends(get_db)
):

    return get_flood_trend(db)


@app.get("/analytics/environment-health")
def environment_health(
    db: Session = Depends(get_db)
):

    return get_environment_health(db)


@app.get("/analytics/zone-comparison")
def zone_comparison(
    db: Session = Depends(get_db)
):

    return get_zone_comparison(db)


import asyncio


@app.websocket("/ws")
async def websocket_endpoint(
    websocket: WebSocket
):

    await manager.connect(
        websocket
    )

    print("WS CONNECTED")

    try:

        while True:

            await asyncio.sleep(1)

    except Exception as e:

        print(
            "WS DISCONNECTED:",
            e
        )

        manager.disconnect(
            websocket
        )