import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerName: "",
  phoneNumber: "",
  address: "",
  memo: "",
  email: "",
};

export const UserAddressSlice = createSlice({
  name: "useraddress",
  initialState,
  reducers: {
    setNoneMemberInfo: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.customerName = action.payload.customerName;
      state.phoneNumber = action.payload.phoneNumber;
      state.address = action.payload.address;
      state.memo = action.payload.memo;
      state.email = action.payload.email;
    },
  },
});

export const { setNoneMemberInfo } = UserAddressSlice.actions;

export default UserAddressSlice.reducer;
