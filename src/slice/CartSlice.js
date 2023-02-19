import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const CartSlice = createSlice({
  name: "pageInfo",
  initialState,
  reducers: {
    setCartItem: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      // eslint-disable-next-line no-param-reassign
      state.concat(action.payload);
    },
  },
});

export const { setCartItem } = CartSlice.actions;

export default CartSlice.reducer;
