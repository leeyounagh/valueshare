/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "component/Navbar";
import styled from "styled-components";
import color from "styles/color";
import MemberAddress from "component/cart/MemberAddress";
import EmptyCart from "../../component/cart/EmptyCart";
import OrderPrice from "../../component/cart/OrderPrice";
import GetItemCart from "../../component/cart/GetItemCart";
import Address from "../../component/cart/Address";
import MemberOrderPrice from "component/cart/MemberOrderPrice";

const { gray6, white } = color;

const SLayout = styled.div`
  width: 100%;
  padding: 0 0 200px;
  background-color: ${gray6};
  display: flex;
`;
const SEmptyCartDiv = styled.div`
  width: 60%;
  height: 50%;
  padding: 158px 413px 159px;
  background-color: ${white};
  border-radius: 10px;
  margin-top: 80px;
  margin-left: 70px;
`;
const SOrderPriceDiv = styled.div`
  margin-top: 80px;
  margin-left: 50px;
  width: 305;
`;
const SGetItemCartDiv = styled.div`
  width: 60%;
  background-color: ${white};
  border-radius: 10px;
  margin-top: 80px;
  margin-left: 70px;
`;

const getInitialCartItems = () => {
  const items = localStorage.getItem("baskets");
  return items ? JSON.parse(localStorage.getItem("baskets")) : [];
};

function Cart() {
  const [cartItems, setCartItems] = useState(getInitialCartItems());
  const auth = useSelector((item) => {
    return item.UserInfoReducer?.userInfo?.[0]?.aud;
  });

  console.log("테스트");

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <SLayout>
        {cartItems.length === 0 ? (
          <SEmptyCartDiv>
            <EmptyCart />
          </SEmptyCartDiv>
        ) : (
          <SGetItemCartDiv>
            <GetItemCart cartItems={cartItems} setCartItems={setCartItems} />
          </SGetItemCartDiv>
        )}

        <SOrderPriceDiv>
          {auth === "false" ? <MemberAddress /> : <Address />}
          {auth === "false" ? (
            <MemberOrderPrice
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ) : (
            <OrderPrice cartItems={cartItems} setCartItems={setCartItems} />
          )}
        </SOrderPriceDiv>
      </SLayout>
    </div>
  );
}

export default Cart;
