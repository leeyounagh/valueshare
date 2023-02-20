import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Slayout = styled.div`
  width: 100%;
  height: 200px;
  div {
    width: 500px;
    height: 100px;
  }
`;

function Detail() {
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const productId = products.find((product) => product.id === Number(id));
  console.log(productId);
  return (
    <Slayout>
      <div>{productId.title}</div>
    </Slayout>
  );
}

export default Detail;
