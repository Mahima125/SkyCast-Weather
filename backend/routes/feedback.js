const express = require("express");
const router = express.Router();

const { postFeedback } = require("../controllers/feedback");

router.route("/").post(postFeedback);

module.exports = router;
