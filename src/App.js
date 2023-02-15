import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Mypage from "./pages/mypage/MyPage";
import Register from "./pages/register/Register";
import BestSeller from "./pages/bestseller/BestSeller";
import Cart from "./pages/cart/Cart";
import Header from "./component/layout/header/Header";
import Footer from "./component/layout/footer/Footer";
import UserInfo from "./pages/mypage/utils/UserInfo";
import Detail from "./pages/products/detail/Detail";
import Admin from "./pages/admin/Admin";
import OrderedList from "./pages/admin/management/OrderedList";
import History from "./pages/mypage/utils/History";
import Resign from "./pages/mypage/utils/Resign";
import DeliveryList from "./pages/admin/management/DeliveryList";
import CanceledList from "./pages/admin/management/CanceledList";
import UploadProduct from "./pages/admin/management/category/UploadProduct";
import DeleteProduct from "./pages/admin/management/category/DeleteProduct";
import EditProduct from "./pages/admin/management/category/EditProduct";
import LookBook from "./pages/lookbook/LookBook";
import Membership from "./pages/membership/Membership";
import Product from "./pages/products/Product";
import { PageInfo } from "./slice/PageSlice";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  if (pathname === "/product") {
    dispatch(PageInfo({ rootTitle: "Category", PageTitle: "Products" }));
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route exact path="/mypage" element={<Mypage />} />
        <Route exact path="/mypage/history" element={<History />} />
        <Route exact path="/mypage/resign" element={<Resign />} />
        <Route exact path="/mypage/userinfo" element={<UserInfo />} />

        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/:id" element={<Detail />} />
        <Route exact path="/product" element={<Product />} />

        <Route exact path="/bestseller" element={<BestSeller />} />

        <Route exact path="/lookbook" element={<LookBook />} />

        <Route exact path="/membership" element={<Membership />} />

        {/* 어드민 페이지  */}
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admin/oredered" element={<OrderedList />} />
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
