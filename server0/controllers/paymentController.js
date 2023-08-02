const Payment = require("../models/payment");

const newPayment =  async (req, res) => {

  const image =req.file.path
  const {  CompanyName,CompanyEmail,userId,ingredientName,ingredientType,IngId,TrueName,cardholder,pricePlan,pricePayed,cvv } = req.body;
   
  const Payment0 = new Payment({ 
    CompanyName:CompanyName
    ,CompanyEmail:CompanyEmail
    ,userId:userId
    ,ingredientName:ingredientName
    ,image:image
    ,ingredientType:ingredientType
    ,IngId:IngId
    ,TrueName:TrueName
    ,cardholder:cardholder
    ,pricePlan:pricePlan
    ,pricePayed:pricePayed
    ,cvv:cvv
  });

  console.log(Payment0)
    const addPayment = await Payment0.save();
    res.json(addPayment);
};

const allPaymentAdminP = (req, res) => { 
  Payment.find({flag:false})
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};
const allPaymentAdminA = (req, res) => { 
  Payment.find({flag:true})
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};
const allPaymentAdmin = (req, res) => { 
  Payment.find()
    .then((data) => {   
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const updatePayment = async (req, res) => {
  const PaymentId  = req.params.id;
  const updatedPaymentData = req.body;
  const payment = await Payment.findByIdAndUpdate(PaymentId, updatedPaymentData, { new: true });
  const updatedPayment= await payment.save();
  res.json(updatedPayment);
};

// const allRecipes = (req, res) => { 
//   Recipes.find()
//     .then((data) => {   
//       res.json(data);
//     })
//     .catch((error) => {
//       errorHandler(error, req, res);
//     });
// };

// const providerRecipes = (req, res) => { 
//   const userId = req.params.id;
  
//   Recipes.find({ providerId: { $in: userId } })
//       .then((data) => {   
//         res.json(data);
//       })
//       .catch((error) => {
//         errorHandler(error, req, res);
//       });
//   };




// const allRecipesA = async  (req, res) => { 
//   Recipes.find({flag:true})
//     .then((data) => {   
//       res.json(data);
//     })
//     .catch((error) => {
//       errorHandler(error, req, res);
//     });
// };
// const allRecipesP = async  (req, res) => { 
//   Recipes.find({flag:false})
//     .then((data) => {   
//       res.json(data);
//     })
//     .catch((error) => {
//       errorHandler(error, req, res);
//     });
// };


// const oneRecipe =  async (req, res) => {
//   const id = req.params.id;
//   const Recipe = await Recipes.find({ _id: id });
//   res.json(Recipe);
// };


// const deleteRecipe = async (req, res) => {
//   const RecipeId = req.params.id;
//    await Recipes.findByIdAndDelete(RecipeId);
//    res.status(204).json(Recipes);
// };



module.exports = {
    newPayment,
    // allPayment
    allPaymentAdmin,
    allPaymentAdminP,
    allPaymentAdminA,
      updatePayment,
//   allRecipesP,
//   deleteRecipe,
//   updateRecipe,
//   oneRecipe,
//   providerRecipes
  }; 