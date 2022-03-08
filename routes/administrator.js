var express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var router = express.Router();
var AdministratorKey = require("../models/administratorKey");

// =============
// administrator
// =============
router.get("/administratorKey", async function (req, res) {
  var getKey = await AdministratorKey.find({});
  res.json(getKey);
});

router.post("/administratorKey", async function (req, res) {
  var user = await Register.findOne({ email: req.body.email });

  var compare = bcrypt.compareSync(req.body.password, user["password"]);
  res.json(compare);
});

// exports
module.exports = router;
