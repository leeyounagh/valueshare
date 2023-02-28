/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setUserInfo } from "slice/UserSlice";
import SetAuthorizationToken from "utils/SetAuthorizationToken";
import { decodeToken } from "react-jwt";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (localStorage.jwtToken) {
  SetAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setUserInfo(decodeToken(localStorage.jwtToken)));
}
// eslint-disable-next-line dot-notation
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
