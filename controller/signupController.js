const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
exports.signUp = async (request, response) => {
  const userData = request.body;
  try {
    const newUser = await User.create(userData);
    const jwtKey = "yeh meri super serect key hai";
    const jwtData = {
      uname: userData.uname,
      email: userData.email,
      upassword: userData.upassword,
    };
    // creating Jwt token
    const token = jwt.sign(jwtData, jwtKey);
    response.cookie("jwtToken", token).json({ status: "success", userData });
    console.log(newUser);
  } catch (err) {
    console.log("Bhai Data Save Nahi hua aur uski wajah hai " + err);
    response.json({ status: "fail", message: err });
  }
};
