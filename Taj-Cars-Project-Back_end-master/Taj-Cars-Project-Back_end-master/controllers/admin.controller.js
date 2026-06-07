const adminService = require("../services/admin.service");

// Admin Signup
const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await adminService.signup(username, password);
    res.status(201).json({ message: "Admin created successfully", admin });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Admin Signin
const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { admin, token } = await adminService.signin(username, password);
    res
      .status(200)
      .json({ message: "Admin signed in successfully", admin, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { signup, signin };
