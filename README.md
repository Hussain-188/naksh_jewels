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