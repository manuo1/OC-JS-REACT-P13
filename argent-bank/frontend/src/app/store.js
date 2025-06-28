import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import accountsReducer from "../features/accountsSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    accounts: accountsReducer,
  },
});
