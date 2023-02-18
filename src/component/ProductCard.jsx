import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
const SCartImgDiv = styled.div``;

function ProductCard() {
  const [productData, setData] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/products");
      const apiData = response.data.result;
      setData((prev) => {
        const newData = [...prev];
        newData.push(apiData);
        return newData;
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  console.log(productData);
  return (
    <div>
      {productData.map((item) => {
        return (
          <div>
            {" "}
            <SCardDiv>
              <SCardImg src="/asset/테스트가방.png" alt="상품썸네일" />
              <SCardTitleDiv>
                <SCardBrand>{item.productTitle} </SCardBrand>
                <SCardBrandNameDiv>1970s Hi</SCardBrandNameDiv>
              </SCardTitleDiv>
              <SCartDiv>
                <SCartImgDiv>
                  <SCartImg src="/asset/icn-basket.svg" alt="장바구니" />
                </SCartImgDiv>
                <SPriceText> ₩ 60,000</SPriceText>
              </SCartDiv>
            </SCardDiv>
          </div>
        );
      })}

      {/* {productData.map((item) => {
        return (
    
        );
      })} */}
    </div>
  );
}

export default ProductCard;
