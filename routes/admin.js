const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/", adminController.placeholder);

module.exports = router;
