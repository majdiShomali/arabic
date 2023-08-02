const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.post("/api/blog", blogController.newBlog);
router.get("/api/blogs", blogController.allBlogs);


module.exports = router;