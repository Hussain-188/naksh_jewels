# Naksh Jewels – Simple Storefront

This project is a mini e-commerce storefront built as part of the **Naksh Jewels ReactJS & Node.js Internship Assessment**.  
It demonstrates clean frontend architecture, backend API design, and a complete Dockerized setup.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- TypeScript (TSX)
- React Context API (state management)
- CSS Modules
- No external UI libraries

### Backend
- Node.js
- Express.js
- In-memory data storage
- Input validation using express-validator
- Centralized error handling

### DevOps
- Docker
- Docker Compose

---

## ✨ Features

### Frontend
- Product listing page
- Reusable product cards
- Cart page with:
  - Add to cart
  - Update quantity
  - Remove items
- Global cart state using Context API
- Responsive layout (basic)

### Backend
- `GET /products` – Fetch all products
- `POST /cart` – Add/update cart items
- Validation middleware
- Proper HTTP status codes and error handling

---

---

🚀 Running the Application (Docker – Recommended)

Prerequisite: Docker Desktop must be installed and running.

From the project root directory, run:

docker compose up --build

Once the containers are running, access the application:

Frontend: http://localhost:5173

Backend API: http://localhost:5000/products

To stop the containers:

docker compose down
🧪 Running Without Docker (Optional)

This method can be used if Docker is not available.

Backend
cd backend
npm install
npm start

Backend runs on: http://localhost:5000

Frontend
cd frontend
npm install
npm run dev

Frontend runs on: http://localhost:5173

📝 Notes

Frontend is implemented using React + TypeScript (TSX).

Backend is implemented using Node.js and Express (JavaScript).

Product data is stored in-memory as allowed in the assignment.

Environment variables are managed using .env files and are not committed to the repository.

Frontend and backend are Dockerized and can be started together using Docker Compose.

✅ Assignment Requirements Coverage

✔ Functional React components

✔ Context API for state management

✔ No UI libraries used

✔ Node.js + Express backend

✔ Validation middleware and error handling

✔ Dockerfile for frontend

✔ Dockerfile for backend

✔ docker-compose setup (docker compose up)

✔ Clean and structured codebase

👤 Author

Mohamed Hussain
Computer Science Engineering Student
Frontend & Full-Stack Development Enthusiast

---

## 📁 Project Structure

```text
.
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── data/
│   ├── Dockerfile
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── data/
│   │   └── styles/
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.ts
│
├── docker-compose.yml
└── README.md
