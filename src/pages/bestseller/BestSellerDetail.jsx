import React from "react";
import styled from "styled-components";
import color from "styles/color";

const SlayOut = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  padding: 80px 0;
  background-color: ${color.white};
`;

const Product = styled.div`
  width: 45%;
  height: 350px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

function BestSellerDetail() {
  return (
    <SlayOut>
      <Product>
        <ProductImg src="asset/img-bestseller1.png" />
      </Product>
      <Product>
        <ProductImg src="asset/img-bestseller2.png" />
      </Product>
      <Product>
        <ProductImg src="asset/img-bestseller3.png" />
      </Product>
      <Product>
        <ProductImg src="asset/img-bestseller4.png" />
      </Product>
      <Product>
        <ProductImg src="asset/img-bestseller5.png" />
      </Product>
      <Product>
        <ProductImg src="asset/img-bestseller6.png" />
      </Product>
    </SlayOut>
  );
}

export default BestSellerDetail;
