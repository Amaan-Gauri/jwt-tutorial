const mongoose = require("mongoose");
// Table ka Structure
const UserSchema = new mongoose.Schema({
  uname: String,
  email: String,
  upassword: String,
});

// Creating Table
const User = mongoose.model("UserTabel", UserSchema);

module.exports = User;
