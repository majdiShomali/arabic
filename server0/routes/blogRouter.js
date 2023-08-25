const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.post("/api/blog", blogController.newBlog);
router.get("/api/blogs", blogController.allBlogs);
router.get("/api/blogsPending", blogController.blogsPending);
router.put("/api/updateBlog/:id", blogController.updateBlog);


module.exports = router;