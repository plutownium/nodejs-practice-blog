const express = require("express");
const router = express.Router();

const path = require("path");

router.get("/", (req, res, next) => {
	// res.send("<h3>You are at the Home page.</h3>");
	res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = router;
