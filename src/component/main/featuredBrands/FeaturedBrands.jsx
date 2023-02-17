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
    font-size: 50px;
    text-align: center;
  }

  div {
    display: flex;
  }
`;

const Products2 = styled.div`
  display: flex;
  margin-top: -390px;
  margin-left: calc(100% / 4);
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
    </SlayOut>
  );
}

export default BestSellerProduct;
