import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProviderRecipes = createAsyncThunk(
  "ProviderRecipes/fetchProviderRecipes",
  async (id) => {
    const response = await axios.get(`http://localhost:5000/api/providerRecipes/${id}`);
    return response.data;
  }
);
const fetchProviderRecipesSlice = createSlice({
  name: "ProviderRecipes",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProviderRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProviderRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProviderRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});
export default fetchProviderRecipesSlice.reducer;


