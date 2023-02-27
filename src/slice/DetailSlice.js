import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: ""
};

export const DetailSlice = createSlice({
  name: "passId",
  initialState,
  reducers: {
    passId: (state, action) => {
      state.id = action.payload;
    }
  }
});

export const { passId } = DetailSlice.actions;

// export const selectPassId = (state) => state.passId.value;

export default DetailSlice.reducer;
