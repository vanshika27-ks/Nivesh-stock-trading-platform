# 🚀 Nivesh – Full Stack Stock Trading Platform

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Express](https://img.shields.io/badge/Server-Express.js-lightgrey)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/Project-Type--FullStack-blueviolet)

Nivesh is a **full-stack stock trading platform inspired by Zerodha**, designed to simulate a real-world fintech product.
It provides a **landing website, authentication system, and a protected trading dashboard** where users can manage their portfolio and place orders.

The project demonstrates **modern full-stack development practices**, including authentication, API communication, database management, and responsive UI design.

## 🌐 Live Project

Landing Website
https://nivesh-frontend-aspv.vercel.app/

Trading Dashboard


Backend API
https://nivesh-stock-trading-platform-fsx2.onrender.com

---

# 📌 Features

### 🔐 Authentication System

* User signup with name, email, password, and age
* Secure login system
* JWT based authentication
* Protected dashboard routes

### 📊 Portfolio Dashboard

* View **holdings**
* View **positions**
* Portfolio summary
* Interactive data visualization using charts

### 💹 Order Management

* Place buy orders
* Store orders in MongoDB
* Fetch and display order data

### 🎨 Modern UI

* Zerodha inspired UI
* Glassmorphism design
* Light / Dark theme toggle
* Floating input labels
* Responsive design

### 🛡️ Security

* Password hashing using **bcrypt**
* JWT authentication tokens
* Protected routes for dashboard access

---

# 🛠 Tech Stack

## Frontend

* ⚛️ React
* 🔗 React Router
* 📡 Axios
* 🎨 CSS / Bootstrap
* 🧩 Material UI
* 🎯 React Icons

## Dashboard

* ⚛️ React
* 📊 Chart.js
* 📉 React ChartJS
* 🔗 Axios

## Backend

* 🟢 Node.js
* 🚏 Express.js
* 🛡 JWT Authentication
* 🔐 Bcrypt

## Database

* 🍃 MongoDB
* 📦 Mongoose

---

# 🏗 Project Architecture

```
Nivesh-stock-trading-platform
│
├── frontend
│   ├── Landing pages
│   ├── Signup / Login
│   └── UI components
│
├── dashboard
│   ├── Portfolio dashboard
│   ├── Holdings view
│   ├── Positions view
│   └── Order management
│
├── backend
│   ├── Authentication APIs
│   ├── Holdings API
│   ├── Positions API
│   └── Orders API
│
└── README.md
```

---

# 🔄 Authentication Flow

1️⃣ User signs up through the landing page.
2️⃣ Backend stores user data in MongoDB with **hashed password**.
3️⃣ User logs in using email and password.
4️⃣ Backend verifies credentials.
5️⃣ A **JWT token is generated**.
6️⃣ Token is stored in **localStorage**.
7️⃣ User is redirected to the **protected dashboard**.

---

# 🔗 API Endpoints

### Authentication

```
POST /signup
POST /login
```

### Portfolio

```
GET /allHoldings
GET /allPositions
```

### Orders

```
POST /newOrder
```

---

# ⚙️ Installation

## Clone the Repository

```
git clone https://github.com/vanshika27-ks/Nivesh-stock-trading-platform.git
```

```
cd Nivesh-stock-trading-platform
```

---

# 🖥 Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URL=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=3002
```

Run backend:

```
node index.js
```

---

# 🌐 Frontend Setup

```
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

# 📊 Dashboard Setup

```
cd dashboard
npm install
npm start
```

Runs on:

```
http://localhost:3001
```

---

# ☁️ Deployment

The application can be deployed using:

Backend
Render

Frontend
Vercel

Dashboard
Vercel

Database
MongoDB Atlas

---

# ⚡ Challenges Faced

* Managing authentication across multiple applications
* Protecting dashboard routes
* Handling API communication between frontend and backend
* Managing JWT token authentication
* Building a responsive trading dashboard UI

---

# 🚀 Future Improvements

* Real-time stock market API integration
* Two-factor authentication
* Portfolio analytics
* Live price updates
* Trading history
* Mobile optimization

---

# 👩‍💻 Author

**Vanshika Salaria**

GitHub
https://github.com/vanshika27-ks
