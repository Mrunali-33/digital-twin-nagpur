from kafka_stream.producer import send_sensor_data

sample = {
    "zone": "NEERI",
    "aqi": 150,
    "rain": 35,
    "water_level": 4
}

send_sensor_data(sample)