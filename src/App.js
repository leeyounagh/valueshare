/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "component/layout/footer/Footer";
import UserInfo from "pages/userinfo/UserInfo";
import OrderList from "pages/orderlist/OrderList";
// eslint-disable-next-line no-unused-vars
import Header from "component/layout/header/Header";
import NonememberHeader from "component/layout/header/NonmemberHeader";
import Login from "pages/login/Login";
import Main from "pages/main/Main";
import MyOrder from "pages/myorder/MyOrder";
import Register from "pages/register/Register";
import RegisterComplete from "pages/register/RegisterComplete";
import BestSeller from "pages/bestseller/BestSeller";
import Cart from "pages/cart/Cart";
import Detail from "pages/productdeail/Detail";
import Admin from "pages/admin/Admin";
import Resign from "pages/resign/Resign";
import UploadProduct from "pages/uploadproduct/UploadProduct";
import EditProduct from "pages/editproduct/EditProduct";
import LookBook from "pages/lookbook/LookBook";
import Membership from "pages/membership/Membership";
import Product from "pages/products/Product";
import OrderSuccess from "pages/ordersucces/OrderSuccess";
import CancelOrder from "pages/cancleorder/CancelOrder";
import OrderListDetail from "pages/orderlistdetail/OrderListDetail";
import NoneMember from "pages/nonmember/NoneMember";
import { setPageInfo } from "slice/PageSlice";
// eslint-disable-next-line no-unused-vars
import Productest from "pages/products/Productest";
import NotFound from "pages/NotFound";
import EditCategory from "pages/editcategory/EditCategory";
import AddCategory from "pages/addcategory/AddCategory";
import Category from "pages/category/Category";
import BestSellerDetail from "pages/bestseller/BestSellerDetail";
import AdminProduct from "pages/adminproduct/AdminProduct";
import LoginCheck from "pages/logincheck/LoginCheck";
import MyPage from "pages/membermypage/MyPage";
import AdminHeader from "component/layout/header/AdminHeader";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const auth = useSelector(
    (state) => state?.UserInfoReducer?.userInfo?.[0]?.aud
  );

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
  if (pathname === "/memberordercheck") {
    dispatch(setPageInfo({ rootTitle: "My Order", currentTitle: "My Order" }));
  }
  if (pathname === "/myorder/cancel") {
    dispatch(
      setPageInfo({ rootTitle: "My Order", currentTitle: "Cancle Order" })
    );
  }
  if (pathname === "/membermypage") {
    dispatch(setPageInfo({ rootTitle: "Profile", currentTitle: "Profile" }));
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {auth === "false" ? (
        <Header />
      ) : auth === "true" ? (
        <AdminHeader />
      ) : (
        <NonememberHeader />
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register_complete" element={<RegisterComplete />} />

        <Route path="/myorder/:userid" element={<MyOrder />} />
        <Route path="/mypage/resign" element={<Resign />} />
        <Route path="/mypage/userinfo" element={<UserInfo />} />
        <Route path="/ordersuccess" element={<OrderSuccess />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/membermypage" element={<MyPage />} />

        <Route path="/product/:productid" element={<Detail />} />

        <Route path="/product" element={<Product />} />

        <Route path="/bestseller" element={<BestSeller />} />

        <Route path="/lookbook" element={<LookBook />} />

        <Route path="/membership" element={<Membership />} />
        <Route path="/myorder/cancel/:userId" element={<CancelOrder />} />

        <Route path="/nonememberorder" element={<NoneMember />} />
        <Route path="/memberorderchecks" element={<LoginCheck />} />

        {/* 어드민 페이지  */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/orederlist" element={<OrderList />} />
        <Route
          path="/admin/orderlist/:orderlistdetail"
          element={<OrderListDetail />}
        />

        <Route path="/admin/category/addproduct" element={<UploadProduct />} />
        <Route path="/admin/addcategory" element={<AddCategory />} />
        <Route
          exact
          path="/admin/category/editcategory"
          element={<EditCategory />}
        />
        <Route exact path="/admin/category" element={<Category />} />
        <Route exact path="/admin/product" element={<AdminProduct />} />

        <Route path="/admin/product/:productid" element={<EditProduct />} />
        {/* 404  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
