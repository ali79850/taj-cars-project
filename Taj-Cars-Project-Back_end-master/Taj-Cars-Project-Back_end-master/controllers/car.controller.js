const carService = require("../services/car.service");

const createCar = async (req, res) => {
  try {
    const car = await carService.createCar(req.body, req.files);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await carService.getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCarsCount = async (req, res) => {
  try {
    const carsCount = await carService.getAllCarsCount();
    res.status(200).json(carsCount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await carService.getCarById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCar = async (req, res) => {
  try {
    const car = await carService.updateCar(req.params.id, req.body, req.files);
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCar = async (req, res) => {
  try {
    await carService.deleteCar(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
  getAllCarsCount,
};
