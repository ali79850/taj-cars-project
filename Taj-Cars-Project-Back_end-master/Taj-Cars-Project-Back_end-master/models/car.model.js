const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    fuel: {
      type: String,
      enum: ["Petrol", "Diesel"],
      required: true,
    },
    transimission: {
      type: String,
      enum: ["Automatic", "Manual"],
      required: true,
    },
    mileage: { type: Number },
    engine: { type: String },
    color: { type: String },
    trim: { type: String },
    description: { type: String },
    images: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);
