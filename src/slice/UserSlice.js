import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  auth: true,
};

export const UserSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = UserSlice.actions;

export default UserSlice.reducer;
