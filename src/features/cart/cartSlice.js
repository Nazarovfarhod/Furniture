import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItem: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0, // 0.1
  orderToatol: 0,
};

const getCartFromLocalStoreg = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStoreg(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItem.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItem.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotols(state);
      toast.success("item added to cart");
    },

    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItem.find((i) => i.cartID === cartID);
      console.log(product);
      state.cartItem = state.cartItem.filter((i) => i.cartID !== cartID);
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotols(state);
      toast.error("Item removed from cart");
    },
    edtiItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItem.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotols(state);
      toast.success("Cart updated");
    },
    calculateTotols: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, edtiItem } = cartSlice.actions;
export default cartSlice.reducer;
