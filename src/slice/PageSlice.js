import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rootTitle: "",
  pageTitle: "",
};

export const PageSlice = createSlice({
  name: "pageInfo",
  initialState,
  reducers: {
    PageInfo: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
    },
  },
});

export const { PageInfo } = PageSlice.actions;

export default PageSlice.reducer;
