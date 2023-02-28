import React, { useState } from "react";
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
`;

const Product = styled.div`
  width: auto;
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

const ImgHover = styled.div`
  position: absolute;
  text-align: center;
  width: 48%;
  margin-top: 12%;
  font-size: 24px;
  font-weight: 500;
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
  const [hoverVisible, setHoverVisible] = useState(false);
  return (
    <Slayout>
      {images.map((image) => {
        return (
          <Product
            key={image.index}
            onMouseOver={() => setHoverVisible(!hoverVisible)}
            onMouseOut={() => setHoverVisible(!hoverVisible)}
          >
            {hoverVisible ? (
              <ImgHover>
                상품 구경하기
                <img src="asset/icn-rightarrow.svg" alt="바로가기" />
              </ImgHover>
            ) : null}
            <ProductImg src={image} />
          </Product>
        );
      })}
    </Slayout>
  );
}

export default BestSellerDetail;
