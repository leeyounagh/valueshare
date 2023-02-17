import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: 100%;
`;

const Product = styled.div`
  width: 360px;
  height: 550px;
  border: 1px solid ${color.gray4};

  p {
    width: 310px;
  }
`;

const ProductImg = styled.img`
  width: 310px;
  height: 370px;
`;

function ProductCard() {
  return (
    <SlayOut>
      <Product>
        <ProductImg src="" />
        <p>Converse All Star 1970s HI</p>
      </Product>
    </SlayOut>
  );
}

export default ProductCard;
