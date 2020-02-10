const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.send("<h3>You are at the Home page.</h3>");
});

module.exports = router;
