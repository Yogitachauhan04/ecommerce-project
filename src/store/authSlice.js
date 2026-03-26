import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: !!savedUser,
    user: savedUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };

      const savedUser = JSON.parse(localStorage.getItem("user"));
      const updatedUser = { ...savedUser, ...action.payload };
      localStorage.setItem("user", JSON.stringify(updatedUser));
    },

    logout: (state) => {
      state.isLogin = false;
      state.user = null;
      localStorage.removeItem("user"); 
    },
  },
});

export const { loginSuccess, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;

