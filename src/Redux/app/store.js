import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "../Features/app";

export const store = configureStore({
  reducer: {
    product: storeReducer,
  },
});
