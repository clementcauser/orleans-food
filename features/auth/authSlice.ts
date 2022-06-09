import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    login: (state) => state,
    logout: (state) => state,
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
