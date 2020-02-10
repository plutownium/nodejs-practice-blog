const express = require("express");
const router = express.Router();

const path = require("path");
const rootDir = require("../util/path");

const posts = require("./blog");

router.get("/", (req, res, next) => {
	// res.send("<h3>You are at the Home page.</h3>");
	// res.sendFile(path.join(__dirname, "../", "views", "home.html"));
	// to send a simple html file...
	// res.sendFile(path.join(rootDir, "views", "home.html"));
	res.render("home", {
		pageTitle: "Home Page",
		h1: "The Home Page",
		posts: posts.posts
	});
});

module.exports = router;
