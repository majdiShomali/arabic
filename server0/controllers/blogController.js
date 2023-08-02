const Blog = require("../models/Blog");


const newBlog = async (req, res) => { 

  const {  recipeImage,recipeName,recipeId,userId,userName,userImage,userComment,commentTime } = req.body;
   
  const blog = new Blog({ 
    recipeImage:recipeImage
    ,recipeName:recipeName
    ,recipeId:recipeId
    ,userId:userId
    ,userName:userName
    ,userImage:userImage
    ,userComment:userComment
    ,commentTime:commentTime

  });

  console.log(blog)
    const addBlog = await blog.save();
    res.json(addBlog);
  };



const allBlogs = async (req, res) => {
const blogs = await Blog.find()
res.json(blogs);
}

module.exports = {
    newBlog,
    allBlogs
  }; 