const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");
const upload = require("../middleware/handleImage")

router.get("/api/recipes", recipesController.allRecipes);
router.get("/api/providerRecipes/:id", recipesController.providerRecipes);
router.get("/api/recipesP", recipesController.allRecipesP);
router.get("/api/recipesA", recipesController.allRecipesA);
router.post("/api/recipes", upload.single("image"), recipesController.newRecipes);
router.get("/api/recipe/:id", recipesController.oneRecipe);
router.put("/api/recipes/:id", upload.single("image"), recipesController.updateRecipeAdmin);
router.put("/api/recipesP/:id", upload.single("image"), recipesController.updateRecipeProvider);
router.delete("/api/recipes/:id", recipesController.deleteRecipe);


module.exports = router;