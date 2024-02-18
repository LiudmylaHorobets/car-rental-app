import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operation";

const INITIAL_STATE = {
  adverts: [],
  page: 1,
  brand: null,
  isLoading: false,
  error: null,
};

export const advertsSlice = createSlice({
  name: "adverts",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.adverts = state.adverts.concat(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertReducer = advertsSlice.reducer;
