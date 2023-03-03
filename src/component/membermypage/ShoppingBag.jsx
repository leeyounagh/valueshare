/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import color from "styles/color";

const { gray1, white, gray3, gray5 } = color;

const SLayout = styled.div`
  width: 100%;
  min-height: 73vh;
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
const SDetailIconImg = styled.img``;
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
  margin-bottom: 50px;
`;
const SProductImg = styled.img`
  height: 130px;
`;
const SProductDiv = styled.div`
  width: 60%;
  margin-left: 50px;
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
  margin-bottom: 20px;
`;

const SLinDiv = styled.div`
  background-color: ${gray5};
  height: 1px;
  width: 90%;
  margin-bottom: 10px;
`;
const SImg = styled.img`
  width: 95px;
  height: 130px;
`;
const SBrandDiv = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
  padding-left: 10px;
  height: 40%;
  display: flex;
  align-items: center;
`;
const SItemDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

function ShoppingBag() {
  const baskets = localStorage.getItem("baskets");
  const basketsData = baskets ? JSON.parse(baskets) : [];

  return (
    <SLayout>
      <STitemItemDiv>
        <STitleDiv>
          <SShoppingBagTextDiv>Shopping Bag</SShoppingBagTextDiv>
          <Link to="/cart">
            {" "}
            <SDetailIconImg src="/asset/icn-rightarrow.svg" />
          </Link>
        </STitleDiv>
      </STitemItemDiv>
      <SShoppingBagDiv>
        {basketsData.map((item) => {
          return (
            <div>
              <SItemDiv>
                <SImg src={item.productImage[0]} />
                <SProductDiv>
                  <SBrandDiv>{item.productBrand.brandName}</SBrandDiv>
                  <SProductNameDiv>{item.productTitle}</SProductNameDiv>
                  <SProductPriceDiv>₩{item.productPrice}</SProductPriceDiv>
                </SProductDiv>
              </SItemDiv>
              <SLinDiv />
            </div>
          );
        })}
      </SShoppingBagDiv>
    </SLayout>
  );
}

export default ShoppingBag;
