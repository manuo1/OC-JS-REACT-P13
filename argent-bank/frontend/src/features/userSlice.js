import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUserAPI,
  getUserProfileAPI,
  updateUserProfileAPI,
} from "../services/authService.js";
// Try to retrieve the saved authentication token from localStorage
// to maintain user session persistence
const persistedToken = localStorage.getItem("token");

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

export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ firstName, lastName }, { getState }) => {
    const token = getState().user.token;
    const updatedProfile = await updateUserProfileAPI(token, {
      firstName,
      lastName,
    });
    return updatedProfile;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: persistedToken || null,
    firstName: "",
    lastName: "",
    status: "idle",
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.firstName = "";
      state.lastName = "";
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        localStorage.setItem("token", action.payload);
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
