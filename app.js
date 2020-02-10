const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const app = express();

const blogRoutes = require("./routes/blog");
const homeRoutes = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: false }));

// redirect to an index of blogs
app.use("/blog", blogRoutes);
app.use(homeRoutes);

// set a 404 error page
app.use((req, res, next) => {
	// res.status(404).send("<h1>Page Not Found</h1>");
	res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
