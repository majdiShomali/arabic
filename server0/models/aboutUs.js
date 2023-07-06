const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//1- Create a new schema 
const aboutUsSchema = new Schema({
     
    title: {
        type : String,
        required : true
    },
    text: {
        type : String,
        required : true
    },
    },
     {timestamps : true}
    )

    // 2- export the model with the schema
    module.exports = mongoose.model('AboutUs',aboutUsSchema);