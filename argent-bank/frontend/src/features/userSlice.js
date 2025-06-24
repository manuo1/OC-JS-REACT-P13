import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  firstName: null,
  lastName: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.token = null;
      state.firstName = null;
      state.lastName = null;
      state.isAuthenticated = false;
    },
    setUserProfile(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { loginSuccess, logout, setUserProfile } = userSlice.actions;
export default userSlice.reducer;
