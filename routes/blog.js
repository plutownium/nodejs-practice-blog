const express = require("express");
const router = express.Router();

const path = require("path");
const rootDir = require("../util/path");

const blogController = require("../controllers/blog");

const posts = [];

router.get("/", (req, res, next) => {
	// res.send("<h3>You are at the Posts page.</h3>");
	// res.sendFile(path.join(rootDir, "views", "blog.html"));
	res.render("blog", {
		pageTitle: "Blog",
		h1: "The Blog Page",
		posts: posts
	});
});

router.post("/add-post", (req, res, next) => {
	posts.push({
		title: req.body.title,
		content: req.body.content
	});
	// res.send("<h3>You are at the Index.</h3>");
	// res.sendFile(path.join(__dirname, "../", "views", "blog.html"));
	// to send a simple html file...
	// res.sendFile(path.join(rootDir, "views", "blog.html"));
	res.render("blog", {
		pageTitle: "Blog",
		h1: "The Blog Page",
		posts: posts
	});
	console.log(posts);
});

exports.router = router;
exports.posts = posts;
