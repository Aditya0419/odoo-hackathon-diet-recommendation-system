const User = require("../models/user");
const Food = require("../models/food");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No users found" });
    }

    return res.status(200).json(users);
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

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted Successfully..." });
  } catch (error) {
    next(error);
  }
};

const foodCreation = async (req, res) => {
  try {
    const {
      foodname,
      image,
      calories,
      category,
      carbs,
      fat,
      protein,
      fiber,
      cholesterol,
      sodium,
      sugar,
      potassium,
      magnesium,
      phosphorus,
      vitaminC,
      vitaminA,
      calcium,
      iron,
      zinc,
      vitaminE,
      vitaminK,
    } = req.body;

    const foodExist = await Food.findOne({ foodname });

    if (foodExist) {
      return res.status(200).json({ message: "Food is already exist" });
    }

    const foodCreated = await Food.create({
      foodname,
      image,
      calories,
      category,
      carbs,
      fat,
      protein,
      fiber,
      cholesterol,
      sodium,
      sugar,
      potassium,
      magnesium,
      phosphorus,
      vitaminC,
      vitaminA,
      calcium,
      iron,
      zinc,
      vitaminE,
      vitaminK,
    });

    res.status(200).json({
      message: "Food Created Successfull",
    });
  } catch (error) {
    console.log(error);
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
    next(error);
  }
};

const getFoodById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Food.find({ _id: id });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateFoodById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateFoodData = req.body;

    const updatedData = await Food.updateOne(
      { _id: id },
      { $set: updateFoodData }
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const deleteFoodById = async (req, res) => {
  try {
    const id = req.params.id;
    await Food.deleteOne({ _id: id });
    return res.status(200).json({ message: "Food deleted Successfully..." });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllFoods,
  getFoodById,
  updateFoodById,
  deleteFoodById,
  foodCreation,
};
