const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');


const Schema = mongoose.Schema;

//1- Create a new schema 
const ingredientSchema = new Schema({
     
    ingredientName: {
        type : String,
        required : true
    },
    TrueName: {
        type : String,
        required : true
    },
    img: {
        type : String,
        required : true
    },
    TrueImg: {
        type : String,
        required : true
    },
    ingredientFlag: {
        type : Boolean,
        required : false,
        default : false,
    },
    ingredientType: {
        type : String,
        required : true,
    },
    sold: {
        type : Boolean,
        required : false,
        default : false,
    },
    CompanyName: {
        type : String,
        required : false,
    },
    sponcerId: {
        type: Schema.Types.ObjectId,
        required : false
    },
    duration: {
        type: String,
        required : false
    },
    },
     {timestamps : true}
    )

    // 2- export the model with the schema
    module.exports = mongoose.model('Ingredients',ingredientSchema);