# Environmental Digital Twin Project

## Overview

This project consists of three components:

1. Frontend (React + Vite)
2. Backend (FastAPI)
3. Sensor Simulator

All three services must be running simultaneously for the project to work correctly.

---

## Prerequisites

Install the following software before running the project:

* Node.js (Latest LTS Version)
* Python 3.x
* Visual Studio Code

---

## Project Setup

### Frontend Dependencies

Open a terminal and run:

```bash
cd frontend
npm install
```

This command installs all required frontend dependencies.

---

## Running the Project

Open three separate terminals in VS Code.

### Terminal 1 - Frontend

```bash
cd frontend
npm install
npm run dev
```

---

### Terminal 2 - Sensor Simulator

```bash
cd simulator
python sensor_simulator.py
```

---

### Terminal 3 - Backend

```bash
cd backend
python -m uvicorn main:app --reload
```# 🌍 Environmental Digital Twin Dashboard

A real-time AI-powered Environmental Digital Twin Dashboard developed using **React, FastAPI, PostgreSQL, Apache Kafka, Docker, and WebSockets**.

The system simulates environmental sensor data, processes it using AI-based analytics, stores it in PostgreSQL, streams live updates through WebSockets, and visualizes the data on an interactive dashboard.

---

# 🚀 Features

- 📡 Real-time Sensor Data Simulation
- ⚡ Live Dashboard Updates using WebSockets
- 📊 AI-based Environmental Analytics
- 🌫 AQI Monitoring
- 🌧 Rainfall Monitoring
- 🌊 Flood Risk Prediction
- ❤️ Environment Health Score
- 📈 Historical Trend Charts
- 🗺 Zone Comparison Analytics
- 🔔 Live Alert Notifications
- 🐳 Kafka + Docker Streaming Pipeline
- 🗄 PostgreSQL Data Storage

---

# 🛠 Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Recharts

## Backend

- FastAPI
- SQLAlchemy
- WebSockets
- Pydantic

## Database

- PostgreSQL
- pgAdmin 4

## Streaming

- Apache Kafka
- Apache Zookeeper
- Docker

## Others

- Python
- Sensor Simulator

---

# 📂 Project Structure

```
digital_twin_project/

│
├── frontend/
│
├── backend/
│   ├── kafka/
│   ├── kafka_stream/
│   ├── services/
│   ├── websocket_manager.py
│   ├── main.py
│   ├── crud.py
│   ├── processing.py
│   ├── init_db.py
│   ├── test_producer.py
│   └── test_kafka_connection.py
│
├── simulator/
│   └── sensor_simulator.py
│
└── README.md
```

---

# 📋 Prerequisites

Install the following software before running the project.

## Required Software

- Python 3.11 or later
- Node.js (Latest LTS)
- PostgreSQL
- pgAdmin 4
- Docker Desktop
- Git
- Visual Studio Code (Recommended)

---

# ⚙ First-Time Project Setup

## 1. Clone Repository

```bash
git clone <repository-url>

cd digital_twin_project
```

---

## 2. Install Frontend Dependencies

```bash
cd frontend

npm install
```

---

## 3. Install Backend Dependencies

```bash
cd backend

pip install -r requirements.txt
```

If `requirements.txt` is unavailable, install the required packages manually.

---

# 🗄 PostgreSQL Setup

## Step 1

Open PostgreSQL Service.

---

## Step 2

Open pgAdmin 4.

---

## Step 3

Create a new database.

Example:

```
Database Name:

digital_twin
```

---

## Step 4

Update your database credentials inside the backend configuration file (if required).

Example:

```
Database Name

Username

Password

Host

Port
```

---

## Step 5

Initialize the database **(Run only once).**

Open a terminal:

```bash
cd backend

python init_db.py
```

This command creates all required database tables.

⚠️ **Do not run this command every time.**

Run it only:

- First project setup
- After deleting the database
- After changing database models

---

# 🐳 Docker Setup

Start Docker Desktop before running Kafka.

Verify Docker is running.

---

# ⚡ Kafka & Zookeeper Setup

Open a new terminal.

```bash
cd backend/kafka

docker compose up -d
```

Verify containers:

```bash
docker ps
```

Expected Containers:

- kafka
- zookeeper

To view Kafka logs:

```bash
docker logs kafka
```

---

# ▶ Running the Complete Project

Open **five terminals**.

---

# Terminal 1 — Backend (FastAPI)

```bash
cd backend

python -m uvicorn main:app --reload
```

Backend API:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

# Terminal 2 — Frontend

```bash
cd frontend

npm run dev
```

Frontend:

```
http://localhost:5173
```

---

# Terminal 3 — Sensor Simulator

```bash
cd simulator

python sensor_simulator.py
```

The simulator continuously generates random environmental sensor data.

---

# Terminal 4 — Kafka Consumer

```bash
cd backend

python kafka_stream/consumer.py
```

Keep this terminal running.

It continuously:

- Reads Kafka messages
- Processes sensor data
- Stores processed data into PostgreSQL
- Broadcasts live updates through WebSocket

---

# Terminal 5 — Kafka & Zookeeper

```bash
cd backend/kafka

docker compose up -d
```

Verify:

```bash
docker ps
```

---

# 🔧 Optional Testing Commands

These commands are only for testing and debugging.

---

## Test Kafka Connection

```bash
cd backend

python test_kafka_connection.py
```

Purpose:

- Verifies Kafka server is reachable.

Expected Output:

```
Kafka Connection Successful
```

---

## Test Kafka Producer

```bash
cd backend

python test_producer.py
```

Purpose:

- Sends **one sample message** to Kafka.

Useful for testing the Kafka Producer.

This script exits immediately after sending one message.

---

## Initialize Database

```bash
cd backend

python init_db.py
```

Purpose:

Creates database tables.

Run only once during initial project setup.

---

# 🌐 Application URLs

Frontend

```
http://localhost:5173
```

Backend

```
http://127.0.0.1:8000
```

Swagger API

```
http://127.0.0.1:8000/docs
```

OpenAPI

```
http://127.0.0.1:8000/openapi.json
```

---

# 🔄 Data Flow

```
Sensor Simulator
        │
        ▼
 FastAPI (/sensor-data)
        │
        ▼
AI Processing Engine
        │
        ▼
PostgreSQL Database
        │
        ▼
WebSocket Broadcast
        │
        ▼
React Dashboard
```

---

# 🛠 Troubleshooting

## Frontend

If Vite is not recognized:

```bash
cd frontend

npm install

npm run dev
```

---

## Backend

Install missing Python packages:

```bash
pip install -r requirements.txt
```

---

## Docker

Verify Docker Desktop is running.

Check containers:

```bash
docker ps
```

---

## Kafka

Check Kafka logs:

```bash
docker logs kafka
```

---

## PostgreSQL

Ensure:

- PostgreSQL Service is running
- pgAdmin is connected
- Database exists
- Credentials are correct

---

## WebSocket

If the dashboard does not update:

- Ensure Backend is running.
- Ensure Kafka Consumer is running.
- Ensure Frontend is connected.
- Check browser console for WebSocket connection status.

---

# 📌 Important Notes

- Keep Docker running while using Kafka.
- Keep Backend running.
- Keep Kafka Consumer running.
- Keep Frontend running.
- Keep Sensor Simulator running.
- Extract the ZIP file before running the project.
- Do not delete project files after extraction.

---

# 👨‍💻 Developed By

**Environmental Digital Twin Project**

Built using:

- React
- FastAPI
- PostgreSQL
- Apache Kafka
- Docker
- WebSockets
- Python

---

# 📄 License

This project is intended for educational and research purposes.

---

### Terminal 4 - backend/kafka
```bash
docker compose up -d
docker ps
docker logs kafka
```

### Terminal 5 - backend
```bash
python kafka_stream/consumer.py
```
keep it open, then run:
### Terminal 6 (Optional)
```bash
python test_producer.py
```

## Accessing the Application

After all services are running:

Frontend:
http://localhost:5173

Backend API:
http://127.0.0.1:8000

Backend API Documentation:
http://127.0.0.1:8000/docs

---

## Troubleshooting

### Frontend Error: 'vite' is not recognized

Run:

```bash
cd frontend
npm install
```

Then start the frontend again:

```bash
npm run dev
```

### Missing Python Packages

Install required Python packages:

```bash
pip install -r requirements.txt
```

If a requirements.txt file is not available, install the required packages manually.

---

## Important

* Keep all three terminals running simultaneously.
* Do not delete project files after extraction.
* Extract the ZIP file before running the project.
