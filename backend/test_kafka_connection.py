from kafka import KafkaProducer

try:

    producer = KafkaProducer(
        bootstrap_servers=["localhost:9092"]
    )

    print("✅ Kafka Connection Successful")

except Exception as e:

    print("❌ Kafka Connection Failed")
    print(e)