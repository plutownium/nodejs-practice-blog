const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const mongoConnect = require("./util/database").mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); // let express know where to find our views

const blogRoutes = require("./routes/blog");
const homeRoutes = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: false }));

// grant read access to static files
app.use(express.static(path.join(__dirname, "public")));

// redirect to an index of blogs
app.use("/blog", blogRoutes);
app.use(homeRoutes);

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

// TODO: Dynamically generate a link to each blog post's page
