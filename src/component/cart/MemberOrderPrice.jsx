/* eslint-disable no-unreachable-loop */
/* eslint-disable no-plusplus */
import React, { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import color from "styles/color";
import Btn1 from "component/button/Btn1";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setOrderInfo } from "slice/OrderSlice";
import AxiosInstance from "data/AxiosInstance";
import DisableBtn from "component/button/DisableBtn";
import MemberPaypal from "./MemberPaypal";

const { white, gray3, gray1 } = color;

const SLayout = styled.div`
  width: 100%;
  flex-grow: 0;
  padding: 60px 30px;
  border-radius: 10px;
  background-color: ${white};
  .paypal-button:not(.paypal-button-card),
  .paypal-button.paypal-button-shape-rect {
    width: 90%;
    height: 50px !important;
    margin-left: 15px !important;
    border-radius: 10px !important;
  }
`;

const SOrderTitleDiv = styled.div`
  width: 120px;
  height: 53.5px;
  flex-grow: 0;
  margin: 0 337px 30.5px 0;
  font-size: 40px;
  font-weight: 600;

  line-height: normal;

  text-align: left;
  color: ${color.black};
  margin-left: 15px;
  margin-bottom: 50px;
`;
const STotalPricTexteDiv = styled.div`
  width: 90%;
  margin-left: 15px;
  height: auto;
  font-size: 18px;
  font-weight: 400;

  line-height: 2;

  text-align: left;
  color: ${gray3};
  white-space: nowrap;
  margin-bottom: 10px;
`;
const STotalPriceDiv = styled.div`
  flex-grow: 0;
  font-size: 18px;
  font-weight: bold;

  font-style: 1.5;
  line-height: normal;

  text-align: right;
  color: ${gray1};
  display: flex;
  align-items: center;
  height: auto;
`;
const SDeliveryDiv = styled.div`
  display: flex;
  align-items: center;
`;
const SLastTotalDiv = styled.div`
  margin-left: 15px;
  height: 30%;
  display: flex;
  align-items: center;
  margin-top: 50px;
  padding: 40px 0;
  margin-bottom: 20px;
  border-top: 1px solid ${color.gray4};
`;
const STotalTextDiv = styled.div`
  width: 90%;
  flex-grow: 0;

  font-size: 24px;
  font-weight: bold;

  line-height: normal;

  text-align: left;
  color: #000;
`;
const SLastTotalPriceDiv = styled.div`
  flex-grow: 0;

  font-size: 40px;
  font-weight: bold;

  line-height: normal;

  text-align: right;
  color: #ff985f;
`;
const SOrderIcon = styled.div`
  width: 100%;
  height: 80px;
`;

const BtnDiv = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

function MemberOrderPrice({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const [userInfo, setMemberUserInfo] = useState([]);
  const dispatch = useDispatch();
  const userId = useSelector((item) => {
    return item?.UserInfoReducer?.userInfo?.[0]?.user;
  });
  useEffect(() => {
    async function handleUserInfo() {
      try {
        const response = await AxiosInstance.get(`/users/mypage/${userId}`);
        // eslint-disable-next-line no-unused-vars
        const data = await response.data;
        setMemberUserInfo([data[0]]);
      } catch (err) {
        console.log(err);
      }
    }
    handleUserInfo();
  }, []);
  console.log(userInfo);
  const sum = useMemo(() => {
    return cartItems.reduce((acc, cur) => {
      return acc + Number(cur.productPrice) * cur.quantity;
    }, 0);
  }, [cartItems]);

  const changeDoller = Number(sum.toString().slice(0, -3));
  // 한화 달러화
  const handleOrder = async () => {
    const newData = {
      // eslint-disable-next-line prettier/prettier
      phoneNumber: userInfo[0]?.phoneNumber,
      email: userInfo[0]?.email,
      name: userInfo[0]?.name,
      products: cartItems,
      shipStatus: "주문접수",
      shipAdr: userInfo[0]?.shipAdr,
      shipNote: userInfo[0]?.shipNote,
      totalPrice: changeDoller,
    };

    try {
      const response = await AxiosInstance.post("/checkout", newData);

      const orderData = await response.data;
      console.log("결제확인", orderData, newData);
      dispatch(setOrderInfo(orderData));
      localStorage.removeItem("baskets");
      navigate("/ordersuccess");
      alert("현금결제 접수가 완료되었습니다.");
      setCartItems([]);
    } catch (err) {
      if (err) {
        console.log(err);
        alert("주문접수에 실패했습니다.");
      }
    }
  };
  return (
    <SLayout>
      <SOrderTitleDiv> Order</SOrderTitleDiv>
      <STotalPriceDiv>
        <STotalPricTexteDiv> 주문 금액 합계</STotalPricTexteDiv>
        <STotalPriceDiv> ₩{sum}</STotalPriceDiv>
      </STotalPriceDiv>
      <SDeliveryDiv>
        <STotalPricTexteDiv>배송비</STotalPricTexteDiv>
        <STotalPriceDiv> ₩0</STotalPriceDiv>
      </SDeliveryDiv>
      <SLastTotalDiv>
        <STotalTextDiv>합계</STotalTextDiv>
        <SLastTotalPriceDiv> ₩{sum}</SLastTotalPriceDiv>
      </SLastTotalDiv>
      {cartItems.length > 0 ? (
        <BtnDiv
          onClick={() => {
            handleOrder();
          }}
        >
          <Btn1 title="현금결제 하기" />
        </BtnDiv>
      ) : null}

      {cartItems.length > 0 ? (
        <MemberPaypal
          total={changeDoller}
          cartItems={cartItems}
          setCartItems={setCartItems}
          userInfo={userInfo}
        />
      ) : (
        <SOrderIcon>
          <DisableBtn title="주문하기" />
        </SOrderIcon>
      )}
    </SLayout>
  );
}

export default MemberOrderPrice;
