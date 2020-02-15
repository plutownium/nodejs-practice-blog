const Post = require("../models/blog");

const getDb = require("../util/database").getDb;

exports.getHomePage = (req, res, next) => {
	Post.fetchAll().then(posts => {
		res.render("home", {
			pageTitle: "Home Page",
			h1: "The Home Page",
			posts: posts
		});
	});
};
