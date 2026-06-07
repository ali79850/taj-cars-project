# 🚗 Taj Cars – Car Rental & Booking Platform

## 📌 Project Description

Taj Cars is a full-stack car rental and booking platform developed using the MERN stack.  
It allows users to browse available cars, view detailed information, and submit inquiries.  
An admin panel is provided to manage car listings efficiently.

---

## ✨ Features

### 👤 User Features
- Browse available cars
- View detailed car information
- Send inquiries and contact requests

### 🧑‍💼 Admin Features
- Admin dashboard
- Add new cars
- Edit existing car listings
- Delete cars
- Manage inquiries

### ⚙️ System Features
- REST API architecture
- Secure backend services
- Image upload using Cloudinary
- MongoDB Atlas database integration
- Responsive frontend UI

---

## 🛠️ Technologies Used

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Cloudinary

---

## 📁 Project Setup

### Frontend
cd frontend  
npm install  
npm run dev  

### Backend
cd backend  
npm install  
npm start  

---

## 🔐 Environment Variables

Create a `.env` file in backend using `.env.example`:

PORT=5000  
MONGO_URL=your_mongodb_connection_string  
CLOUDINARY_API_KEY=your_key  
CLOUDINARY_API_SECRET=your_secret  
CLOUDINARY_CLOUD_NAME=your_cloud_name  
JWT_SECRET=your_secret  

---

## 🔌 API Endpoints

GET /api/car → Get all cars  
POST /api/car → Add new car  
PUT /api/car/:id → Update car  
PATCH /api/car/:id → Partial update  
DELETE /api/car/:id → Delete car  

---

## 🚀 Future Improvements

- Payment gateway integration  
- User authentication & roles  
- Booking system with calendar  
- Real-time chat system  
- Deployment on cloud  

---

## 👨‍💻 Author

Ali Hasnain  
Computer Science – Semester Project  

---

## 📄 License

This project is for educational purposes only.    n