const Recipes = require("../models/recipes");

const newRecipes =  async (req, res) => {

  const { recipeName,providerId,category,names,links,Items,ItemsName ,ItemsId,nation} = req.body;
    const image = req.file.path
   const Recipes0 = new Recipes({ recipeName: recipeName,nation:nation,providerId:providerId,category:category,names:JSON.parse(names),links:JSON.parse(links),Items:JSON.parse(Items),ItemsName:JSON.parse(ItemsName),img:image ,ItemsId:JSON.parse(ItemsId)});
    const addRecipes = await Recipes0.save();
    res.json(addRecipes);
};



const providerRecipes = (req, res) => { 
  const userId = req.params.id;
  
  Recipes.find({ providerId: { $in: userId } })
      .then((data) => {   
        res.json(data);
      })
      .catch((error) => {
        errorHandler(error, req, res);
      });
  };


const allRecipes = (req, res) => { 
  Recipes.find()
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const allRecipesA = async  (req, res) => { 
  Recipes.find({flag:true})
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};
const allRecipesP = async  (req, res) => { 
  Recipes.find({flag:false})
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};


const oneRecipe =  async (req, res) => {
  const id = req.params.id;
  const Recipe = await Recipes.find({ _id: id });
  res.json(Recipe);
};


const deleteRecipe = async (req, res) => {
  const RecipeId = req.params.id;
   await Recipes.findByIdAndDelete(RecipeId);
   res.status(204).json(Recipes);
};

const updateRecipeAdmin = async (req, res) => {
  const RecipeId  = req.params.id;
  const updatedRecipeData = req.body;

  const Recipe = await Recipes.findByIdAndUpdate(RecipeId, updatedRecipeData, { new: true });
  const updatedRecipe= await Recipe.save();
  res.json(updatedRecipe);
};
const updateRecipeProvider = async (req, res) => {


  const { recipeName,providerId,category,names,links,Items,ItemsName ,ItemsId} = req.body;
  const image = req.file.path
  const RecipeId  = req.params.id;
   const updatedRecipeData = {
     recipeName: recipeName,
     providerId:providerId,
     category:category,
     names:JSON.parse(names),
     links:JSON.parse(links),
     Items:JSON.parse(Items),
     ItemsName:JSON.parse(ItemsName),
     img:image ,
     ItemsId:JSON.parse(ItemsId),
    flag:false
    };
    

  const Recipe = await Recipes.findByIdAndUpdate(RecipeId, updatedRecipeData, { new: true });
  const updatedRecipe= await Recipe.save();
  res.json(updatedRecipe);
};

module.exports = {
  newRecipes,
  allRecipes,
  allRecipesA,
  allRecipesP,
  deleteRecipe,
  updateRecipeAdmin,
  updateRecipeProvider,
  oneRecipe,
  providerRecipes
  }; 