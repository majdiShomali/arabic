import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import userNewReducer from './actions/UserActions'
import fetchRecipesReducer from './actions/GetRecipes'
import fetchRecipesPReducer from './actions/PendingRecipes'
import fetchFavRecipesReducer from './actions/GetFavRecipes'
import addRecipesReducer from './actions/AddRecipe'
const store = configureStore({
  reducer: {
    userNew:userNewReducer,
    fetchRecipes:fetchRecipesReducer,
    fetchRecipesP:fetchRecipesPReducer,
    fetchFavRecipes:fetchFavRecipesReducer,
    addedRecipe:addRecipesReducer,
  },
  middleware: [thunkMiddleware],
});
export default store;
