const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  fiber: {
    type: Number,
    required: true,
  },
  cholesterol: {
    type: Number,
    required: true,
  },
  sodium: {
    type: Number,
    required: true,
  },
  sugar: {
    type: Number,
    required: true,
  },
  potassium: {
    type: Number,
    required: true,
  },
  magnesium: {
    type: Number,
    required: true,
  },
  phosphorus: {
    type: Number,
    required: true,
  },
  vitaminC: {
    type: Number,
    required: true,
  },
  vitaminA: {
    type: Number,
    required: true,
  },
  calcium: {
    type: Number,
    required: true,
  },
  iron: {
    type: Number,
    required: true,
  },
  zinc: {
    type: Number,
    required: true,
  },
  vitaminE: {
    type: Number,
    required: true,
  },
  vitaminK: {
    type: Number,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
