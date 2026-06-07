# TajCars - Backend

This repository contains the backend server for the **TajCars** platform, a virtual car export company based in Dubai. The backend is developed using **Node.js**, **Express.js**, and **MongoDB**, and serves as the API layer for both the customer-facing frontend and the admin dashboard.

## Overview

The backend provides a secure and scalable API for managing car listings, handling customer inquiries, and supporting the admin portal with functionalities like adding, updating, and deleting cars. Images are uploaded using Cloudinary, and file handling is managed via Multer.

## Key Features

- RESTful API for car listing management
- Admin CRUD operations (Add, Update, Delete)
- Image upload to Cloudinary using Multer
- Inquiry/message handling with read/unread functionality
- Secure and modular codebase
- MongoDB as the primary database
- Environment-based configuration using `.env`

## API Endpoints

| Method | Endpoint            | Description                        |
|--------|---------------------|------------------------------------|
| GET    | `/cars`             | Fetch all cars                     |
| GET    | `/cars/:id`         | Fetch single car by ID             |
| POST   | `/cars`             | Add a new car                      |
| PUT    | `/cars/:id`         | Update an existing car             |
| DELETE | `/cars/:id`         | Delete a car                       |
| POST   | `/upload`           | Upload car images (Cloudinary)     |
| POST   | `/contact`          | Submit a customer inquiry          |
| GET    | `/messages`         | View all messages                  |
| PUT    | `/messages/:id`     | Mark message as read/unread        |

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Cloudinary (for image hosting)
- Multer (for file uploads)
- dotenv (for environment variables)
- CORS

## Project Setup

### Prerequisites

- Node.js and npm
- MongoDB connection URI
- Cloudinary credentials

  ###Create a .env file in the root directory and add the following:


PORT=5000
MONGODB_URI=your_mongo_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AhmarZamir/Taj-Cars-Project-Back_end.git
cd Taj-Cars-Project-Back_end

intall dependencies and run
npm install
npm run dev

