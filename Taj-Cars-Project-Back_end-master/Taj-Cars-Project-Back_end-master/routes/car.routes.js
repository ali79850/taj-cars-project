const express = require("express");
const router = express.Router();
const carController = require("../controllers/car.controller");
const upload = require("../middlewares/upload");

router.post("/", upload.array("images", 20), carController.createCar);
router.get("/", carController.getAllCars);
router.get("/count", carController.getAllCarsCount);
router.get("/:id", carController.getCarById);
router.put("/:id", upload.array("images", 5), carController.updateCar);
router.delete("/:id", carController.deleteCar);

module.exports = router;
