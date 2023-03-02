import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAddress: [],
};

export const UserAddressSlice = createSlice({
  name: "useraddress",
  initialState,
  reducers: {
    setNoneMemberInfo: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.userAddress = action.payload;
    },
  },
});

export const { setNoneMemberInfo } = UserAddressSlice.actions;

export default UserAddressSlice.reducer;
