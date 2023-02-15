import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rootTitle: "",
  currentTitle: "",
};

export const PageSlice = createSlice({
  name: "pageInfo",
  initialState,
  reducers: {
    setPageInfo: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.rootTitle = action.payload.rootTitle;
      // eslint-disable-next-line no-param-reassign
      state.currentTitle = action.payload.currentTitle;
      /**
       * 또는
       * state.pageTitle = action.payload;
       */
    },
  },
});

export const { setPageInfo } = PageSlice.actions;

export default PageSlice.reducer;
