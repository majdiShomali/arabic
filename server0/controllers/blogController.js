const Blog = require("../models/Blog");


const newBlog = async (req, res) => { 

  const {  recipeImage,recipeName,recipeId,userId,userName,userImage,userComment,commentTime,comments } = req.body;
   try {
    

    const blog = new Blog({ 
      recipeImage:recipeImage
      ,recipeName:recipeName
      ,recipeId:recipeId
      ,userId:userId
      ,userName:userName
      ,userImage:userImage
      ,userComment:userComment
      ,commentTime:commentTime
      ,comments:comments
  
    });
  
      const addBlog = await blog.save();
      res.json(addBlog);
   } catch (error) {
    console.log(error);
   }
 
  };



const allBlogs = async (req, res) => {
const blogs = await Blog.find({flag:true})
res.json(blogs);
}
const blogsPending = async (req, res) => {
const blogs = await Blog.find({flag:false})
res.json(blogs);
}
const updateBlog = async (req, res) => {
  const userId  = req.params.id;
    const updatedUserData = req.body;
    const user = await Blog.findByIdAndUpdate(userId,updatedUserData, { new: true });
    const updatedUser = await user.save();
    res.json(updatedUser);
};
module.exports = {
    newBlog,
    allBlogs,
    blogsPending,
    updateBlog
  }; 
  