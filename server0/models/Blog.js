const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//1- Create a new schema 
const blogSchema = new Schema({
     
    recipeImage: {
        type : String,
        required : true
    },
    recipeName: {
        type : String,
        required : true
    },
    recipeId:{
        type: Schema.Types.ObjectId,
        required : true
    },
    userId:{
        type: Schema.Types.ObjectId,
        required : true
    },
    userName: {
        type : String,
        required : true
    },
    userImage: {
        type : String,
        required : true
    },
    userComment: {
        type : String,
        required : true
    },
    commentTime: {
        type : String,
        required : true
    },
    flag:{
        type: Boolean,
        required : false,
        default: false,
    },
    },
     {timestamps : true}
    )

    module.exports = mongoose.model('Blog',blogSchema);
