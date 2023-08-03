const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//1- Create a new schema 
const userSchema = new Schema({
     
    firstName: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    phone:{
        type : String,
        required : false
    },
    password:{
        type : String,
        required : true
    },
    img:{
        type : String,
        required : false
    },
    role:{
        type : Number,
        required : true
    },
    MyList:{
        type : Array,
        required : false
    },
    MyListn:{
        type : Array,
        required : false
    },
    AllIngredientsId:{
        type : Array,
        required : false
    },
    MyListId:{
        type : Array,
        required : false
    },
    message:{
        type : Array,
        required : false
    },
    messageRead:{
        type : Boolean,
        required : false,
        default : false
    },
    resetPin:{
        type : Number,
        required : false,
    },
    },
     {timestamps : true}
    )

    // 2- export the model with the schema
    module.exports = mongoose.model('User',userSchema);




    