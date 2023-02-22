import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "component/layout/footer/Footer";
import UserInfo from "pages/userinfo/UserInfo";
import OrderList from "pages/orderlist/OrderList";
import Header from "component/layout/header/Header";
import History from "pages/history/History";
import Login from "pages/login/Login";
import Main from "pages/main/Main";
import MyOrder from "pages/myorder/MyOrder";
import Register from "pages/register/Register";
import BestSeller from "pages/bestseller/BestSeller";
import Cart from "pages/cart/Cart";
import Detail from "pages/productdeail/Detail";
import Admin from "pages/admin/Admin";
import Resign from "pages/resign/Resign";
import DeliveryList from "pages/deliverylist/DeliveryList";
import CanceledList from "pages/canceledlist/CanceledList";
import UploadProduct from "pages/uploadproduct/UploadProduct";
import DeleteProduct from "pages/deleteproduct/DeleteProduct";
import EditProduct from "pages/editproduct/EditProduct";
import LookBook from "pages/lookbook/LookBook";
import Membership from "pages/membership/Membership";
import Product from "pages/products/Product";
import OrderSuccess from "pages/nonmember/OrderSuccess";
import CancelOrder from "pages/cancleorder/CancelOrder";
import { setPageInfo } from "slice/PageSlice";
import Productest from "pages/products/Productest";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  if (pathname === "/product") {
    dispatch(setPageInfo({ rootTitle: "Category", currentTitle: "Products" }));
  }
  if (pathname === "/cart") {
    dispatch(
      setPageInfo({ rootTitle: "Shopping Bag", currentTitle: "Shopping Bag" })
    );
  }
  if (pathname === "/membership") {
    dispatch(
      setPageInfo({ rootTitle: "Membership", currentTitle: "Membership" })
    );
  }
  if (pathname === "/lookbook") {
    dispatch(setPageInfo({ rootTitle: "LookBook", currentTitle: "LookBook" }));
  }
  if (pathname === "/ordersuccess") {
    dispatch(setPageInfo({ rootTitle: "Order", currentTitle: "Order" }));
  }
  if (pathname === "/myorder") {
    dispatch(setPageInfo({ rootTitle: "Myorder", currentTitle: "Myorder" }));
  }
  if (pathname === "/cancleorder") {
    dispatch(
      setPageInfo({ rootTitle: "Cancle Order", currentTitle: "Cancle Order" })
    );
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route exact path="/myorder" element={<MyOrder />} />
        <Route exact path="/mypage/history" element={<History />} />
        <Route exact path="/mypage/resign" element={<Resign />} />
        <Route exact path="/mypage/userinfo" element={<UserInfo />} />
        <Route exact path="/ordersuccess" element={<OrderSuccess />} />

        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/product/:productid" element={<Detail />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/product/:category" element={<Productest />} />

        <Route exact path="/bestseller" element={<BestSeller />} />

        <Route exact path="/lookbook" element={<LookBook />} />

        <Route exact path="/membership" element={<Membership />} />
        <Route exact path="/cancleorder" element={<CancelOrder />} />

        {/* 어드민 페이지  */}
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admin/orederlist" element={<OrderList />} />
        <Route exact path="/admin/deliverylist" element={<DeliveryList />} />
        <Route exact path="/admin/canceledlist" element={<CanceledList />} />
        <Route
          exact
          path="/admin/category/addproduct"
          element={<UploadProduct />}
        />
        <Route
          exact
          path="/admin/category/deleteproduct"
          element={<DeleteProduct />}
        />
        <Route
          exact
          path="/admin/category/editproduct"
          element={<EditProduct />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
