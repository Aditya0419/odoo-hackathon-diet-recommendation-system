const User = require("../models/user");
const Food = require("../models/food");
const axios = require("axios");
const express = require("express");


const user = async (req, res) => {
  try {
    const userData = req.user;
    // console.log(userData);

    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`Error from user Route : ${error}`);
  }
};

const home = async (req, res) => {
  try {
    res.status(200).send("Hello From the Home Page");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const {
      username,
      email,
      gender,
      weight,
      height,
      dietaryPreferences,
      allergies,
      healthGoals,
      password,
      age,
      activityLevel,
    } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(200).json({ message: "Email is already exist" });
    }

    const userCreated = await User.create({
      username,
      email,
      gender,
      weight,
      height,
      dietaryPreferences,
      allergies,
      healthGoals,
      password,
      age,
      activityLevel,
    });

    res.status(200).json({
      message: "Registration Successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const data = await User.findOne({ email }, { password: 0 });

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(data);
  } catch (error) {
    if (!res.headersSent) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "Login Successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updateUserData }
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.find({ _id: id }, { password: 0 });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find({});
    if (!foods || foods.length === 0) {
      return res.status(400).json({ message: "No food found" });
    }

    return res.status(200).json(foods);
  } catch (error) {
    // next(error);
  }
};

const searchFood = async (req, res, next) => {
  try {
    let { name } = req.body;
    name = name.toLowerCase();

    const foods = await Food.find({
      foodname: { $regex: new RegExp(name, "i") },
    }).lean();

    const foodsLowercase = foods.map((food) => ({
      ...food,
      foodname: food.foodname.toLowerCase(),
    }));

    res.json(foodsLowercase);
  } catch (error) {
    next(error);
  }
};

const filterFood = async (req, res, next) => {
  try {
    let { categories } = req.body;

    if (!Array.isArray(categories)) {
      categories = [categories];
    }

    const lowerCaseCategories = categories.map((cat) => cat.toLowerCase());

    const regexPattern = lowerCaseCategories.join("|");

    const foods = await Food.find({
      category: { $regex: new RegExp(regexPattern, "i") },
    }).lean();

    const foodsLowercase = foods.map((food) => ({
      ...food,
      category: food.category.toLowerCase(),
    }));

    res.json(foodsLowercase);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  user,
  home,
  register,
  login,
  updateUserById,
  getUserByEmail,
  getUserById,
  getAllFoods,
  searchFood,
  filterFood,
};

