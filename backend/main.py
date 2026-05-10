from processing import process_environmental_data
from fastapi import FastAPI
from pydantic import BaseModel

# Create FastAPI app
app = FastAPI()

# Sensor Data Model
class SensorData(BaseModel):
    zone: str
    aqi: int
    rain: int
    water_level: int

# Home Route
@app.get("/")
def home():
    return {
        "message": "Integrated Environmental Digital Twin Backend Running"
    }

# Sensor Data API
@app.post("/sensor-data")
def receive_sensor_data(data: SensorData):

    raw_data = data.dict()

    # Process environmental data
    processed_data = process_environmental_data(raw_data)

    print("\n===== PROCESSED ENVIRONMENT DATA =====")

    for key, value in processed_data.items():
        print(f"{key}: {value}")

    return {
        "status": "success",
        "processed_data": processed_data
    }