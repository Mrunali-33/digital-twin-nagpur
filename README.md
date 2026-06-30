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
```

---

### Terminal 4 - backend/kafka
```bash
docker compose up -d
```

### Terminal 5 - backend
```bash
python kafka_stream/consumer.py
```

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
