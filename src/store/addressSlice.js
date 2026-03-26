
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("addresses")) || [],
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("addresses", JSON.stringify(state.list));
    },
    updateAddress: (state, action) => {
      const { id } = action.payload;
      state.list = state.list.map(addr => (addr.id === id ? action.payload : addr));
      localStorage.setItem("addresses", JSON.stringify(state.list));
    },
    deleteAddress: (state, action) => {
      state.list = state.list.filter(addr => addr.id !== action.payload);
      localStorage.setItem("addresses", JSON.stringify(state.list));
    },
    setDefaultAddress: (state, action) => {
      state.list = state.list.map(addr => ({
        ...addr,
        isDefault: addr.id === action.payload
      }));
      localStorage.setItem("addresses", JSON.stringify(state.list));
    },
  },
});

export const { addAddress, updateAddress, deleteAddress, setDefaultAddress } = addressSlice.actions;
export default addressSlice.reducer;

