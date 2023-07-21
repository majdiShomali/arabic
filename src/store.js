import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import userNewReducer from './actions/UserActions'
import fetchRecipesReducer from './actions/GetRecipes'
import fetchFavRecipesReducer from './actions/GetFavRecipes'
const store = configureStore({
  reducer: {
    userNew:userNewReducer,
    fetchRecipes:fetchRecipesReducer,
    fetchFavRecipes:fetchFavRecipesReducer,
  },
  middleware: [thunkMiddleware],
});
export default store;
