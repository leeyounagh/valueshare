import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import handleBasket from "utils/handleBasket";

const SLayout = styled.div`
  width: 100%;
  display: grid;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
`;
const SCardDiv = styled.div`
  width: 360px;
  height: 550px;
  margin: 46px 74px 50px 91px;
  padding: 28px 25px 19px 19px;
  border: solid 1px #d9d9d9;
`;
const SCardBrand = styled.div`
  padding-left: 10px;
  width: 100%;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
const SCartImg = styled.img`
  width: 30px;
  height: 30px;
`;
const SPriceText = styled.div`
  width: 103px;
  height: 24px;

  font-family: Montserrat;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
const SCardImg = styled.img`
  width: 310px;
  height: 350px;
  margin: 0 0 22px 6px;
  object-fit: contain;
`;
const SCardTitleDiv = styled.div`
  width: 100%;
`;
const SCartDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  margin-top: 20px;
`;
const SCardBrandNameDiv = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  padding-left: 10px;
`;
const SCartImgDiv = styled.div`
  cursor: pointer;
`;
function Card() {
  const [productData, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admin/products").then((res) =>
      setData((prev) => {
        return [...prev, ...res.data.result];
      })
    );
  }, []);

  return (
    <SLayout>
      {productData.map((item) => {
        return (
          <SCardDiv>
            <SCardImg src={item.productImage[0]} alt="상품썸네일" />
            <SCardTitleDiv>
              <SCardBrand>{item.productBrand} </SCardBrand>
              <SCardBrandNameDiv>{item.productTitle}</SCardBrandNameDiv>
            </SCardTitleDiv>
            <SCartDiv
              onClick={() => {
                handleBasket(item);
              }}
            >
              <SCartImgDiv>
                <SCartImg src="/asset/icn-basket.svg" alt="장바구니" />
              </SCartImgDiv>
              <SPriceText> ₩{item.productPrice}</SPriceText>
            </SCartDiv>
          </SCardDiv>
        );
      })}
    </SLayout>
  );
}

export default Card;
