import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserAPI, getUserProfileAPI } from "../services/authService.js";

export const loginUser = createAsyncThunk("user/login", async (credentials) => {
  const token = await loginUserAPI(credentials);
  return token;
});

export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { getState }) => {
    const token = getState().user.token;
    const profile = await getUserProfileAPI(token);
    return profile;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    firstName: "",
    lastName: "",
    status: "idle",
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.firstName = "";
      state.lastName = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
