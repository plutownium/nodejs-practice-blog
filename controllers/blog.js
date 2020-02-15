const Post = require("../models/blog");

const getDb = require("../util/database").getDb;

exports.postAddPost = (req, res, next) => {
	const title = req.body.title;
	const content = req.body.content;

	const post = new Post(title, content);
	post.save();
	Post.fetchAll().then(posts => {
		res.render("blog", {
			pageTitle: "Blog",
			h1: "The Blog Page",
			posts: posts // some data from the MongoDB server needs to go here
		});
	});
};

exports.getBlogs = (req, res, next) => {
	Post.fetchAll().then(posts => {
		res.render("blog", {
			pageTitle: "Blog",
			h1: "The Blog Page",
			posts: posts // some data from the MongoDB server needs to go here
		});
	});
};
