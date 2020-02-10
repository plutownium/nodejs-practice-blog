const express = require("express");
const router = express.Router();

router.use("/blog-add", (req, res, next) => {
	console.log(req.body);
	res.redirect("/blog");
});

router.get("/blog", (req, res, next) => {
	res.send("<h3>You are at the Blog.</h3>");
	next();
});

module.exports = router;
