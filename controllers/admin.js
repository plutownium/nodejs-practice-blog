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
	// execute code to delete post from blog here...
	console.log("POSTID:", req.params.postId);
	const postId = req.params.postId;
	Post.deleteById(postId).then(
		res.redirect("/admin").catch(err => console.log(err))
	);
};
