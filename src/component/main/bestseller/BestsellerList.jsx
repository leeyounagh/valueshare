import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";
import ProductCard from "./ProductCard";

const Slayout = styled.div`
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

function BestsellerList() {
  return (
    <Slayout>
      <h2>Best Seller</h2>
      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Slayout>
  );
}

export default BestsellerList;
