import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchFavRecipes = createAsyncThunk(
  "FavRecipes/fetchFavRecipes",
  async (id) => {
    const response = await axios.get(`http://localhost:5000/api/favoriteRecipes/${id}`);
    return response.data;
  }
);
export const updateFavRecipes = createAsyncThunk(
    "FavRecipes/updateFavRecipes",
    async (CardId) => {
      const response = await axios.get(`http://localhost:5000/api/updateRecipeFav/${CardId}`);
      return response.data;
    }
  );
const fetchFavRecipesSlice = createSlice({
  name: "FavRecipes",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFavRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateFavRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateFavRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateFavRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});
export default fetchFavRecipesSlice.reducer;


