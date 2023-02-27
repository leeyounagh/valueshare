import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: 0
};

export const CartSlice = createSlice({
  name: "cartInfo",
  initialState,
  reducers: {
    setCartItem: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      // eslint-disable-next-line no-param-reassign
      state.cartItem += action.payload.length;
    }
  }
});

export const { setCartItem } = CartSlice.actions;

export default CartSlice.reducer;
