const express = require("express");
const router = express.Router();

const path = require("path");
const rootDir = require("../util/path");

const homeController = require("../controllers/home");

router.get("/", homeController.getHomePage);

module.exports = router;
