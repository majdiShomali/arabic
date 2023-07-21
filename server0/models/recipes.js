const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//1- Create a new schema
const recipeSchema = new Schema(
  {
    recipeName: {
      type: String,
      required: true,
    },
    providerId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    nation: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    names: {
      type: Array,
      required: true,
    },
    flag: {
      type: Boolean,
      required: false,
      default: false,
    },
    links: {
      type: Array,
      required: true,
    },
    Items: {
      type: Array,
      required: true,
    },
    ItemsName: {
      type: Array,
      required: true,
    },

    ItemsId: {
      type: Array,
      required: true,
    },
    rate: {
      type: Array,
      required: false,
    },
    rating: {
      type: String,
      required: false,
      default: "5",
    },
    UsersIdRate: {
      type: Array,
      required: false,
    },
    UsersIdFavorite: {
      type: Array,
      required: false,
    },
    comments: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);


// 2- export the model with the schema
module.exports = mongoose.model("Recipes", recipeSchema);
