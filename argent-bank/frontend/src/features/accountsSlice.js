import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAccountsAPI } from "../mocks/services/fetchAccountsAPI";

export const fetchAccounts = createAsyncThunk(
  "accounts/fetchAll",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().user.token;
      return await fetchAccountsAPI(token);
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Error fetching accounts";
      });
  },
});

export default accountsSlice.reducer;
