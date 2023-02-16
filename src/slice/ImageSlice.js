import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: [],
};

export const ImageSlice = createSlice({
  name: "productImage",
  initialState,
  reducers: {
    productImage: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      // state.image = action.payload;
      return state.image.concat(action.payload);
    },
  },
});

export const { productImage } = ImageSlice.actions;

export default ImageSlice.reducer;
