from kafka import KafkaProducer
import json

producer = KafkaProducer(
    bootstrap_servers=["localhost:9092"],
    value_serializer=lambda v: json.dumps(v).encode("utf-8")
)

def send_sensor_data(data):

    producer.send(
        "sensor-data",
        data
    )

    producer.flush()

    print(
        f"Kafka Producer Sent: {data}"
    )