import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Mypage from "./pages/mypage/MyPage";
import Register from "./pages/register/Register";
import Pay from "./pages/pay/Pay";
import Cart from "./pages/cart/Cart";
import Header from "./component/layout/header/Header";
import Footer from "./component/layout/footer/Footer";
import UserInfo from "./pages/mypage/utils/UserInfo";
import Detail from "./pages/category/detail/Detail";
import Admin from "./pages/admin/Admin";
import OrderedList from "./pages/admin/management/OrderedList";
import History from "./pages/mypage/utils/History";
import Resign from "./pages/mypage/utils/Resign";
import DeliveryList from "./pages/admin/management/DeliveryList";
import CanceledList from "./pages/admin/management/CanceledList";
import AddProduct from "./pages/admin/management/category/AddProduct";
import DeleteProduct from "./pages/admin/management/category/DeleteProduct";
import EditProduct from "./pages/admin/management/category/EditProduct";

function App() {
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

        <Route exact path="/pay" element={<Pay />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/:id" element={<Detail />} />

        <Route exact path="/pay" element={<Pay />}></Route>

        {/* 어드민 페이지  */}
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admin/oredered" element={<OrderedList />} />
        <Route exact path="/admin/deliverylist" element={<DeliveryList />} />
        <Route exact path="/admin/canceledlist" element={<CanceledList />} />
        <Route
          exact
          path="/admin/category/addproduct"
          element={<AddProduct />}
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
