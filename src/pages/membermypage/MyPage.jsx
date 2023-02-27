/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AxiosInstance from "data/AxiosInstance";
import { useSelector } from "react-redux";
import Navbar from "component/Navbar";
import styled from "styled-components";
import MyAccount from "component/membermypage/MyAccount";
import AddressList from "component/membermypage/AddressList";
import ShoppingBag from "component/membermypage/ShoppingBag";
import Help from "component/membermypage/Help";
import MemberMyOrder from "component/membermypage/MemberMyOrder";
import { checkAuth } from "utils/checkAuth";

const SLayout = styled.div`
  width: 100%;
  display: flex;
`;

const SUserInfoDiv = styled.div`
  width: 25%;
  height: 100%;
  padding-left: 55px;
  padding-top: 80px;
`;
const SUserShoppingbagDiv = styled.div`
  width: 50%;
  padding-left: 55px;
  padding-top: 80px;
`;

const SUserOrderDiv = styled.div`
  width: 25%;
  padding-top: 80px;
`;

function MyPage() {
  const [userInfo, setUserInfo] = useState([]);
  const [userProduct, setUserProduct] = useState([]);
  const userId = useSelector((item) => {
    return item?.UserInfoReducer?.userInfo?.[0]?.user;
  });
  useEffect(() => {
    async function handleUserInfo() {
      try {
        const response = await AxiosInstance.get(`/users/mypage/${userId}`);
        const data = await response.data;
        setUserInfo([data[0]]);
        setUserProduct(data[1]);
      } catch (err) {
        console.log(err);
      }
    }
    handleUserInfo();
  }, []);
  console.log(userInfo, userProduct);
  return (
    <div>
      <Navbar />
      <SLayout>
        <SUserInfoDiv>
          <MyAccount userInfo={userInfo} />
          <AddressList userInfo={userInfo} />
        </SUserInfoDiv>
        <SUserShoppingbagDiv>
          <ShoppingBag />
        </SUserShoppingbagDiv>
        <SUserOrderDiv>
          <MemberMyOrder userProduct={userProduct} userInfo={userInfo} />
          <Help />
        </SUserOrderDiv>
      </SLayout>
    </div>
  );
}

export default checkAuth(MyPage);
