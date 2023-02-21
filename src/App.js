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
import OrderSuccess from "pages/ordersucces/OrderSuccess";
import CancelOrder from "pages/cancleorder/CancelOrder";
import OrderListDetail from "pages/orderlistdetail/OrderListDetail";
import { setPageInfo } from "slice/PageSlice";

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
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/myorder" element={<MyOrder />} />
        <Route path="/mypage/history" element={<History />} />
        <Route path="/mypage/resign" element={<Resign />} />
        <Route path="/mypage/userinfo" element={<UserInfo />} />
        <Route path="/ordersuccess" element={<OrderSuccess />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/product/:productid" element={<Detail />} />
        <Route path="/product" element={<Product />} />

        <Route path="/bestseller" element={<BestSeller />} />

        <Route path="/lookbook" element={<LookBook />} />

        <Route path="/membership" element={<Membership />} />
        <Route path="/cancleorder" element={<CancelOrder />} />

        {/* 어드민 페이지  */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/orederlist" element={<OrderList />} />
        <Route
          path="/admin/orderlist/:orderlistdetail"
          element={<OrderListDetail />}
        />
        <Route path="/admin/deliverylist" element={<DeliveryList />} />
        <Route path="/admin/canceledlist" element={<CanceledList />} />
        <Route path="/admin/category/addproduct" element={<UploadProduct />} />
        <Route
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
