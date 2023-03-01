/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import color from "styles/color";
import AxiosInstance from "data/AxiosInstance";
// import handleBasket from "utils/handleBasket";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { passId } from "slice/DetailSlice";
import handleBasket from "utils/handleBasket";
import InfiniteScroll from "react-infinite-scroll-component";

// eslint-disable-next-line no-unused-vars

const SLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    h4 {
      width: 100%;
      text-align: center;
    }
  }
`;

const SCardDiv = styled.div`
  width: 340px;
  height: 550px;
  margin: 20px 10px;
  padding: 28px 25px 19px 19px;
  border: solid 1px ${color.gray5};
`;
const SCardBrand = styled.div`
  width: 100%;
  font-size: 20px;

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
  margin-right: -4px;
`;
const SCardImg = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
  margin-bottom: 27px;
`;
const SCardTitleDiv = styled.div`
  width: 100%;
  font-weight: 500;
`;
const SCartDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const SCardBrandNameDiv = styled.div`
  font-size: 20px;
  text-align: left;
  color: ${color.gray1};
`;
const SCartImgDiv = styled.div`
  cursor: pointer;
`;

function Card() {
  const [productData, setData] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const PassIdHandler = (_id) => {
    dispatch(passId(_id));
  };

  const [searchParams] = useSearchParams({
    categories: "all",
    brand: "all",
  });

  const categories = searchParams.get("categories");
  const brand = searchParams.get("brand");

  useEffect(() => {
    async function getProducts() {
      const response = await AxiosInstance.get("/products", {
        params: {
          categories: `${categories}`,
          brand: `${brand}`,
          page: `${page}`,
        },
      });

      setData([...productData, ...response.data.result]);
    }
    getProducts();
  }, [categories, brand]);

  const fetchData = async () => {
    console.log("테스트");
    setPage((prev) => {
      return prev + 1;
    });
    const response = await AxiosInstance.get("/products", {
      params: {
        categories: `${categories}`,
        brand: `${brand}`,
        page: `${page}`,
      },
    });

    setData([...productData, ...response.data.result]);
  };
  console.log(page);
  return (
    <SLayout>
      <InfiniteScroll
        dataLength={productData.length}
        next={fetchData}
        hasMore
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>상품을 모두 구경했습니다.</b>
          </p>
        }
      >
        {productData.map((item) => {
          return (
            <SCardDiv key={item._id}>
              <Link
                to={`/product/${item._id}`}
                onClick={() => PassIdHandler(item._id)}
              >
                <SCardImg
                  className="lazy"
                  src={item.productImage[0]}
                  alt="상품썸네일"
                  loading="lazy"
                />
              </Link>
              <SCardTitleDiv>
                <SCardBrand>{item.productBrand.brandName} </SCardBrand>
                <SCardBrandNameDiv>{item.productTitle}</SCardBrandNameDiv>
              </SCardTitleDiv>
              <SCartDiv
                onClick={() => {
                  handleBasket(item);
                  alert("장바구니에 추가되었습니다!");
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
      </InfiniteScroll>
    </SLayout>
  );
}

export default Card;
