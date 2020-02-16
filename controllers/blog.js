const Post = require("../models/blog");

const getDb = require("../util/database").getDb;

exports.postAddPost = (req, res, next) => {
	const title = req.body.title;
	const content = req.body.content;

	const post = new Post(title, content);
	post.save();
	Post.fetchAll().then(posts => {
		res.render("blogIndex", {
			pageTitle: "Blog",
			h1: "The Blog Page",
			posts: posts // some data from the MongoDB server needs to go here
		});
	});
};

exports.getIndex = (req, res, next) => {
	Post.fetchAll().then(posts => {
		res.render("blogIndex", {
			pageTitle: "Blog",
			h1: "The Blog Page",
			posts: posts // some data from the MongoDB server needs to go here
		});
	});
};

exports.getSubmit = (req, res, next) => {
	Post.fetchAll().then(posts => {
		res.render("blogSubmit", {
			pageTitle: "Blog",
			h1: "The Blog Page",
			posts: posts // some data from the MongoDB server needs to go here
		});
	});
};

exports.getPost = (req, res, next) => {
	const postId = req.params.postId;
	Post.findById(postId).then(post =>
		res.render("blogPost", {
			pageTitle: post.title,
			h1: post.title,
			content: post.content,
			posts: null
		})
	);
};
