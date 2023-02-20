import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Slayout = styled.div`
  width: 100%;
  height: 200px;
  div {
    width: 500px;
    height: 100px;
  }
`;

function Detail() {
  const [productInformation, setProductInformation] = useState(null);
  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/admin/products/${productId}`)
      .then((res) => {
        setProductInformation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Slayout>
      <div>
        <h1>{productInformation?.name}</h1>
        <p>{productInformation?.description}</p>
      </div>
    </Slayout>
  );
}

export default Detail;
