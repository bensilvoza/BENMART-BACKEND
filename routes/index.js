var express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var router = express.Router();
var Register = require("../models/register");

// =====
// login
// =====
router.get("/login", async function (req, res) {
  res.json("");
});

router.post("/login", async function (req, res) {
  var user = await Register.findOne({ email: req.body.email });

  var compare = bcrypt.compareSync(req.body.password, user["password"]);
  res.json(compare);
});

// ========
// register
// ========
router.get("/register", async function (req, res) {
  var data = await Register.find({});
  res.json(data);
});

router.post("/register", async function (req, res) {
  const hash = bcrypt.hashSync(req.body.password, saltRounds);
  req.body.password = hash;

  var data = new Register(req.body);

  await data.save();
  res.json("OK");
});

router.get("/register/checkemail/:email", async function (req, res) {
  var user = await Register.findOne({ email: req.params.email });
  res.json(user);
});

// exports
module.exports = router;
