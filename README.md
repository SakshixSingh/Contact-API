# 📇 Contact Management REST API

A secure and scalable **Contact Management REST API** built using **Node.js, Express, and MongoDB**, following the **MVC architecture**.  
The API includes **JWT-based authentication**, **password encryption using bcrypt**, and **protected routes** to ensure user-specific access to contacts.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token)
- bcrypt
- MVC Architecture

---

## 🌐 Live Demo
https://contact-api-xba4.onrender.com/


## 🔐 User Authentication APIs

## 📌 API Endpoints

### 🔐 User APIs

| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Login user and generate JWT |

---

### 📞 Contact APIs

| Method | Endpoint | Description | Auth |
|------|---------|------------|------|
| GET | `/api/contact/` | Get all contacts | ❌ |
| GET | `/api/contact/:id` | Get contact by ID | ❌ |
| POST | `/api/contact/new` | Create a new contact | ✅ |
| PUT | `/api/contact/:id` | Update contact by ID | ✅ |
| DELETE | `/api/contact/:id` | Delete contact by ID | ✅ |
| GET | `/api/contact/userid/:id` | Get user-specific contacts | ✅ |

---

