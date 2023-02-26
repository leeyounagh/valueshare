/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { gray1, white, gray3, gray5 } = color;

const SLayout = styled.div`
  border-radius: 10px;
  background-color: ${white};
  padding-left: 30px;
  padding-bottom: 10px;
`;

const STitleDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
const STitemItemDiv = styled.div`
  display: flex;
`;
const SDetailIconImg = styled.div``;
const SShoppingBagTextDiv = styled.div`
  font-family: Montserrat;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
  width: 90%;
`;
const SShoppingBagDiv = styled.div`
  height: 15vh;
  display: flex;
`;
const SProductImg = styled.img`
  height: 130px;
`;
const SProductDiv = styled.div`
  width: 60%;
`;
const SProductTitleDiv = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
  height: 30%;
  padding-left: 10px;
`;

const SProductNameDiv = styled.div`
  font-family: NotoSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
  height: 30%;
  padding-left: 10px;
`;
const SProductPriceDiv = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${gray1};
  height: 30%;
  padding-left: 10px;
`;

const SLinDiv = styled.div`
  background-color: ${gray5};
  height: 1px;
  width: 95%;
  margin-bottom: 10px;
`;
function ShoppingBag() {
  return (
    <SLayout>
      <STitemItemDiv>
        <STitleDiv>
          {" "}
          <SShoppingBagTextDiv>Shopping Bag</SShoppingBagTextDiv>
          <SDetailIconImg>넥스트</SDetailIconImg>
        </STitleDiv>
      </STitemItemDiv>
      <SShoppingBagDiv>
        <SProductImg src="/asset/테스트가방.png" />
        <SProductDiv>
          <SProductTitleDiv>Louis Vuitton</SProductTitleDiv>
          <SProductNameDiv>트위스트 MM 핸드백</SProductNameDiv>
          <SProductPriceDiv>₩60,000</SProductPriceDiv>
        </SProductDiv>
      </SShoppingBagDiv>
      <SLinDiv />
    </SLayout>
  );
}

export default ShoppingBag;
