# 🧩 Multi-Service Docker Application

This is a full-stack multi-service application using **React**, **Express**, **MongoDB**, **Redis**, and **Nginx**, all containerized using **Docker Compose**.

---

## 📁 Project Structure

multi-service-app/
├── web/ # React frontend
├── api/ # Express backend API
├── nginx/ # Reverse proxy configuration
├── secrets/ # MongoDB root password secret
├── docker-compose.yml
└── .env

yaml
Copy
Edit

---

## 🚀 Services Overview

| Service   | Description                | Port       |
|-----------|----------------------------|------------|
| `web`     | React frontend             | 3000 → 80  |
| `api`     | Express.js API backend     | 5000       |
| `mongo`   | MongoDB database           | internal   |
| `redis`   | Redis cache                | internal   |
| `nginx`   | Reverse proxy              | 80         |

---

## ⚙️ Setup & Run

### 1. Clone or Download

```bash
git clone <repo-url>
cd multi-service-app
2. Build and Run
bash
Copy
Edit
docker-compose up --build
This command will:

Build React frontend and serve it via Nginx

Build and start API, MongoDB, and Redis services

Set up reverse proxy with Nginx

🌐 Access the App
Frontend (via Nginx): http://localhost or http://<EC2-IP>

API (via Nginx proxy): http://localhost/api

📦 Environment Variables
.env

env
Copy
Edit
NODE_ENV=production
🔐 MongoDB Secret
Stored in: secrets/mongo_root_password.txt

txt
Copy
Edit
yoursecurepassword
Docker Compose loads this as a secret for the MongoDB container.

🧪 Healthcheck
The API service includes a healthcheck:

js
Copy
Edit
GET /health => "OK"
🧹 Stop and Clean Up
bash
Copy
Edit
docker-compose down
