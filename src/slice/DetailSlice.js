import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
};

export const passIdSlice = createSlice({
  name: "passId",
  initialState,
  reducers: {
    passId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { passId } = passIdSlice.actions;

// export const selectPassId = (state) => state.passId.value;

export default passIdSlice.reducer;
