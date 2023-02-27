import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pageTitleReducer from "slice/PageSlice";
import DetailReducer from "slice/DetailSlice";
import UserAddressReducer from "slice/UserAddressSlice";
import OrderListReducer from "slice/OrderSlice";
import CartItemReducer from "slice/CartSlice";
import UserInfoReducer from "slice/UserSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  pageTitleReducer,
  DetailReducer,
  UserAddressReducer,
  OrderListReducer,
  CartItemReducer,
  UserInfoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
