# 🌍 Integrated Environmental Digital Twin of Nagpur
### 📍 Focus Area: Rahate Colony, Nagpur

---

# 🧠 PROJECT OVERVIEW

This project creates a **real-time digital twin** of a city area that:
- Monitors environmental conditions (AQI, Rainfall, Water Level)
- Predicts flood risk
- Visualizes everything on a live map dashboard
- Uses real-time data streaming (Kafka)

---

# ⚙️ TECH STACK

### Backend
- Python
- FastAPI

### Streaming
- Apache Kafka + Zookeeper

### Database
- MongoDB

### Frontend
- HTML, CSS, JavaScript
- Leaflet.js (Map Visualization)

### Machine Learning
- Scikit-learn
- Pandas

### Dev Tools
- Docker
- Postman
- VS Code

---

# 🏗️ PROJECT STRUCTURE

digital_twin_project/
│
├── backend/
│ ├── main.py
│ ├── models.py
│ ├── database.py
│ ├── kafka_producer.py
│ ├── kafka_consumer.py
│ ├── processing.py
│
├── frontend/
│ ├── index.html
│ ├── script.js
│ ├── style.css
│
├── simulator/
│ ├── sensor_simulator.py
│
├── docker-compose.yml
└── requirements.txt

---

# 🔄 SYSTEM FLOW
Simulator / ESP32 Sensors
↓
FastAPI Backend
↓
Kafka Producer
↓
Kafka Topic
↓
Kafka Consumer
↓
Processing Logic
↓
MongoDB
↓
Frontend Dashboard (Leaflet)

---

# 🧩 PHASE-WISE PROGRESS TRACKER

## ✅ Phase 1: Setup & Environment
- [ ] Python installed
- [ ] VS Code setup
- [ ] Project folder structure created
- [ ] Virtual environment created
- [ ] requirements.txt added

📌 Notes:

---

## ✅ Phase 2: FastAPI Backend
- [ ] main.py created
- [ ] FastAPI server running
- [ ] /sensor-data POST API working
- [ ] Data receiving correctly

📌 Sample Input:
```json
{
  "zone": "Rahate Colony A",
  "aqi": 120,
  "rain": 40,
  "water_level": 5
}
✅ Phase 3: Sensor Simulator
 sensor_simulator.py created
 Random data generation working
 Sending data every 5 sec
 Backend receiving data

📌 Notes:

🔄 Phase 4: Kafka Producer
 Kafka setup using Docker
 kafka_producer.py created
 Connected to Kafka server
 Sending data to topic: sensor-topic

📌 Notes:

🔄 Phase 5: Kafka Consumer
 kafka_consumer.py created
 Consuming from topic
 Data printing in terminal
 Continuous listening working

📌 Notes:

Phase 6: Processing Logic
 processing.py created
 Flood risk calculation added
 AQI classification added
 Output structured
 📌 Example Output:
 {
  "zone": "Rahate Colony A",
  "flood_risk": 78,
  "status": "HIGH RISK"
}
📌 Notes:

🔄 Phase 7: MongoDB Integration
 MongoDB connected
 database.py created
 Data storing correctly
 Collections created

📌 Notes:

 🔄 Phase 8: Frontend Dashboard
 index.html created
 Leaflet map integrated
 Zones plotted on map
 Data fetched from backend

📌 Notes:

🔄 Phase 9: Dynamic Updates
 script.js fetching real-time data
 Map updating dynamically
 Color change based on risk

📌 Notes:


🔄 Phase 10: Machine Learning
 Model trained
 AQI prediction working
 Flood prediction working

📌 Notes:

🔄 Phase 11: Hardware Integration (Optional)
 ESP32 setup
 Sensors connected
 Data sending via WiFi
 Real sensor data integrated

📌 Notes: