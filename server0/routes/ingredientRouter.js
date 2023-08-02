const express = require("express");
const router = express.Router();
const ingredientsController = require("../controllers/ingredientController");
const upload = require("../middleware/handleImage")

router.get("/api/Ingredients", ingredientsController.allIngredients);
router.get("/api/IngredientMatch/", ingredientsController.AllMatchIngredient);
router.get("/api/IngredientSold/", ingredientsController.AllSoldIngredient);
router.post("/api/Ingredient",upload.single("image"), ingredientsController.newIngredient);
router.post("/api/ReqIngredient",upload.single("image"), ingredientsController.ReqnewIngredient);
router.get("/api/Ingredient/:id", ingredientsController.oneIngredient);
router.put("/api/Ingredient/:id",upload.single("image"), ingredientsController.updateIngredient);
router.put("/api/IngredientAdmin/:id",upload.single("image"), ingredientsController.updateIngredientAdmin);
router.put("/api/IngredientAdminReset/:id", ingredientsController.resetIngredientAdmin);
router.delete("/api/Ingredient/:id", ingredientsController.deleteIngredient);


module.exports = router;
