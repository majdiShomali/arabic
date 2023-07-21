import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchRecipes = createAsyncThunk(
  "Recipes/fetchRecipes",
  async () => {
    const response = await axios.get(`http://localhost:5000/api/recipesA`);
    return response.data;
  }
);
const fetchRecipesSlice = createSlice({
  name: "Recipes",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});
export default fetchRecipesSlice.reducer;


