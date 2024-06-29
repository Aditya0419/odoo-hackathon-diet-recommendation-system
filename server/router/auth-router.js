const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");
const validate = require("../middleware/validate-middleware");
const { signUpSchema, signInSchema } = require("../validator/auth-validator");
const authMiddleware = require("../middleware/auth-middleware");

router.route("/").get(authController.home);

router.route("/register").post( authController.register);

router.route("/login").post( authController.login);

router.route("/user/update/:id").patch(authController.updateUserById);

router.route("/get-user-info").get(authController.getUserByEmail);

router.route("/all-foods").get(authController.getAllFoods);

router.route("/search-food").get(authController.searchFood);

router.route("/filter-food").get(authController.filterFood);
router.route("/user").get(authMiddleware, authController.user);


module.exports = router;
