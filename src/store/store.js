/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import pageTitleReducer from "slice/PageSlice";
import DetailReducer from "slice/DetailSlice";
import UserAddressReducer from "slice/UserAddressSlice";
import OrderListReducer from "slice/OrderSlice";
import CartItemReducer from "slice/CartSlice";
import UserInfoReducer from "slice/UserSlice";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// config 작성
const persistConfig = {
  key: "root", // localStorage key
  storage, // localStorage
  blacklist: ["UserInfoReducer", UserAddressReducer],
};

export const rootReducer = combineReducers({
  // image대신 productImageReducer라는 이름으로 reducer임을 알수있도록 수정해서 사용하면 좋을 것 같아요.
  pageTitleReducer,
  DetailReducer,
  UserAddressReducer,
  OrderListReducer,
  CartItemReducer,
  UserInfoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

export default store;
