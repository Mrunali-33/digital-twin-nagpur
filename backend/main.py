from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from processing import process_environmental_data

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
def receive_sensor_data(data: SensorData):

    raw_data = data.dict()

    # PROCESS ENVIRONMENTAL DATA

    processed_data = process_environmental_data(raw_data)

    global latest_data

    latest_data = processed_data

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