import { createSlice } from "@reduxjs/toolkit";

const userData = JSON.parse(localStorage.getItem("userdata")) || null;
const token = localStorage.getItem("token") || null;
const spotifyToken = localStorage.getItem("spotifytoken") || null;

const initialState = {
  token,
  spotifyToken,
  isLoggedIn: !!token,
  userData,
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
      state.userData = null;
      localStorage.removeItem("token");
      localStorage.removeItem("spotifytoken");
      localStorage.removeItem("userdata");
      state.isLoggedIn = false;
    },
    setUserProfile: (state, action) => {
      state.userData = action.payload.profileData;
      localStorage.setItem(
        "userdata",
        JSON.stringify(action.payload.profileData)
      );
    },
  },
});

export const { login, logout, setUserProfile } = authSlice.actions;

export default authSlice.reducer;
