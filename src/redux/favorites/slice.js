import { createSlice } from "@reduxjs/toolkit";

const FAVORITES_INITIAL_STATE = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: FAVORITES_INITIAL_STATE,
  reducers: {
    addAdvert(state, action) {
      state.favorites.push(action.payload);
    },
    deleteAdvert(state, action) {
      state.favorites = state.favorites.filter(
        (advert) => advert.id !== action.payload
      );
    },
  },
});

export const { addAdvert, deleteAdvert } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
