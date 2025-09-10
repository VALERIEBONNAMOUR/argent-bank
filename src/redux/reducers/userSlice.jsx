import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || null,
  error: null,
  profile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.error = null;
      
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
      state.userInfo = null;
      localStorage.removeItem("user");
    },
    logout: (state) => {
      state.userInfo = null;
      state.error = null;
      state.profile = null;
      localStorage.removeItem("user");
    },

    userProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateUsername: (state, action) => {    
        state.userInfo.userName = action.payload;
    },
  },
});

export const { login, loginFailed, logout, userProfile, updateUsername } =
  userSlice.actions;

export default userSlice.reducer;

