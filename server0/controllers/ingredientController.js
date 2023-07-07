const Ingredients = require("../models/ingredient");

const updateIngredient = async (req, res) => {
  const IngredientId  = req.params.id;
  const updatedIngredientData = req.body;
  console.log(updatedIngredientData,IngredientId)
  const Ingredient = await Ingredients.findByIdAndUpdate(IngredientId, updatedIngredientData, { new: true });
  
  const updatedIngredient= await Ingredient.save();
  res.json(updatedIngredient);
};
const updateIngredientAdmin = async (req, res) => {
  const IngredientId  = req.params.id;
  const image =req.file.path
    const { ingredientName,ingredientType } = req.body;
const updatedIngredientData ={
  ingredientName:ingredientName,
  img:image,
  ingredientType:ingredientType,

}
  const Ingredient = await Ingredients.findByIdAndUpdate(IngredientId, updatedIngredientData, { new: true });
  
  const updatedIngredient= await Ingredient.save();
  res.json(updatedIngredient);
};
const resetIngredientAdmin = async (req, res) => {
  const IngredientId  = req.params.id;
    const { ingredientName,image,sold,duration } = req.body;

const updatedIngredientData ={
  ingredientName:ingredientName,
  img:image,
  sold:false,
  duration:"",
}
console.log(updatedIngredientData)
  const Ingredient = await Ingredients.findByIdAndUpdate(IngredientId, updatedIngredientData, { new: true });
  
  const updatedIngredient= await Ingredient.save();
  res.json(updatedIngredient);
};



const newIngredient =  async (req, res) => {
  const image =req.file.path
    const { ingredientName,ingredientType } = req.body;
      const Ingredient = new Ingredients(
        { 
          ingredientName: ingredientName,
          TrueName:ingredientName,
          img:image,
          TrueImg:image,
          ingredientType:ingredientType
         }
        
        );
      const addIngredient = await Ingredient.save();
      console.log(addIngredient)
      res.json(addIngredient);
  };




  const allIngredients = (req, res) => { 
    Ingredients.find()
      .then((data) => {   
        res.json(data);
      })
      .catch((error) => {
        errorHandler(error, req, res);
      });
  };

  const AllSoldIngredient = (req, res) => { 
    Ingredients.find({sold:true})
      .then((data) => {   
        res.json(data);
      })
      .catch((error) => {
        errorHandler(error, req, res);
      });
  };

  const AllMatchIngredient = (req, res) => { 
    console.log(req.body)
    console.log(JSON.parse(req.query.ItemsId))
const ItemsId = JSON.parse(req.query.ItemsId)
    Ingredients.find({ _id: { $in: ItemsId } })
      .then((data) => {   
        res.json(data);
      })
      .catch((error) => {
        errorHandler(error, req, res);
      });
  };

  const oneIngredient =  async (req, res) => {
    const id = req.params.id;
    const Ingredient = await Ingredients.find({ _id: id });
    res.json(Ingredient);
  };


  const deleteIngredient = async (req, res) => {
    const IngredientId = req.params.id;
     await Ingredients.findByIdAndDelete(IngredientId);
     res.status(204).json(Ingredients);
  };
  


  module.exports = {
    newIngredient,
    allIngredients,
    deleteIngredient,
    updateIngredient,
    oneIngredient,
    AllMatchIngredient,
    updateIngredientAdmin,
    resetIngredientAdmin,
    AllSoldIngredient,
    }; 