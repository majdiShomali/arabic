const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//1- Create a new schema 
const sponsorSchema = new Schema({
     
    CompanyName: {
        type : String,
        required : true
    },
    CompanyEmail: {
        type : String,
        required : true
    },
    ingredientName: {
        type : String,
        required : true
    },
    ingredientType: {
        type : String,
        required : true
    },
    img:{
        type : String,
        required : true
    },
    TrueName:{
        type : String,
        required : true
    },
    userId:{
        type: Schema.Types.ObjectId,
        required : true
    },
    flag:{
        type: Boolean,
        required : false,
        default: false,
    },
    payment:{
        type: Boolean,
        required : false,
        default: false,
    },
    IngId:{
        type: Schema.Types.ObjectId,
        required : true,

    },
    },
     {timestamps : true}
    )

    // 2- export the model with the schema
    module.exports = mongoose.model('Sponsor',sponsorSchema);