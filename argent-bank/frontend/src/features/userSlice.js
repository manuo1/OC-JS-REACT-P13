import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUserAPI,
  getUserProfileAPI,
  updateUserProfileAPI,
} from "../services/authService.js";
const persistedToken =
  localStorage.getItem("token") || sessionStorage.getItem("token");

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const token = await loginUserAPI({ email, password });
      return { token, rememberMe };
    } catch (err) {
      if (err.response) {
        // Add AxiosResponse object to error
        return rejectWithValue({
          status: err.response.status,
          data: err.response.data,
        });
      } else {
        // Add message
        return rejectWithValue({
          status: null,
          data: { message: err.message },
        });
      }
    }
  }
);

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
      sessionStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        sessionStorage.setItem("token", action.payload.token);
        if (action.payload.rememberMe) {
          localStorage.setItem("token", action.payload.token);
        }
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
