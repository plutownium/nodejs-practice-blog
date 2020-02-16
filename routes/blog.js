const path = require("path");

const express = require("express");

const blogController = require("../controllers/blog");

const router = express.Router();

const rootDir = require("../util/path");

router.get("/", blogController.getIndex);

router.post("/add-post", blogController.postAddPost);

router.get("/submit", blogController.getSubmit);

router.get("/posts/:postId", blogController.getPost);

module.exports = router;
