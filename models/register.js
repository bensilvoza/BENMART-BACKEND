var mongoose = require("mongoose");

// Register
var registerSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  phoneNumber: Number,
  email: String,
  password: String,
});
var Register = mongoose.model("Register", registerSchema);

module.exports = Register;
