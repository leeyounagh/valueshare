import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { white, gray1, gray3 } = color;

const SLayout = styled.div`
  width: 60%;
  margin-left: 140px;
  border-radius: 10px;
  background-color: ${white};
  padding-left: 60px;
`;

const SOrderTitleDiv = styled.div`
  font-size: 40px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  height: 10vh;
  display: flex;
  align-items: flex-end;
  margin-bottom: 50px;
`;
const SOrderItemDiv = styled.div`
  width: 90%;
  height: 13vh;
  display: flex;
`;
const SItemImgDiv = styled.div`
  height: 100%;
`;
const SImg = styled.img`
  height: 100%;
`;
const STitleDiv = styled.div`
  width: 50%;
  padding-left: 20px;
`;
const SBrandNameDiv = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
  height: 50%;
  display: flex;
  align-items: center;
`;
const SProductNameDiv = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
`;
const SQuantityDiv = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${gray1};
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SPriceDiv = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${gray1};
  display: flex;
  justify-content: center;
  align-items: center;
`;
function OrderProduct() {
  return (
    <SLayout>
      <SOrderTitleDiv>Order #125466</SOrderTitleDiv>
      <SOrderItemDiv>
        <SItemImgDiv>
          <SImg src="/asset/테스트가방.png" />
        </SItemImgDiv>
        <STitleDiv>
          <SBrandNameDiv>Louis Vuitton</SBrandNameDiv>
          <SProductNameDiv>트위스트 MM 핸드백</SProductNameDiv>
        </STitleDiv>
        <SQuantityDiv>1개</SQuantityDiv>
        <SPriceDiv> ₩60,000</SPriceDiv>
      </SOrderItemDiv>
    </SLayout>
  );
}

export default OrderProduct;
