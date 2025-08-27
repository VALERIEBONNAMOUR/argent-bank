import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || null,
  token: null,
  error: null,
  profile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
      state.userInfo = null;
      state.token = null;
      localStorage.removeItem("user");
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      state.error = null;
      state.profile = null;
      localStorage.removeItem("user");
    },

    userProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateUsername: (state, action) => {
      if (state.profile) {
        state.profile.userName = action.payload;
      }
    },
  },
});

export const { login, loginFailed, logout, userProfile, updateUsername } =
  userSlice.actions;

export default userSlice.reducer;

