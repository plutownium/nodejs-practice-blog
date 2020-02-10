const express = require("express");
const router = express.Router();

const path = require("path");
const rootDir = require("../util/path");

router.use("/post", (req, res, next) => {
	res.send("<h3>You are at the Posts page.</h3>");
});

router.use("/", (req, res, next) => {
	// res.send("<h3>You are at the Index.</h3>");
	// res.sendFile(path.join(__dirname, "../", "views", "blog.html"));
	res.sendFile(path.join(rootDir, "../", "views", "home.html"));
});

module.exports = router;
