var mongoose = require("mongoose");

// Register
var administratorKeySchema = new mongoose.Schema({
  key: String,
});
var AdministratorKey = mongoose.model(
  "AdministratorKey",
  administratorKeySchema
);

module.exports = AdministratorKey;
