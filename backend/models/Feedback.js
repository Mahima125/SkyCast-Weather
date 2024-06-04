const mongoose = require("mongoose");

var feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
var Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
