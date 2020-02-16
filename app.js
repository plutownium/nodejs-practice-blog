const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const mongoConnect = require("./util/database").mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); // let express know where to find our views

const blogRoutes = require("./routes/blog");
const homeRoutes = require("./routes/home");
const adminRoutes = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

// grant read access to static files
app.use(express.static(path.join(__dirname, "public")));

// redirect to an index of blogs
app.use("/blog", blogRoutes);
app.use(homeRoutes);
app.use("/admin", adminRoutes);

// set a 404 error page
app.use((req, res, next) => {
	// res.status(404).send("<h1>Page Not Found</h1>");
	// to send a simple html file...
	// res.sendFile(path.join(__dirname, "views", "404.html"));
	res.render("404", {
		pageTitle: "404 - Page Not Found",
		h1: null,
		posts: null
	});
});

mongoConnect(() => {
	app.listen(3000);
});

// TODO_: let the admin page edit each individual blog post
// TODO_: create users & allow users to log in
// todo_: make users have blog posts. Meaning, each blog has an associated user in its document
// todo_: Add an "About Me" section along the right side of the blog a la https://www.w3schools.com/howto/howto_css_blog_layout.asp

// TODO: Add "No Blogs Found!" message if posts.length === 0 in blogs Index page
// TODO_: Add Image Upload (Or Multimedia in general -- try video)

// TODO: instead of Post.fetchAll(), maybe do Post.fetchById() so you only retrieve one post from the db (efficiency)
