const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// make a header
app.use("/", (req, res, next) => {
	res.send(`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
    <body>
        <div id="welcome">
            <h1>Welcome to Roland's Blog</h1>
            <a href="/">Home Page</a>
            <a href="/blog">Blog</a>
        </div>`);
	next();
});

// redirect to an index of blogs
app.use("/blog", (req, res, next) => {
	res.send("<h3>You are at the Blog.</h3>");
	next();
});

app.use("/", (req, res, next) => {
	res.send("<h3>You are at the Home page.</h3>");

	next();
});

// close the page
app.use("/", (req, res, next) => {
	res.send(`</body>
    </html>`);
});

app.listen(3000);
