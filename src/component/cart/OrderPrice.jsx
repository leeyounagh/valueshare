import React, { useMemo } from "react";
import styled from "styled-components";
import color from "styles/color";
import Paypal from "component/cart/Paypal";

const { white, gray3, gray1, gray4, gray5 } = color;

const SLayout = styled.div`
  width: 100%;

  flex-grow: 0;
  padding: 60px 30px;
  border-radius: 10px;
  background-color: ${white};
  z-index: 10;

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
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
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
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
  white-space: nowrap;
  margin-bottom: 10px;
`;
const STotalPriceDiv = styled.div`
  flex-grow: 0;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: 1.5;
  line-height: normal;
  letter-spacing: normal;
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
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
const SLastTotalPriceDiv = styled.div`
  flex-grow: 0;

  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #ff985f;
`;
const SOrderIcon = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  background-color: ${gray4};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const SOrderIconText = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${gray5};
`;

function OrderPrice({ cartItems, setCartItems }) {
  const sum = useMemo(() => {
    return cartItems.reduce((acc, cur) => {
      return acc + Number(cur.productPrice) * cur.quantity;
    }, 0);
  }, [cartItems]);

  const changeDoller = Number(sum.toString().slice(0, -3));
  // 한화 달러화

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
        <Paypal
          total={changeDoller}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ) : (
        <SOrderIcon>
          <SOrderIconText>주문하기</SOrderIconText>
        </SOrderIcon>
      )}
    </SLayout>
  );
}

export default OrderPrice;
