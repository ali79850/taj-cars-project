const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed", error.message);
  }
};

module.exports = connectDB;
