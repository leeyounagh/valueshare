import React from "react";
import styled from "styled-components";
import Gucci from "./Gucci";
import LouisVuitton from "./LouisVuitton";
import Rollex from "./Rollex";
import MarcJacobs from "./MarcJacobs";
import Versace from "./Versace";
import Add from "./Add";

const SlayOut = styled.div`
  width: 100%;

  h2 {
    margin-top: 100px;
    margin-bottom: 40px;
    font-size: 50px;
    text-align: center;
    font-family: "Rufina", serif;
    z-index: 1;
  }

  div {
    display: flex;
    position: relative;
    z-index: 1;
    h2 {
      font-size: 2.3rem;
      font-weight: 500;
    }
  }
`;

const Products2 = styled.div`
  display: flex;
  margin-top: -390px;
  margin-left: calc(100% / 4);
`;

const BgImg1 = styled.img`
  position: absolute;
  right: 35%;
  top: 1950px;
  opacity: 0.6;
  scale: 0.8;
`;

const BgImg2 = styled.img`
  position: absolute;
  right: 45%;
  top: 1950px;
  opacity: 0.6;
`;

function BestSellerProduct() {
  return (
    <SlayOut>
      <h2>featured Brands</h2>
      <div>
        <Gucci />
        <LouisVuitton />
        <Rollex />
      </div>
      <Products2>
        <MarcJacobs />
        <Versace />
      </Products2>
      <Add />
      <BgImg1 src="/asset/bg-Ellipse3.svg" />
      <BgImg2 src="/asset/bg-star.svg" />
    </SlayOut>
  );
}

export default BestSellerProduct;
