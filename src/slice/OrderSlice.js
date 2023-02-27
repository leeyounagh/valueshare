import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: []
};

export const OrderSlice = createSlice({
  name: "OrderInfo",
  initialState,
  reducers: {
    setOrderInfo: (state, action) => {
      // eslint-disable-next-line no-param-reassign

      state.orderList.unshift(action.payload);
    }
  }
});

export const { setOrderInfo } = OrderSlice.actions;

export default OrderSlice.reducer;
