/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

import { useState } from "react";
import styled from "styled-components";
import color from "styles/color";

const { white, gray1, gray3, gray4 } = color;

const SLayout = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${white};
  padding-bottom: 30px;
`;

const SOrderTitleDiv = styled.div`
  font-size: 40px;
  font-weight: 600;

  line-height: normal;

  text-align: left;
  color: #000;
  height: 10vh;
  display: flex;
  align-items: flex-end;
  margin-bottom: 50px;
  margin-right: 10px;
  padding-left: 20px;
`;
const SOrderItemDiv = styled.div`
  width: 90%;
  height: 13vh;
  display: flex;
  padding-left: 20px;
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
  line-height: normal;

  text-align: left;
  color: ${gray1};
  height: 50%;
  display: flex;
  align-items: center;
`;
const SProductNameDiv = styled.div`
  font-size: 18px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${gray3};
`;
const SQuantityDiv = styled.div`
  font-size: 18px;
  font-weight: bold;

  line-height: normal;

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

  line-height: normal;

  color: ${gray1};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SLinDiv = styled.div`
  width: 90%;
  height: 1px;
  margin-top: 30px;
  background-color: ${gray4};
  margin-bottom: 20px;
  margin-left: 20px;
`;
const SBrandTitleDiv = styled.div`
  display: flex;
`;
function OrderProduct({ orderData, products }) {
  // console.log("상품", orderData, imgArr);
  console.log(products);
  return (
    <SLayout>
      <SOrderTitleDiv>Order {orderData[0]?.orderNumber}</SOrderTitleDiv>
      {products?.map((item) => {
        return (
          <>
            <SOrderItemDiv>
              <SItemImgDiv>
                <SImg src={item.productImage[0]} />
              </SItemImgDiv>
              <STitleDiv>
                <SBrandNameDiv>{item.productBrand}</SBrandNameDiv>
                <SProductNameDiv>{item.productTitle}</SProductNameDiv>
              </STitleDiv>
              <SQuantityDiv>{item.productQuantity}개</SQuantityDiv>
              <SPriceDiv>
                {" "}
                ₩{item.productPrice * item.productQuantity}
              </SPriceDiv>
            </SOrderItemDiv>
            <SLinDiv />
          </>
        );
      })}
    </SLayout>
  );
}

export default OrderProduct;
