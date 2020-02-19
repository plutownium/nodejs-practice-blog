const Post = require("../models/blog");

const getDb = require("../util/database").getDb;

exports.adminDefault = (req, res, next) => {
	Post.fetchAll().then(posts => {
		res.render("admin", {
			pageTitle: "Admin",
			h1: "Welcome to the Admin page!",
			posts: posts
		});
	});
};

exports.postAdminDelete = (req, res, next) => {
	const postId = req.params.postId;
	Post.deleteById(postId)
		.then(res.redirect("/admin"))
		.catch(err => console.log(err));
};

exports.editPost = (req, res, next) => {
	const postId = req.params.postId;
	Post.findById(postId).then(post => {
		res.render("adminEdit", {
			pageTitle: `Edit ${postId.title}`,
			h1: "Edit The Post",
			post: post
		});
	});
};

exports.submitEdit = (req, res, next) => {
	// Useful link: https://docs.mongodb.com/manual/tutorial/update-documents/
	const postId = req.params.postId;
	const updatedTitle = req.body.title;
	const updatedContent = req.body.content;
	Post.editById(postId, updatedTitle, updatedContent)
		.then(res.redirect("/admin"))
		.catch(err => console.log("Error in submitEdit:", err));
};
