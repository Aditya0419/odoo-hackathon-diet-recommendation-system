const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth-middleware");
const adminController = require("../controller/admin-controller");
const adminMiddleware = require("../middleware/admin-middleware.js");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router
  .route("/create-food")
  .post(authMiddleware, adminMiddleware, adminController.foodCreation);

router
  .route("/foods")
  .get(authMiddleware, adminMiddleware, adminController.getAllFoods);

router
  .route("/foods/:id")
  .get(authMiddleware, adminMiddleware, adminController.getFoodById);

router
  .route("/foods/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateFoodById);

router
  .route("/foods/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteFoodById);

module.exports = router;
