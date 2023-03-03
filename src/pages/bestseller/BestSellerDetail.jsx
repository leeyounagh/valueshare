import React, { useEffect } from "react";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import styled from "styled-components";
import color from "styles/color";

const Slayout = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  padding: 80px 0;
  background-color: ${color.white};

  a {
    text-decoration: none;
    color: ${color.gray1};
    width: 100%;
    height: 100%;
  }
`;

const Product = styled.div`
  width: 45%;
  height: 400px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  backgroud-color: ${color.gray1};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const GotoProduct = styled.div`
  position: absolute;
  text-align: center;
  width: 45%;
  margin-top: 180px;
  font-size: 24px;
  font-weight: 500;
  opacity: 0;

  ${Product}:hover & {
    opacity: 1;
  }
`;

const images = [
  "asset/img-bestseller1.png",
  "asset/img-bestseller2.png",
  "asset/img-bestseller3.png",
  "asset/img-bestseller4.png",
  "asset/img-bestseller5.png",
  "asset/img-bestseller6.png",
];

function BestSellerDetail() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Slayout>
      {images.map((image) => {
        return (
          <Product key={uuid()}>
            <Link to="/product">
              <GotoProduct>
                상품 구경하기
                <img src="asset/icn-rightarrow.svg" alt="바로가기" />
              </GotoProduct>
              <ProductImg src={image} />
            </Link>
          </Product>
        );
      })}
    </Slayout>
  );
}

export default BestSellerDetail;
