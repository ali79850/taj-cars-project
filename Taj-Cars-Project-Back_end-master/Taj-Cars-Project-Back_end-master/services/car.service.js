const Car = require("../models/car.model");
const uploadOnCloudinary = require("../config/cloudaniry");

const createCar = async (data, files) => {
  const imageUrls = [];

  const { make, model, year, color, trim } = data;

  const existingCar = await Car.findOne({
    make,
    model,
    year,
    color,
    trim,
  });

  if (existingCar) {
    return { alreadyExists: true, car: existingCar };
  }
  for (const file of files) {
    const url = await uploadOnCloudinary(file.path);
    if (url) imageUrls.push(url);
  }

  const car = await Car.create({ ...data, images: imageUrls });
  return car;
};

const getAllCars = async () => {
  return await Car.find();
};

const getAllCarsCount = async () => {
  return await Car.countDocuments();
};

const getCarById = async (id) => {
  return await Car.findById(id);
};

const updateCar = async (id, data, files) => {
  const car = await Car.findById(id);
  if (!car) throw new Error("Car not found");

  const newImages = [];
  if (files && files.length > 0) {
    for (const file of files) {
      const url = await uploadOnCloudinary(file.path);
      if (url) newImages.push(url);
    }
  }

  Object.assign(car, data);
  if (newImages.length > 0) car.images = newImages;

  await car.save();
  return car;
};

const deleteCar = async (id) => {
  return await Car.findByIdAndDelete(id);
};

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
  getAllCarsCount,
};
