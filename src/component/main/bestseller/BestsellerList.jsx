import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Slayout = styled.div`
  width: 100%;

  h2 {
    margin-top: 120px;
    margin-bottom: 40px;
    font-size: 50px;
    text-align: center;
    font-family: "Rufina", serif;
  }

  div {
    display: flex;
  }
`;

const BgImg1 = styled.img`
  position: absolute;
  left: 35%;
  top: 1090px;
  z-index: -1;
  opacity: 0.6;
  scale: 0.8;
`;

const BgImg2 = styled.img`
  position: absolute;
  right: 35%;
  top: 1090px;
  z-index: -1;
  opacity: 0.6;
`;

function BestsellerList() {
  return (
    <Slayout>
      <h2>Best Seller</h2>
      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <BgImg1 src="/asset/bg-Ellipse3.svg" />
        <BgImg2 src="/asset/bg-star.svg" />
      </div>
    </Slayout>
  );
}

export default BestsellerList;
