import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token") || null;
const spotifyToken = localStorage.getItem("spotifytoken") || null;

const initialState = {
  token,
  spotifyToken,
  isLoggedIn: !!token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      state.spotifyToken = action.payload.spotifyToken.access_token;
      localStorage.setItem(
        "spotifytoken",
        action.payload.spotifyToken.access_token
      );
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.token = null;
      state.spotifyToken = null;
      localStorage.clear("token");
      localStorage.clear("spotifytoken");
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
