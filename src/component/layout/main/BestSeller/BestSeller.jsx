import React from "react";
import styled from "styled-components";
import color from "../../../../styles/color";
import Product from "./Product";

const SlayOut = styled.div`
  width: 100%;
  background-color: ${color.white};

  h2 {
    margin-top: 100px;
    font-size: 50px;
    text-align: center;
  }

  div {
    display: flex;
  }
`;

function BestSellerProduct() {
  return (
    <SlayOut>
      <h2>Best Seller</h2>
      <div>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </SlayOut>
  );
}

export default BestSellerProduct;
