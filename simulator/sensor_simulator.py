import requests
import random
import time

# Backend API URL
API_URL = "http://127.0.0.1:8000/sensor-data"

# Rahate Colony Zones
zones = [
    "Rahate Colony A",
    "Rahate Colony B",
    "Rahate Colony C"
]

print("🚀 Sensor Simulator Started...\n")

while True:

    # Generate random environmental data
    sensor_data = {
        "zone": random.choice(zones),
        "aqi": random.randint(50, 300),
        "rain": random.randint(0, 100),
        "water_level": random.randint(1, 10)
    }

    try:
        # Send POST request to backend
        response = requests.post(API_URL, json=sensor_data)

        print("📡 Data Sent:")
        print(sensor_data)

        print("✅ Server Response:")
        print(response.json())

        print("\n-----------------------------\n")

    except Exception as e:
        print("❌ Error:", e)

    # Wait 5 seconds
    time.sleep(5)