import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchRecipesP = createAsyncThunk(
  "RecipesP/fetchRecipesP",
  async () => {
    const response = await axios.get(`http://localhost:5000/api/recipesP`);
    console.log(response.data)
    return response.data;
  }
);
const fetchRecipesPSlice = createSlice({
  name: "RecipesP",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipesP.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRecipesP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});
export default fetchRecipesPSlice.reducer;


