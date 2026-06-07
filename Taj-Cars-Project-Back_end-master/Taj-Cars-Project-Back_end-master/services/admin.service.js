const Admin = require("../models/admin.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup a new admin
const signup = async (username, password) => {
  const existingAdmin = await Admin.findOne({ username });
  if (existingAdmin) {
    throw new Error("Admin already exists");
  }

  const admin = new Admin({ username, password });
  await admin.save();
  return admin;
};

// Signin an admin
const signin = async (username, password) => {
  const admin = await Admin.findOne({ username });
  if (!admin) {
    throw new Error("Admin not found");
  }

  const isMatch = await admin.matchPassword(password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: admin._id, role: admin.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return { admin, token };
};

module.exports = { signup, signin };
