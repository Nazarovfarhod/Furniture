import { createSlice } from "@reduxjs/toolkit";
import { storeDate } from "../../Date";

const initialState = {
  products: storeDate,
  amount: 0,
  total: 0,
};

const app = createSlice({
  name: "product",
  initialState,
  reducers: {
    // incrementstore: (state, { payload }) => {
    //   const item = state.products.find((item) => item.name === payload);
    //   item.amount++;
    // },
    // decrementstore: (state, { payload }) => {
    //   const item = state.products.find((item) => item.name === payload);
    //   item.amount--;
    // },
  },
});

export default app.reducer;
