const path = require("path");

const express = require("express");

const blogController = require("../controllers/blog");

const router = express.Router();

const rootDir = require("../util/path");

router.get("/", blogController.getBlogs);

router.post("/add-post", blogController.postAddPost);

module.exports = router;
