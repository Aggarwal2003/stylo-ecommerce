# Stylo E-Commerce Website

Stylo is a full-stack e-commerce web application built using the MERN stack.  
It includes a customer-facing store, an admin dashboard, and a backend REST API.

The project follows a real-world monorepo structure and implements core e-commerce features such as authentication, product management, cart, orders, and admin controls.

---

## 🚀 Tech Stack

### Frontend (User Store)
- React
- Redux Toolkit
- Tailwind CSS
- React Router

### Admin Panel
- React
- Redux Toolkit
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- REST APIs

---

## ✨ Features

### User Features
- User authentication (JWT)
- Product listing & filtering
- Product details page
- Cart management
- Checkout & order placement

### Admin Features
- Admin authentication
- Product management (add / edit / delete)
- Order management
- Admin dashboard

### Backend Features
- Secure REST APIs
- Role-based access control (User / Admin)
- MongoDB data models
- Token-based authentication

---

## 📁 Project Structure

STYLO/
├── frontend/ # User-facing website
├── admin/ # Admin dashboard
├── backend/ # Backend API & database
└── .gitignore


---

## ⚙️ Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/stylo-ecommerce.git
cd stylo-ecommerce

2️⃣ Backend Setup
cd backend
npm install
npm run dev

Create a .env file inside the backend folder:

PORT=9000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

4️⃣ Admin Panel Setup
cd admin
npm install
npm run dev

👤 Author

Atharv Aggarwal
Aspiring Full-Stack (MERN) Developer


---

### ✅ What to do now
1. Save this as **`README.md`** in the `STYLO` folder  
2. Run:
```bash
git add README.md
git commit -m "Add professional README"
git push