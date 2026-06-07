const express = require("express");
const adminController = require("../controllers/admin.controller");

const router = express.Router();

// Admin Signup Route
router.post("/signup", adminController.signup);

// Admin Signin Route
router.post("/signin", adminController.signin);

module.exports = router;
