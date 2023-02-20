import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: "",
    productData: "",
    name: "",
    price: "",
    description: "",
    image: "",
  },
};

export const passIdSlice = createSlice({
  name: "passId",
  initialState,
  reducers: {
    passId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { passId } = passIdSlice.actions;

export const selectPassId = (state) => state.passId.value;

export default passIdSlice.reducer;
