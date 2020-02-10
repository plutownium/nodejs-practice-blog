const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const blogRoutes = require("./routes/blog");
const homeRoutes = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: false }));

// redirect to an index of blogs
app.use(blogRoutes);

app.use(homeRoutes);

app.listen(3000);
