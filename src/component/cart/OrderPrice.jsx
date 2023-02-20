import React, { useMemo } from "react";
import styled from "styled-components";
import color from "styles/color";
// import Paypal from "component/cart/Paypal";

const { white, gray3, gray1, gray4, gray5 } = color;

const SLayout = styled.div`
  width: 100%;
  height: 597px;
  flex-grow: 0;
  padding: 60px 30px;
  border-radius: 10px;
  background-color: ${white};
`;

const SOrderTitleDiv = styled.div`
  width: 120px;
  height: 53.5px;
  flex-grow: 0;
  margin: 0 337px 30.5px 0;
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
const STotalPricTexteDiv = styled.div`
  width: 90%;
  height: 36px;
  font-family: NotoSans;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
  white-space: nowrap;
  margin-bottom: 10px;
`;
const STotalPriceDiv = styled.div`
  flex-grow: 0;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: ${gray1};
  display: flex;
  align-items: center;
  height: 100px;
`;
const SDeliveryDiv = styled.div`
  display: flex;
  align-items: center;
`;
const SLastTotalDiv = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
`;
const STotalTextDiv = styled.div`
  width: 90%;
  flex-grow: 0;
  font-family: NotoSansKR;
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
  font-family: Montserrat;
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
  font-family: NotoSans;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${gray5};
`;

function OrderPrice({ cartItems }) {
  const sum = useMemo(() => {
    return cartItems.reduce((acc, cur) => {
      return acc + Number(cur.productPrice) * cur.quantity;
    }, 0);
  }, [cartItems]);

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

      <SOrderIcon>
        {/* <Paypal /> */}
        <SOrderIconText>주문하기</SOrderIconText>
      </SOrderIcon>
    </SLayout>
  );
}

export default OrderPrice;
