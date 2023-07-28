import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addRecipes = createAsyncThunk(
  "addRecipe/addRecipes",
  async (formData0) => {
    const response = await axios.post("http://localhost:5000/api/recipes",formData0);
     return response.data;
  }
);
const addRecipesSlice = createSlice({
  name: "addRecipe",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); 

      })
      .addCase(addRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});
export default addRecipesSlice.reducer;


