import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operation";

const INITIAL_STATE = {
  adverts: [],
  filter: "",
  status: "idle",
  error: null,
};

export const advertsSlice = createSlice({
  name: "adverts",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.adverts = action.payload;
        state.status = "fulfilled";
        state.error = null;
      })
      .addCase(fetchAdverts.pending, (state, { payload }) => {
        state.status = "pending";
      })
      .addCase(fetchAdverts.rejected, (state, { payload }) => {
        state.status = "rejected";
        state.error = payload;
      });
  },
});

export const advertReducer = advertsSlice.reducer;
