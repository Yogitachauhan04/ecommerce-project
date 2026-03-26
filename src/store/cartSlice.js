import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart(state, action) {
      state.items = action.payload || [];
    },

    addToCart(state, action) {
      const itemExists = state.items.find(i => i.id === action.payload.id);
      if (itemExists) {
        itemExists.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.qty = quantity;
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
    },
    setCart(state, action) {
  state.items = action.payload;
},

  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  loadCart,
  clearCart,
   setCart
} = cartSlice.actions;

export default cartSlice.reducer;


