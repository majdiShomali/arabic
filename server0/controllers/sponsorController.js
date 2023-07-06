const Sponsor = require("../models/sponsor");


const allSponsorP = (req, res) => { 
  Sponsor.find({flag:false , payment:true})
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};
const allSponsorA = (req, res) => { 
  Sponsor.find({flag:true , payment:true})
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};




const newSponsor =  async (req, res) => {
    const { CompanyName,CompanyEmail,ingredientName,ingredientType,userId,IngId ,TrueName} = req.body;
   const image =req.file.path
    console.log(image);
      const Ingredient = new Sponsor(
        {
         CompanyName: CompanyName,
          CompanyEmail:CompanyEmail,
          ingredientName:ingredientName,
          ingredientType:ingredientType,
          img:image,
          userId:userId,
          IngId:IngId,
          TrueName:TrueName
        }
        );
      const addIngredient = await Ingredient.save();
      res.json(addIngredient);
  };

  const updateSponsor = async (req, res) => {
    const SponsorId  = req.params.id;
    const updatedSponserData = req.body;
    const NewSponsor = await Sponsor.findByIdAndUpdate(SponsorId, updatedSponserData, { new: true });
    const updatedSponsor= await NewSponsor.save();
    console.log(updatedSponsor)
    res.json(updatedSponsor);
  };






//   const oneIngredient =  async (req, res) => {
//     const id = req.params.id;
//     const Recipe = await Recipes.find({ _id: id });
//     res.json(Recipe);
//   };


//   const deleteIngredient = async (req, res) => {
//     const RecipeId = req.params.id;
//      await Recipes.findByIdAndDelete(RecipeId);
//      res.status(204).json(Recipes);
//   };
  


  module.exports = {
    newSponsor,
    updateSponsor,
    allSponsorP,
    allSponsorA,
    }; 