const express = require("express");
const signupRouter = express.Router();
const signUpController = require("../controller/signupController");

signupRouter.post("/", signUpController.signUp);

module.exports = signupRouter;
