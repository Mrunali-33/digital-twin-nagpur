from kafka import KafkaConsumer
import json

import sys
import os

sys.path.append(
    os.path.dirname(
        os.path.dirname(
            os.path.abspath(__file__)
        )
    )
)

from processing import process_environmental_data
from database import SessionLocal
from crud import save_sensor_reading
from websocket_manager import manager
import asyncio

consumer = KafkaConsumer(
    "sensor-data",
    bootstrap_servers=["localhost:9092"],
    auto_offset_reset="latest",
    enable_auto_commit=True,
    group_id="digital-twin-group",
    value_deserializer=lambda m: json.loads(
        m.decode("utf-8")
    )
)

print("Kafka Consumer Started...")

for message in consumer:

    raw_data = message.value

    print(
        f"\nReceived Sensor Data: {raw_data}"
    )

    processed_data = process_environmental_data(
        raw_data
    )

    db = SessionLocal()

    try:

        save_sensor_reading(
            db,
            processed_data
        )

        asyncio.run(
           manager.broadcast(
             processed_data
           )
        )

        print(
          "Saved to PostgreSQL"
        )

        print(
         "WebSocket Broadcast Sent"
        )

    finally:

        db.close()