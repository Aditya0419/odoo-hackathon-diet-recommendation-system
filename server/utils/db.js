const mongoose = require("mongoose");
const Food = require("../models/food");

const URI = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection is succesfull...");
  } catch (error) {
    console.log(error);
    console.log("connection failed...");
    process.exit(0);
  }
};

// async function insertFoodDocuments(foodData) {
//   try {
//     // Insert many documents into the collection
//     const result = await Food.insertMany(foodData);
//     console.log(`${result.length} documents inserted successfully.`);
//   } catch (error) {
//     console.error("Error inserting documents:", error);
//   }
// }

// const foodData = [

// ];

// insertFoodDocuments(foodData);

module.exports = connectDb;
