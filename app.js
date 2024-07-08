const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const signUpRouter = require("./routes/signupRoute");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/sign-up", signUpRouter);

// DATA BASE RELATED CODE
// SERVER RELATED CODE

module.exports = app;
