/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AxiosInstance from "data/AxiosInstance";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "component/Navbar";
import styled from "styled-components";
import MyAccount from "component/membermypage/MyAccount";
import AddressList from "component/membermypage/AddressList";
import ShoppingBag from "component/membermypage/ShoppingBag";
import Help from "component/membermypage/Help";
import MemberMyOrder from "component/membermypage/MemberMyOrder";
import { checkAuth } from "utils/checkAuth";
import Btn1 from "component/button/Btn1";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "slice/UserSlice";

const SLayout = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 100px;
`;

const SUserInfoDiv = styled.div`
  width: 25%;
  height: 100%;
  padding-left: 55px;
  padding-top: 80px;
`;
const SUserShoppingbagDiv = styled.div`
  width: 50%;
  padding: 80px 2% 0 2%;
`;

const SUserOrderDiv = styled.div`
  width: 25%;
  padding-top: 80px;
`;
const SBtnInnderDiv = styled.div`
  width: 30%;
`;
const SBtnDiv = styled.div`
  width: 90%;

  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

function MyPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [myUserInfo, setMyUserInfo] = useState([]);
  const [userProduct, setUserProduct] = useState([]);
  const userId = useSelector((item) => {
    return item?.UserInfoReducer?.userInfo?.[0]?.user;
  });
  useEffect(() => {
    async function handleUserInfo() {
      try {
        const response = await AxiosInstance.get(`/users/mypage/${userId}`);
        const data = await response.data;
        setMyUserInfo([data[0]]);
        console.log(data);
        setUserProduct(data[1]);
      } catch (err) {
        console.log(err);
      }
    }
    handleUserInfo();
  }, []);

  const handleDeleteUser = async () => {
    try {
      const response = await AxiosInstance.delete(`users/mypage/${userId}`);
      if (response.status === 200) {
        localStorage.removeItem("jwtToken");
        dispatch(setUserInfo(""));
        navigate("/");
      }
    } catch (err) {
      alert("탈퇴에 실패했습니다.");
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <SLayout>
        <SUserInfoDiv>
          <MyAccount userInfo={myUserInfo} />
          <AddressList userInfo={myUserInfo} />
        </SUserInfoDiv>
        <SUserShoppingbagDiv>
          <ShoppingBag />
        </SUserShoppingbagDiv>
        <SUserOrderDiv>
          <MemberMyOrder userProduct={userProduct} userInfo={myUserInfo} />
          <Help />
          <SBtnDiv>
            <SBtnInnderDiv
              onClick={() => {
                handleDeleteUser();
              }}
            >
              <Btn1 title="탈퇴하기" />
            </SBtnInnderDiv>
          </SBtnDiv>
        </SUserOrderDiv>
      </SLayout>
    </div>
  );
}

export default checkAuth(MyPage);
