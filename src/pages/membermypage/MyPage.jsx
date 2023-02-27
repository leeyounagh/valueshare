import React from "react";
import Navbar from "component/Navbar";
import styled from "styled-components";
import MyAccount from "component/membermypage/MyAccount";
import AddressList from "component/membermypage/AddressList";
import ShoppingBag from "component/membermypage/ShoppingBag";
import Help from "component/membermypage/Help";
import MemberMyOrder from "component/membermypage/MemberMyOrder";

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
  padding-left: 55px;
  padding-top: 80px;
`;

function MyPage() {
  return (
    <div>
      <Navbar />
      <SLayout>
        <SUserInfoDiv>
          <MyAccount />
          <AddressList />
        </SUserInfoDiv>
        <SUserShoppingbagDiv>
          <ShoppingBag />
        </SUserShoppingbagDiv>
        <SUserOrderDiv>
          <MemberMyOrder />
          <Help />
        </SUserOrderDiv>
      </SLayout>
    </div>
  );
}

export default MyPage;
