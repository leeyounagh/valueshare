import { configureStore } from "@reduxjs/toolkit";
import pageTitleReducer from "slice/PageSlice";
import DetailReducer from "slice/DetailSlice";
import UserAddressReducer from "slice/UserAddressSlice";
import OrderListReducer from "slice/OrderSlice";
import CartItemReducer from "slice/CartSlice";
import UserInfoReducer from "slice/UserSlice";

export default configureStore({
  reducer: {
    // image대신 productImageReducer라는 이름으로 reducer임을 알수있도록 수정해서 사용하면 좋을 것 같아요.
    pageTitleReducer,
    DetailReducer,
    UserAddressReducer,
    OrderListReducer,
    CartItemReducer,
    UserInfoReducer
  }
});
