/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import color from "styles/color";
import axios from "axios";
import handleBasket from "utils/handleBasket";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { passId } from "slice/DetailSlice";
// eslint-disable-next-line no-unused-vars

const SLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;
`;
const SCardDiv = styled.div`
  width: 340px;
  height: 550px;
  margin: 20px 10px;
  padding: 28px 25px 19px 19px;
  border: solid 1px ${color.gray5};
`;
const SCardBrand = styled.div`
  padding-left: 10px;
  width: 9%;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.5;
  text-align: left;
  color: ${color.black};
`;
const SCartImg = styled.img`
  width: 30px;
  height: 30px;
`;
const SPriceText = styled.div`
  width: 103px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  color: ${color.black};
  text-align: right;
`;
const SCardImg = styled.img`
  width: 310px;
  height: 350px;
  margin: 0 0 22px 6px;
  object-fit: contain;
`;
const SCardTitleDiv = styled.div`
  width: 100%;
  font-weight: 500;
`;
const SCartDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 6px;
  margin-top: 20px;
`;
const SCardBrandNameDiv = styled.div`
  font-size: 20px;
  text-align: left;
  color: ${color.gray1};
  padding-left: 10px;
`;
const SCartImgDiv = styled.div`
  cursor: pointer;
`;

function Card() {
  const [productData, setData] = useState([]);

  const dispatch = useDispatch();
  const PassIdHandler = (_id) => {
    dispatch(passId(_id));
  };

  const [searchParams] = useSearchParams({
    categories: "all",
  });

  const categories = searchParams.get("categories");

  console.log(categories);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("http://localhost:5000/products", {
        params: { categories: `${categories}` },
      });
      console.log(response);
      setData(response.data.result);
    }
    getProducts();
  }, [categories]);

  return (
    <SLayout>
      {productData.map((item) => {
        return (
          <SCardDiv>
            <Link
              key={item._id}
              to={`/product/${item._id}`}
              onClick={() => PassIdHandler(item._id)}
            >
              <SCardImg src={item.productImage[0]} alt="상품썸네일" />
            </Link>
            <SCardTitleDiv>
              <SCardBrand>{item.productBrand.brandName} </SCardBrand>
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
