# 🧩 Multi-Service Docker Application

A full-stack, Dockerized application using:

- ⚛️ React (Frontend)
- 🚀 Express.js (Backend API)
- 🍃 MongoDB (Database)
- 🔁 Redis (Caching)
- 🌐 Nginx (Reverse Proxy)

All services are orchestrated using **Docker Compose** for easy deployment and scalability.

---

## 📁 Project Structure

multi-service-app/
├── web/ # React frontend
├── api/ # Express backend
├── nginx/ # Nginx reverse proxy
├── secrets/ # MongoDB root password secret
├── docker-compose.yml
├── .env
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup & Run

### 🔧 Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### 🚀 Start the App

```bash
docker-compose up --build
This will:

Build the frontend and backend

Start MongoDB and Redis containers

Launch Nginx as a reverse proxy

🌐 Access the Application
Component	URL
Frontend	http://localhost:3000
API (direct)	http://localhost:5000
API (via Nginx)	http://localhost/api

If deployed on AWS EC2, replace localhost with your instance's public IP.

🔀 Services Overview
Service	Role	Exposed Port	Internal Port
web	React frontend	3000	80
api	Express API	-	5000
mongo	MongoDB database	-	27017
redis	Redis cache	-	6379
nginx	Reverse proxy	80	80

🔒 Environment & Secrets
.env
env
Copy
Edit
NODE_ENV=production
MongoDB Root Password
Stored as a Docker secret:

secrets/mongo_root_password.txt

nginx
Copy
Edit
yoursecurepassword
Used in docker-compose.yml:

yaml
Copy
Edit
secrets:
  mongo_root_password:
    file: ./secrets/mongo_root_password.txt
❤️ Healthcheck (API)
API includes a health check route:

http
Copy
Edit
GET /health => "OK"
Configured in docker-compose.yml to ensure container readiness.

📦 Useful Commands
🛑 Stop Services
bash
Copy
Edit
docker-compose down

This is the project link: https://roadmap.sh/projects/multiservice-docker
