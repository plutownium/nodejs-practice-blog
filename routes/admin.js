const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/", adminController.adminDefault);

router.post("/delete/:postId", adminController.postAdminDelete);

router.get("/edit/:postId", adminController.editPost);

module.exports = router;
