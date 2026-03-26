import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    loadWishlist(state, action) {
      state.items = action.payload || [];
    },

    addToWishlist(state, action) {
      const exists = state.items.find(i => i.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeFromWishlist(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    clearWishlist(state) {
      state.items = [];
    },
    setWishlist(state, action) {
  state.items = action.payload;
}

  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  loadWishlist,
  clearWishlist,
  setWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;


