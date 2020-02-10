const express = require("express");
const router = express.Router();

const path = require("path");

router.use("/post", (req, res, next) => {
	res.send("<h3>You are at the Posts page.</h3>");
});

router.use("/", (req, res, next) => {
	// res.send("<h3>You are at the Index.</h3>");
	res.sendFile(path.join(__dirname, "../", "views", "blog.html"));
});

module.exports = router;
