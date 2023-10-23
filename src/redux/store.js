import { configureStore } from "@reduxjs/toolkit";
import campaignSlice from "../features/campaignSlice";
export const store = configureStore({
  reducer: {
    app: campaignSlice
  },
});